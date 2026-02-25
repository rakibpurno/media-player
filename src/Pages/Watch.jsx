import { useState, useRef } from "react";
import "./Watch.css";

export default function Watch() {
  // 🔹 Video list
  const videos = [
    {
      id: 1,
      title: "Big Buck Bunny (4K)",
      url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
      views: "290K views",
      date: "5 days ago",
      channel: "Sporty Clips",
      description: "Short 4K clip of Big Buck Bunny.",
      thumbnail: "https://picsum.photos/300/170?4",
    },
    {
      id: 2,
      title: "Big Buck Bunny (HD)",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      views: "92K views",
      date: "5 days ago",
      channel: "ABC Fun",
      description: "Classic animated short in HD.",
      thumbnail: "https://picsum.photos/300/170?1",
    },
    {
      id: 3,
      title: "Sintel Trailer (HD)",
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      views: "44K views",
      date: "1 day ago",
      channel: "ABC Fun",
      description: "Blender open movie trailer in HD.",
      thumbnail: "https://picsum.photos/300/170?2",
    },
    {
      id: 4,
      title: "Sintel (Trailer 4K)",
      url: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_1MB.mp4",
      views: "620K views",
      date: "4 days ago",
      channel: "Wild World",
      description: "Blender open movie short clip in 4K.",
      thumbnail: "https://picsum.photos/300/170?5",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [likes, setLikes] = useState(3100);
  const [dislikes, setDislikes] = useState(120);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [embedCode, setEmbedCode] = useState(""); // For generated embed code
  const videoRef = useRef(null);

  const currentVideo = videos[currentVideoIndex];

  const addComment = () => {
    if (!commentInput.trim()) return;
    setComments([...comments, { text: commentInput, user: "You" }]);
    setCommentInput("");
  };

  // 🔹 Generate embed code for current video
  const generateEmbedCode = () => {
    const code = `<iframe width="560" height="315" src="${currentVideo.url}" title="${currentVideo.title}" frameborder="0" allowfullscreen></iframe>`;
    setEmbedCode(code);
  };

  return (
    <div className="watch-container">
      <div className="watch-layout">
        {/* LEFT SIDE */}
        <div className="watch-main">
          <video
            ref={videoRef}
            key={currentVideo.id}
            className="watch-video"
            controls
          >
            <source src={currentVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2 className="video-title">{currentVideo.title}</h2>

          <div className="video-meta">
            <span>
              {currentVideo.views} • {currentVideo.date}
            </span>
          </div>

          <div className="video-actions">
            <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
            <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
            {/* 🔹 Share button */}
            <button onClick={generateEmbedCode}>🔗 Share</button>
          </div>

          {/* 🔹 Show generated embed code */}
          {embedCode && (
            <div className="embed-box">
              <h4>Embed this video:</h4>
              <textarea
                readOnly
                value={embedCode}
                onClick={(e) => e.target.select()} // Select code on click
              />
            </div>
          )}

          <div className="channel-box">
            <div>
              <h4>{currentVideo.channel}</h4>
              <p>{currentVideo.description}</p>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="comments-section">
            <h3>{comments.length} Comments</h3>
            <div className="comment-input">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <button onClick={addComment}>Post</button>
            </div>
            {comments.map((c, index) => (
              <div key={index} className="comment">
                <strong>{c.user}</strong>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Recommended Videos) */}
        <div className="watch-sidebar">
          <h3>Recommended</h3>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`sidebar-video ${
                currentVideoIndex === index ? "active" : ""
              }`}
              onClick={() => {
                setCurrentVideoIndex(index);
                setEmbedCode(""); // Clear previous embed when switching video
              }}
            >
              <img src={video.thumbnail} alt="thumb" />
              <div>
                <h4>{video.title}</h4>
                <p>{video.channel}</p>
                <span>{video.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}