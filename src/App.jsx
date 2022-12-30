import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React,{useEffect , useRef} from 'react'
import Input from "./component/Input"

function App() {
const first = useRef(null)
const second = useRef(null)
const third = useRef(null)
const fourth = useRef(null)
const Submit = useRef(null)

// useEffect(()=>{
//   first.current.focus()
// })
function firstKey(e){
  console.log(e.key.length)
  if(e.key.length == 1){
    second.current.focus()
  }
}
function secondkey (e){
  if(e.key.length == 1){
    third.current.focus()
  }
}
function thirdkey (e){
  if(e.key.length == 1){
    fourth.current.focus()
  }
}
function fourthkey (e){
  if(e.key.length == 1){
    Submit.current.focus()
  }
}
function submitdown(){
  alert("form Submitted")
}
  
  return (
    <div className="App">
  <Input
  type="text"
  onKeyDown={firstKey}
  ref={first}
  placeholder="firstinput"
  />
    <Input
  type="text"
  onKeyDown={secondkey}
  ref={second}
  placeholder="secondinput"
  />
     <Input
  type="text"
  onKeyDown={thirdkey}
  ref={third}
  placeholder="thirdinput"
  />
     <Input
  type="text"
  onKeyDown={fourthkey}
  ref={fourth}
  placeholder="fourthinput"
  />
  <button onKeyDown={submitdown} ref={Submit}>Submit</button>
    </div>
  )
}

export default App
