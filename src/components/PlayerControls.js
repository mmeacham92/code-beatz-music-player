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
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongTimeInfo({ ...songTimeInfo, currentTime: e.target.value });
  };
  const playHandler = () => {
    isSongPlaying === true ? audioRef.current.pause() : audioRef.current.play();
    setIsSongPlaying(!isSongPlaying);
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
 
  const changeSongHandler = (direction) => {
    const index = songs.indexOf(currentSong);
    if (direction === 'previous') {
      if (index === 0) setCurrentSong(songs[songs.length - 1]);
      else setCurrentSong(songs[index - 1]);
    } else {
      if (index === songs.length - 1) setCurrentSong(songs[0]);
      else setCurrentSong(songs[index + 1]);
    }
  };
 
  const nextSongHandler = () => {
    if (songTimeInfo.currentTime === songTimeInfo.duration) {
      console.log(songTimeInfo.current);
      changeSongHandler('next');
    }
  }
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