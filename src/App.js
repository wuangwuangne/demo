import { useRef } from "react";
import Video from "./Video";
function App(){

   const videoRef = useRef()

   const handlePlay = ()=>{
    videoRef.current.play()
   }
   const handlePause = ()=>{
    videoRef.current.pause()
   }
  return(
      <div >
        <h1 style={{textAlign: "center"}}>  CHÀO MỪNG BẠN ĐẾN VỚI WEB GÁI XINH </h1>
        <Video ref={videoRef}/>
        <div style={{textAlign: "center"}} >
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Stop</button>
        </div>
      
      </div>
  )
}

export default App
