import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {

const [active,setActive] = useState("home");
const [menuOpen,setMenuOpen] = useState(false);

useEffect(()=>{

const sections=["home","features","pricing","about"];

const handleScroll=()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>20){
navbar.classList.add("shrink");
}else{
navbar.classList.remove("shrink");
}

let current="home";

sections.forEach((id)=>{

const section=document.getElementById(id);

if(section){

const sectionTop=section.offsetTop-150;
const sectionHeight=section.offsetHeight;

if(
window.scrollY>=sectionTop &&
window.scrollY<sectionTop+sectionHeight
){
current=id;
}

}

});

setActive(current);

};

window.addEventListener("scroll",handleScroll);

return ()=>window.removeEventListener("scroll",handleScroll);

},[]);


const scrollToSection=(id)=>{

const section=document.getElementById(id);

if(section){

section.scrollIntoView({
behavior:"smooth"
});

setMenuOpen(false);

}

};


return(

<nav className="navbar">

<div className="navbar-container">

<div className="logo">
<h2>MediaPlayer</h2>
</div>

{/* hamburger */}

<div
className={`menu-toggle ${menuOpen ? "open":""}`}
onClick={()=>setMenuOpen(!menuOpen)}
>

<span></span>
<span></span>
<span></span>

</div>

<ul className={`nav-links ${menuOpen ? "show":""}`}>

{["home","features","pricing","about"].map((sec)=>(

<li key={sec}>

<button
className={active===sec ? "active":""}
onClick={()=>scrollToSection(sec)}
>

{sec.charAt(0).toUpperCase()+sec.slice(1)}

</button>

</li>

))}

</ul>

</div>

</nav>

);

}