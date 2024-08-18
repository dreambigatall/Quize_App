
//import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react"
import Header from "./Header"
import Main from "./Main"
import Loader from "./Loader";
import Error from "./Error";
import StarterScreen from "./StarterScreen";
import { type } from "@testing-library/user-event/dist/type";
import Quetions from "./Quetions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
const SEC_PER_Q=30;
const initialState={quetions:[], status:"loading", 
  index:0, answer: null,
   point:0 , 
   higeScore:0,
  secondRemains:null};

function reducer(state,action){
  switch(action.type){
    case "dataReceived":
      return{
        ...state, quetions:action.payload,
        status:"ready"
      };
    case "dataFailed":
      return{
        ...state, status:"error",
      };
    case 'start':
      return{
        ...state, status:'active', secondRemains:state.quetions.length * SEC_PER_Q,
      };
    case 'newAnswer':
      const Quetion= state.quetions.at(state.index);
      return{
        ...state, answer:action.payload,
        point:action.payload===Quetion.correctOption?
        state.point+Quetion.points:state.point,
      };
    case "nextQuetion":
      return{
        ...state,
         index:state.index+1, answer:null
      };
    case "Finished":
      return{
        ...state, status:"finished",
        higeScore:state.point>state.higeScore ? state.point:state.higeScore
      };
    case "restart":
      return{ ...initialState, quetions:state.quetions, status:"ready"


      }
     // return{...state, point:0, higeScore:0, index:0, answer:null}
    case 'tick':
      return {
        ...state, secondRemains:state.secondRemains-1,
         status: state.secondRemains===0?'finished':state.status,
      };
     default:
      throw new Error("action unkonwn")
  }

}

export default function App(){

const[state, dispatch] = useReducer(reducer, initialState);


useEffect(function(){
  fetch("http://localhost:9000/questions")
  .then((res)=>res.json())
  .then((data)=> dispatch({type:"dataReceived" , payload:data}) )
  .catch((err)=>dispatch({type:"dataFailed"}));
},[])

const {quetions,status,index, answer,
  secondRemains,point, higeScore}= state;
const numQuetion=quetions.length;
const maxPossiblePoints = quetions.reduce((prev,cur)=>
  prev+cur.points,0)
  return( <div className="app">
  
    <Header/>
    <Main>
      {status==="loading" && <
        Loader/>}
      {status==="error" && <Error/>}
      {status==="ready" && <StarterScreen 
      numQuetions={numQuetion} dispatch={dispatch}/>}
      {status==="active" &&(
      <>
      <Progress numQuetion={numQuetion} index={index} 
      points={point}
       maxpoint={maxPossiblePoints}
       answer={answer}/>
       <Quetions quetiond={quetions[index]}
        dispatch={dispatch} answer={answer}/>
      <Footer>

        <Timer dispatch={dispatch} secondRemains={secondRemains}/>
      <NextButton index={index} 
      numQuetion={numQuetion}
      dispatch={dispatch} 
      answer={answer}/>


        </Footer>

      </>)}

      {status==="finished" && 
      <FinishScreen point={point} 
      maxPossiblePoint={maxPossiblePoints}
       highScore={higeScore}
       dispatch={dispatch}/>
      }
    </Main>

  </div>
  )
}