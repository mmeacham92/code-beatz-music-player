// import core components
import React, { useState } from "react";
// import sass file
import "./styles/app.scss";
// import our own components
import data from "./data";
import Navbar from "./components/Navbar";
import Song from "./components/Song";
import PlayerControls from "./components/PlayerControls";
import SongLibrary from "./components/SongLibrary";
import Background from "./components/Background";

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div>
      <Navbar />
      <Song currentSong={currentSong} />
      <PlayerControls />
      <SongLibrary />
      <Background />
      <audio className="current__song" src={currentSong.audio} />
    </div>
  );
};

export default App;
