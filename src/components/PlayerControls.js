import React from "react";
// import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControls = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  isSongPlaying,
  setIsSongPlaying,
  audioRef,
  songTimeInfo,
  setSongTimeInfo,
}) => {
  // functions

  // plays/pauses audio element in app component
  const playHandler = () => {
    isSongPlaying === true ? audioRef.current.pause() : audioRef.current.play();
    setIsSongPlaying(!isSongPlaying);
  };

  // formats currentTime and duration properties of audioRef
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // const changeSongHandler = () => {};
  // const dragHandler = () => {};
  return (
    <div className="controls__div">
      <div className="song__control">
        <p>{getTime(songTimeInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songTimeInfo.duration || 0}
          value={songTimeInfo.currentTime}
          // onChange={dragHandler}
          // onTimeUpdate={changeSongHandler}
        />
        <p>{getTime(songTimeInfo.duration)}</p>
      </div>
      <div className="player__control">
        <FontAwesomeIcon
          className="previous"
          // onClick={changeSongHandler}
          icon={faBackward}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          icon={isSongPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="next"
          // onClick={changeSongHandler}
          icon={faForward}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
