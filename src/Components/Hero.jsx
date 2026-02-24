import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);

  const videos = [
    { id: 1, title: "Sample Video 1", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Sample Video 2", url: "https://www.w3schools.com/html/movie.mp4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState("");

  const currentVideo = videos[currentIndex];
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  const playPause = () => {
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1 < videos.length ? prev + 1 : 0));
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : videos.length - 1));
  const changeVolume = (e) => (videoRef.current.volume = e.target.value);
  const fullScreen = () => videoRef.current.requestFullscreen();

  useEffect(() => {
    videoRef.current.load();
  }, [currentIndex]);

  return (
    <section className="hero dark"> {/* Always dark mode */}
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
            <input type="range" min="0" max="1" step="0.1" onChange={changeVolume} />
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

          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className={`video-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              onMouseEnter={() => setCurrentIndex(index)}
            >
              {video.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}