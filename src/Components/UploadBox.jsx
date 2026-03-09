import React,{useState} from "react";

export default function UploadBox({addVideo}){

const [drag,setDrag]=useState(false);

function handleDrop(e){

e.preventDefault();
setDrag(false);

const file = e.dataTransfer.files[0];

if(file){
addVideo(file);
}

}

return(

<div
className={`upload-box ${drag?"drag":""}`}
onDragOver={(e)=>{e.preventDefault();setDrag(true)}}
onDragLeave={()=>setDrag(false)}
onDrop={handleDrop}
>

<p>📤 Drag & Drop Video Here</p>

<input
type="file"
onChange={(e)=>addVideo(e.target.files[0])}
/>

</div>

)

}