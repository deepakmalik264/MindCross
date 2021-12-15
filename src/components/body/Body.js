import React from 'react'
import "./body.css"
export default function body() {
    return (
        <div>

            <div className="main-body">
               <div> 
                 <img 
                 src ="/Images/board_image.JPG"
                 alt = "board_image" 
                 />
               </div>

               <div className="main-side">
                   
                <div class="index-intro">
                   <h1 className = "index-title">
                       <span>Play Mind Cross</span>
                       <span> for free</span>
                       <span> on the </span>
                   </h1>



                </div>
                <div className="parent-play-btn">
                    <button className="play-btn">Let's Play'</button>
                </div>
               

               </div>



            </div>
            
        </div>
    )
}
