import React, {useState, useRef} from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({url, channel, description, song, likes, messages, shares}) => {
    const videoRef = useRef(null)

    const [playing, setPlaying] = useState(false)


    const handlePlay = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }



  return (
    <div className='video'>
        <video 
            loop 
            ref={videoRef} 
            className = "video_player" src={url}
            onClick={handlePlay}
        >
        </video>
        {/* video footer */}
        <VideoFooter 
            channel={channel} 
            description={description} 
            song={song} 
        />
        <VideoSidebar 
            likes={likes} 
            messages={messages} 
            shares={shares} 
        />
        
        {/* video sidebar */}

    </div>
  )
}

export default Video