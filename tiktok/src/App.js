import './App.css';
import Video from './Video';
import React, { useEffect, useState } from "react"
import axios from "./axios"






function App() {

  const [videos, setVideos] = useState([])

  // note: when the app component loads, go ahed and run this code
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts")
      // console.log(response)
      setVideos(response.data)
      return response
    }
    fetchPosts()
  }, [])

  console.log(videos)
  // console.log("this is a test check")

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>


      {/* <VideoFooter />
      <VideoSidebar /> */}
      {/* <Ticker>
        {({ index }) => (
          <>
            <h1 style={{ paddingRight: "0.5em" }}>
              This is the Headline of element #{index}!
            </h1>
          </>
        )}
      </Ticker> */}
    </div>

  );
}

export default App;
