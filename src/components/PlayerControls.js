import React from "react";
// import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControls = () => {
  const playHandler = () => {
    isSongPlaying === true ? audioRef.current.pause() : audioRef.current.play();
    setIsSongPlaying(!isSongPlaying);
  };

  const dragHandler = () => {};
  return (
    <div className="controls__div">
      <div className="song__control">
        <p>{getTime(songTimeInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songTimeInfo.duration || 0}
          value={songTimeInfo.currentTime}
          onChange={dragHandler}
          onTimeUpdate={nextSongHandler}
        />
        <p>{getTime(songTimeInfo.duration)}</p>
      </div>
      <div className="player__control">
        <FontAwesomeIcon
          className="previous"
          onClick={() => changeSongHandler("previous")}
          icon={faBackward}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          icon={isSongPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="next"
          onClick={() => changeSongHandler("next")}
          icon={faForward}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
