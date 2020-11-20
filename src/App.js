import "./App.css";
import { useEffect, useState } from "react";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);
  return (
    <div className="app">
      {/* app container
      vidos */}
      <div className="app__videos">
        {videos.map((video) => {
          const {
            _id,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          } = video;
          return (
            <Video
              key={_id}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
