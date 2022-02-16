import React from 'react'
import "./body.css"
import {AiFillPlayCircle} from 'react-icons/ai'
export default function body() {
    return (
        <div>

            <div className="main-body">
               <div className="board-img"> 
                 <img 
                 src ="/Images/boardimage.JPG"
                 alt = "board_image" 
                 width={500}
                height={500}
                 />
               </div>

               <div className="main-side">
                   
                <div class="index-intro">
                   <h1 className = "index-title">
                       <span>Play Mind-Cross</span>
                       <span> for free</span>
                       
                   </h1>



                </div>
                <div className="parent-play-btn">
                
                <a href="/game">   <button className="play-btn">▶️ Let's Play'</button> </a>
                </div>
               

               </div>



            </div>
            
        </div>
    )
}
