import React from 'react'

const HEAD = (
    <div style = {{
        width:"50px",
        height:"50px",
        borderRadius: "100%",
        top: "50px",
        border:"10px solid black",
        position:"absolute",
        right:"-30px"
    }} ></div>
)

const BODY = (
    <div style = {{
        width:"10px",
        height:"150px",
        backgroundColor:"black",
        top: "120px",
        // border:"5px solid black",
        position:"absolute",
        right:"0px"
    }} ></div>
)

const RIGHT_ARM = (
    <div style = {{
        width:"100px",
        height:"10px",
        backgroundColor: "black",
        top: "150px",
        // border:"5px solid black",
        position:"absolute",
        right:"-90px",
        rotate: "-30deg",
    }} ></div>
)

const LEFT_ARM = (
    <div style = {{
        width:"100px",
        height:"10px",
        backgroundColor: "black",
        top: "150px",
        position:"absolute",
        right:"1px",
        rotate: "30deg",
    }} ></div>
)

const LEFT_LEG = (
    <div style = {{
        width:"100px",
        height:"10px",
        backgroundColor: "black",
        top: "285px",
        position:"absolute",
        right:"1px",
        rotate: "-30deg",
    }} ></div>
)

const RIGHT_LEG = (
    <div style = {{
        width:"100px",
        height:"10px",
        backgroundColor: "black",
        top: "285px",
        position:"absolute",
        right:"-90px",
        rotate: "30deg",
    }} ></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM,RIGHT_LEG,LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses : number;
}

const HangmanDrawing = ({numberOfGuesses} : HangmanDrawingProps) => {
  return (
    <div style ={{ position:"relative" }}>

          {BODY_PARTS.slice(0,numberOfGuesses)}
          
        <div style = {{
            position:"absolute",
            width: "10px",
            color:"black",
            height:"50px",
            backgroundColor:"black",
            top:0,
            right:0,
        }} ></div>
        
        <div style = {{
            width: "200px",
            color:"black",
            height:"10px",
            marginLeft:"70px",
            backgroundColor:"black",
        }} ></div>
         
         <div style = {{
            width: "10px",
            color:"black",
            height:"500px",
            marginLeft:"70px",
            backgroundColor:"black",
           
        }} ></div>
        <div style = {{
            width: "150px",
            color:"black",
            height:"10px",
            marginLeft:"0px",
            backgroundColor:"black",
        }} >

        </div>
      
    </div>
  )
}

export default HangmanDrawing
