import reactLogo from './assets/react.svg'
import './App.css'
import React,{useState,useEffect , useRef} from 'react'
import Input from "./component/Input"

function App() {
const first = useRef(null)
const second = useRef(null)
const third = useRef(null)
const fourth = useRef(null)
const Submit = useRef(null)
const[text1,stetext1]=useState("")
const[text2,stetext2]=useState("")
const[text3,stetext3]=useState("")
const[text4,stetext4]=useState("")


// useEffect(()=>{
//   first.current.focus()
// },[])
function firstKey(e){
  console.log(e.target.value)
  console.log("line17",text1.length)
  stetext1(e.target.value)
  if(text1.length > -1){
    second.current.focus()
  }

}
function secondkey (e){
  stetext2(e.target.value)
  if(text2.length > -1){
    third.current.focus()
  }
  // stetext2(" ")
}
function thirdkey (e){
  stetext3(e.target.value)
  if(text3.length > -1){
    fourth.current.focus()
  }
  // stetext1(" ")
}
function fourthkey (e){
  stetext4(e.target.value)
  if(text4.length > -1){
    Submit.current.focus()
  }
  // stetext1(" ")
}
function submitdown(){
  alert("form Submitted")
  stetext1("")
  stetext2("")
  stetext3("")
  stetext4("")
  first.current.focus()
}
  
  return (
    <div className="App">
  <Input
  type="text"
  onChange={firstKey}
  ref={first}
  value={text1}
  placeholder="firstinput"
  />
    <Input
  type="text"
  onChange={secondkey}
  ref={second}
  value={text2}
  placeholder="secondinput"
  />
     <Input
  type="text"
  onChange={thirdkey}
  ref={third}
  value={text3}
  placeholder="thirdinput"
  />
     <Input
  type="text"
  onChange={fourthkey}
  ref={fourth}
  value={text4}
  placeholder="fourthinput"
  />
  <button onClick={submitdown} ref={Submit}>Submit</button>
    </div>
  )
}

export default App
