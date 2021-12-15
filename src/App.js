import React from 'react'
import Sidebar from "./components/sidebar/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import "./App.css";
import BoardBg from "./components/board/BoardBg";
import BoardPieces from "./components/board/BoardPieces";
import MoveHistory from "./components/board/MoveHistory";
import { PlayerMoveContextProvider } from "./store/player-move-context";
export default function App() {
  return (
    <div>
      <div className="main-box">
       
       <div className="sidebar">
        <Sidebar/>
       </div>
       
       <div className="body">
        <Body/>
       </div>

      </div>
   
     
      <Footer />
      
      <PlayerMoveContextProvider id="game">
      <main className="bg">
        <h1>Board Game</h1>
        <div className="flex_row">
          <div className="board">
            <BoardPieces />
            <BoardBg />
          </div>
          <MoveHistory />
        </div>
      </main>
    </PlayerMoveContextProvider>
        
    </div>
  )
}
