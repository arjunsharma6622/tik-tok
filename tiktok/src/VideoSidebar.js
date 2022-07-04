import React, {useState} from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLiked] = useState(false)
    // const []
  return (
    <div className='VideoSidebar'>
        <div className="videoSidebar_button">
            {/* <FavoriteIcon fontSize= "large"></FavoriteIcon> */}
            {liked ? <FavoriteIcon fontSize='large' onClick = {e => setLiked(false)}/> : <FavoriteBorderIcon fontSize='large' onClick = {e => setLiked(true)}/>}
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="videoSidebar_button">
            <MessageIcon></MessageIcon>
            <p>{messages}</p>
        </div>
        <div className="videoSidebar_button">
            <ShareIcon></ShareIcon>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar