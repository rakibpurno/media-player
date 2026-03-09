import { useState, useMemo, useContext } from "react";
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";
import "./Watch.css";
import { ChannelContext } from "../Context/ChannelContext";


// NUMBER FORMAT FUNCTION
function formatNumber(num){

if(num >= 1000000){
return (num/1000000).toFixed(1) + "M";
}

if(num >= 1000){
return (num/1000).toFixed(1) + "K";
}

return num;

}

export default function Watch(){

const{
videos,
likeVideo,
dislikeVideo,
addComment,
subscribers,
subscribeChannel
} = useContext(ChannelContext);

const[currentVideoIndex,setCurrentVideoIndex] = useState(0);
const[commentInput,setCommentInput] = useState("");
const[replyInputs,setReplyInputs] = useState({});
const[showReply,setShowReply] = useState({});
const[embedCode,setEmbedCode] = useState("");

const currentVideo = videos[currentVideoIndex];

const videoSource = useMemo(()=>({
type:"video",
sources:[{
src:currentVideo.url,
type:"video/mp4"
}]
}),[currentVideo]);

const generateEmbedCode = ()=>{
const code = `<iframe width="560" height="315" src="${currentVideo.url}" title="${currentVideo.title}" frameborder="0" allowfullscreen></iframe>`
setEmbedCode(code)
}

const addReply=(commentIndex)=>{
const text = replyInputs[commentIndex];
if(!text) return;

videos[currentVideoIndex].comments[commentIndex].replies =
videos[currentVideoIndex].comments[commentIndex].replies || [];

videos[currentVideoIndex].comments[commentIndex].replies.push({
user:"You",
text
});

setReplyInputs({...replyInputs,[commentIndex]:""});
}

return(

<div className="watch-container">

<div className="watch-layout">


{/* LEFT SIDE */}

<div className="watch-main">

<div className="watch-video">

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

</div>


<h2 className="video-title">{currentVideo.title}</h2>


<div className="video-stats">

<div className="views-badge">
👁 {formatNumber(currentVideo.views)} Views
</div>

<div className="upload-date">
📅 {currentVideo.date}
</div>

</div>


<div className="video-actions">

<button onClick={()=>likeVideo(currentVideoIndex)}>
👍 {formatNumber(currentVideo.likes)}
</button>

<button onClick={()=>dislikeVideo(currentVideoIndex)}>
👎 {formatNumber(currentVideo.dislikes)}
</button>

<button onClick={generateEmbedCode}>
🔗 Share
</button>

</div>


{embedCode &&(

<div className="embed-box">

<h4>Embed this video</h4>

<textarea
readOnly
value={embedCode}
onClick={(e)=>e.target.select()}
/>

</div>

)}


{/* CHANNEL */}

<div className="channel-box">

<div>
<h4>ABC Fun</h4>
<p>{currentVideo.description}</p>
</div>

<button
className="subscribe-btn"
onClick={subscribeChannel}
>
Subscribe {formatNumber(subscribers)}
</button>

</div>


{/* COMMENTS */}

<div className="comments-section">

<h3>{formatNumber(currentVideo.comments.length)} Comments</h3>


<div className="comment-input">

<input
type="text"
placeholder="Add a comment..."
value={commentInput}
onChange={(e)=>setCommentInput(e.target.value)}
/>

<button onClick={()=>{
addComment(currentVideoIndex,commentInput)
setCommentInput("")
}}>
Post
</button>

</div>


{currentVideo.comments.map((c,index)=>(

<div key={index} className="comment-card">

<strong>{c.user}</strong>

<p>{c.text}</p>


<div className="comment-actions">

<button onClick={()=>setShowReply({
...showReply,
[index]:!showReply[index]
})}>
Reply
</button>

</div>


{/* REPLY INPUT */}

{showReply[index] &&(

<div className="reply-box">

<input
type="text"
placeholder="Write reply..."
value={replyInputs[index] || ""}
onChange={(e)=>setReplyInputs({
...replyInputs,
[index]:e.target.value
})}
/>

<button onClick={()=>addReply(index)}>
Send
</button>

</div>

)}


{/* REPLIES */}

{c.replies && c.replies.map((r,i)=>(

<div key={i} className="reply">

<strong>{r.user}</strong>
<p>{r.text}</p>

</div>

))}

</div>

))}

</div>

</div>


{/* RIGHT SIDEBAR */}

<div className="watch-sidebar">

<h3>Recommended</h3>

{videos.map((video,index)=>(

<div
key={video.id}
className={`sidebar-video ${
currentVideoIndex===index?"active":""
}`}
onClick={()=>{

setCurrentVideoIndex(index)
setEmbedCode("")
window.scrollTo(0,0)

}}
>

<img src={video.thumbnail} alt="thumb"/>

<div>

<h4>{video.title}</h4>
<p>ABC Fun</p>
<span>{formatNumber(video.views)} views</span>

</div>

</div>

))}

</div>

</div>

</div>

)

}