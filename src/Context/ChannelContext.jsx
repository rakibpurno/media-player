import React, { createContext, useState } from "react";

export const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {

const [subscribers, setSubscribers] = useState(12000);

const [videos, setVideos] = useState([

{
id:1,
title:"Big Buck Bunny (4K)",
url:"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
thumbnail:"https://picsum.photos/300/170?4",
views:290000,
date:"5 days ago",
channel:"Sporty Clips",
description:"Short 4K clip of Big Buck Bunny.",
likes:25865,
dislikes:354,
comments:[{user:"Alex",text:"Nice video!"},
{user:"Max",text:"Amazing!"}
]
},

{
id:2,
title:"Big Buck Bunny (HD)",
url:"https://www.w3schools.com/html/mov_bbb.mp4",
thumbnail:"https://picsum.photos/300/170?1",
views:92000,
date:"10 days ago",
channel:"ABC Fun",
description:"Classic animated short in HD.",
likes:4563,
dislikes:56,
comments:[
{user:"Hales",text:"Nice video!"},
{user:"John",text:"Amazing!"}
]
},

{
id:3,
title:"Sintel Trailer (HD)",
url:"https://media.w3.org/2010/05/sintel/trailer.mp4",
thumbnail:"https://picsum.photos/300/170?2",
views:44000,
date:"1 day ago",
channel:"ABC Fun",
description:"Blender open movie trailer in HD.",
likes:1263,
dislikes:33,
comments:[{user:"Robert",text:"Nice video!"},
{user:"Leo",text:"Amazing!"}
]
},

{
id:4,
title:"Sintel (Trailer 4K)",
url:"https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_1MB.mp4",
thumbnail:"https://picsum.photos/300/170?5",
views:620000,
date:"4 days ago",
channel:"Wild World",
description:"Blender open movie short clip in 4K.",
likes:26584,
dislikes:458,
comments:[{user:"Jack",text:"Nice video!"},
{user:"Elon",text:"Amazing!"}
]
}

]);

const likeVideo = (index)=>{
const updated=[...videos]
updated[index].likes +=1
setVideos(updated)
}

const dislikeVideo = (index)=>{
const updated=[...videos]
updated[index].dislikes +=1
setVideos(updated)
}

const addComment = (index,text)=>{

if(!text) return

const updated=[...videos]

updated[index].comments.push({
user:"User",
text:text
})

setVideos(updated)

}

const subscribeChannel = ()=>{
setSubscribers(subscribers+1)
}

return(

<ChannelContext.Provider
value={{
videos,
setVideos,
subscribers,
likeVideo,
dislikeVideo,
addComment,
subscribeChannel
}}
>

{children}

</ChannelContext.Provider>

)

}