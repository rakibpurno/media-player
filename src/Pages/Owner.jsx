import { useContext, useState, useEffect } from "react";
import "./Owner.css";
import { ChannelContext } from "../Context/ChannelContext";

/* NUMBER FORMAT */

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num;
}

export default function Owner() {

  const { videos, setVideos, subscribers } = useContext(ChannelContext);

  const channel = {
    name: "ABC Fun",
    banner: "https://picsum.photos/1200/300"
  };

  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState("");
  const [realtime, setRealtime] = useState(120);

  /* realtime analytics */

  useEffect(() => {

    const interval = setInterval(() => {
      setRealtime(v => v + Math.floor(Math.random() * 5));
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  /* upload */

  const uploadVideo = () => {

    if (!title || !thumb) return;

    const newVideo = {
      id: Date.now(),
      title: title,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: thumb,
      views: 0,
      likes: 0,
      dislikes: 0,
      comments: []
    };

    setVideos([...videos, newVideo]);

    setTitle("");
    setThumb("");

  };

  /* delete */

  const deleteVideo = (index) => {

    const updated = [...videos];
    updated.splice(index, 1);
    setVideos(updated);

  };

  const totalViews = videos.reduce((a, v) => a + v.views, 0);
  const totalLikes = videos.reduce((a, v) => a + v.likes, 0);

  return (

    <div className="owner-container">

      {/* CHANNEL */}

      <div className="channel-banner">

        <img src={channel.banner} alt="channel banner" />

        <div className="channel-info">
          <h1>{channel.name}</h1>
          <p>{formatNumber(subscribers)} Subscribers</p>
        </div>

      </div>


      {/* ANALYTICS */}

      <div className="stats">

        <div className="stat">
          <h3>📹 Videos</h3>
          <p>{formatNumber(videos.length)}</p>
        </div>

        <div className="stat">
          <h3>👁 Views</h3>
          <p>{formatNumber(totalViews)}</p>
        </div>

        <div className="stat">
          <h3>👍 Likes</h3>
          <p>{formatNumber(totalLikes)}</p>
        </div>

        <div className="stat">
          <h3>🔥 Live Views</h3>
          <p>{formatNumber(realtime)}</p>
        </div>

      </div>


      {/* UPLOAD */}

      <div className="upload-box">

        <h2>Upload Video</h2>

        <input
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Thumbnail URL"
          value={thumb}
          onChange={(e) => setThumb(e.target.value)}
        />

        <button onClick={uploadVideo}>
          Upload Video
        </button>

      </div>


      {/* VIDEOS */}

      <div className="videos">

        <h2>Your Videos</h2>

        <div className="video-grid">

          {videos.map((video, vi) => (

            <div key={video.id} className="video-card">

              <img src={video.thumbnail} alt={video.title} />

              <div className="video-info">

                <h3>{video.title}</h3>

                <p>
                  👁 {formatNumber(video.views)} •
                  👍 {formatNumber(video.likes)} •
                  👎 {formatNumber(video.dislikes)}
                </p>

                <p>
                  💬 {formatNumber(video.comments.length)} Comments
                </p>

                <button
                  className="delete-video"
                  onClick={() => deleteVideo(vi)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}