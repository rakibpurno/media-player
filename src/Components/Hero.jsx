import { useState } from "react";
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";
import "./Hero.css";

export default function Hero() {

const videos = [
{
id:1,
title:"Big Buck Bunny (4K)",
url:"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
thumbnail:"https://picsum.photos/300/170?1"
},
{
id:2,
title:"Big Buck Bunny HD",
url:"https://www.w3schools.com/html/mov_bbb.mp4",
thumbnail:"https://picsum.photos/300/170?2"
},
{
id:3,
title:"Sintel Trailer",
url:"https://media.w3.org/2010/05/sintel/trailer.mp4",
thumbnail:"https://picsum.photos/300/170?3"
},
{
id:4,
title:"Sintel 4K",
url:"https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_1MB.mp4",
thumbnail:"https://picsum.photos/300/170?4"
}
];

const [currentIndex,setCurrentIndex] = useState(0);
const currentVideo = videos[currentIndex];

const nextVideo = ()=>{
setCurrentIndex(prev => prev + 1 < videos.length ? prev + 1 : 0);
};

const prevVideo = ()=>{
setCurrentIndex(prev => prev - 1 >= 0 ? prev - 1 : videos.length - 1);
};

const videoSource = {
type:"video",
sources:[
{
src:currentVideo.url,
type:"video/mp4"
}
]
};

return(

<section className="hero">
<div className="video-layout">

{/* PLAYER */}

<div className="player-container">

<Plyr
source={videoSource}
options={{
controls:[
"play-large",
"play",
"progress",
"current-time",
"mute",
"volume",
"settings",
"fullscreen"
],
settings:["speed"]
}}
/>

<h2 className="video-title">{currentVideo.title}</h2>

</div>


{/* VIDEO LIST */}

<div className="hero-video-list">

<h3>Recommended</h3>

{videos.map((video,index)=>(

<div
key={video.id}
className={`hero-video-card ${index===currentIndex ? "active" : ""}`}
onClick={()=>setCurrentIndex(index)}
>

<img src={video.thumbnail} alt="thumb"/>

<p>{video.title}</p>

</div>

))}

</div>

</div>

</section>

);

}