import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);


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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState("");

  const currentVideo = videos[currentIndex];

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  const playPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  const nextVideo = () =>
    setCurrentIndex((prev) =>
      prev + 1 < videos.length ? prev + 1 : 0
    );

  const prevVideo = () =>
    setCurrentIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : videos.length - 1
    );

  const changeVolume = (e) => {
    if (videoRef.current) {
      videoRef.current.volume = e.target.value;
    }
  };

  const fullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentIndex]);

  return (
    <section className="hero dark">
      <div className="particles"></div>

      <div className="video-layout">
        {/* LEFT SIDE PLAYER */}
        <div className="video-player">
          <video ref={videoRef}>
            <source src={currentVideo.url} type="video/mp4" />
          </video>

          <div className="controls">
            <button onClick={prevVideo}>⏮</button>
            <button onClick={playPause} className="play-btn">▶</button>
            <button onClick={nextVideo}>⏭</button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              onChange={changeVolume}
            />
            <button onClick={fullScreen}>⛶</button>
          </div>
        </div>

        {/* RIGHT SIDE LIST */}
        <div className="video-list">
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />

          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className={`video-item ${
                currentVideo.id === video.id ? "active" : ""
              }`}
             onClick={() => setCurrentIndex
              (videos.findIndex(v => v.id === video.id))}
            >
              {video.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}