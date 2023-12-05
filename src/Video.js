import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './videos/video2.mp4'

function Video(props,ref){
    const videoRef = useRef()
     useImperativeHandle(ref, ()=> ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
     }))
    return(
        <video 
        src={video1} 
        ref={videoRef}
        width={280}
        style={{marginLeft:700}}
        />
    )
}

export default forwardRef(Video)