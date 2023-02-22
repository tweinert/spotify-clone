import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/footer.module.css";

function Footer(props) {
  const [songFullTime, setSongFullTime] = useState("00:00");
  const [songCurrentTime, setSongCurrentTime] = useState("00:00");
  
  // on song queue change
  useEffect(() => {
    // set new time
    let songTime = props.isPlaying ? props.queue[0].Length : "0";
    setSongFullTime(songTime);

    startTimer(songTime);
  }, [props.queue]);

  const getTimeRemaining = (e) => {
    const total = e;
    const minutes = Math.floor(total / 60);
    const seconds = total - minutes * 60;
    return {
      total, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setSongCurrentTime(
        (minutes > 9 ? minutes : "0" + minutes) + ":"
        + (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  }
  
  return (
    <div className={Styles.footer}>
      <div>Currently Playing: {props.isPlaying ? props.queue[0].Title : "nothing"}</div>
      <div>{songCurrentTime}</div>
    </div>
  );
}

export default Footer;