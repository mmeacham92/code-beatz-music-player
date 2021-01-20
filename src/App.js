// import core components
import React, { useState, useRef } from "react";
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
  // hooks to manage state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [songTimeInfo, setSongTimeInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // functions 
  
  // updates the time value of the current song
  const updateTimeInfo = (e) => {
    setSongTimeInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  // reference
  const audioRef = null;

  return (
    <div>
      <Navbar />
      <Song currentSong={currentSong} />
      <PlayerControls
        songTimeInfo={songTimeInfo}
        setSongTimeInfo={setSongTimeInfo}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <SongLibrary
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
      />
      <Background />
      <audio
        className="current__song"
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={updateTimeInfo}
        onLoadedMetadata={updateTimeInfo}
      />
    </div>
  );
};

export default App;
