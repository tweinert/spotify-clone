import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/songInformation.module.css";

function SongInformation(props) {

  const [songFullTime, setSongFullTime] = useState("00:00");
  const [songCurrentTime, setSongCurrentTime] = useState("00:00");

  // on song queue change
  useEffect(() => {
    // set new time
    let songTime = props.isPlaying ? props.queue[0].Length : "0";
    setSongFullTime(songTime);

    let interval = startTimer(songTime);

    return () => clearInterval(interval);
  }, [props.queue]);

  const getTimeRemaining = (e) => {
    const total = e;
    const minutes = Math.floor(total / 60);
    const seconds = total - minutes * 60;
    return {
      total, minutes, seconds
    };
  }

  const startTimer = (time) => {
    setSongCurrentTime(0);

    const timerInterval = setInterval(() => {
      incrementSongTime();
    }, 1000);

    return timerInterval;
  }

  const incrementSongTime = () => {
    setSongCurrentTime((songCurrentTime) => songCurrentTime + 1);
  }

  // converts seconds to minutes and seconds string
  const convertToTime = (time) => {
    let { total, minutes, seconds } = getTimeRemaining(time);

    let outputTime = 0;
    if (total >= 0) {
      outputTime = (minutes > 9 ? minutes : "0" + minutes) + ":"
      + (seconds > 9 ? seconds : "0" + seconds);
    }

    return outputTime;
  }

  return (
    <div className={Styles.songInformation}>
      <div>Currently Playing: {props.isPlaying ? props.queue[0].Title : "nothing"}</div>
      <div>{convertToTime(songCurrentTime)}/{convertToTime(songFullTime)}</div>
    </div>
  );
}

export default SongInformation;