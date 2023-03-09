import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/footer.module.css";
import SongInformation from "./SongInformation";
import PlayerControls from "./PlayerControls";
import SongProgressBar from "./SongProgressBar";

/* TODO
  player controls
    pause
    forwards
    NOT backwards
  
  time display bar
*/
function Footer(props) {
  const [songFullTime, setSongFullTime] = useState("00:00");
  const [songCurrentTime, setSongCurrentTime] = useState("00:00");

  // on song queue change
  useEffect(() => {
    // set new time
    let songTime = props.isPlaying ? props.queue[0].Length : "0";
    setSongFullTime(songTime);

    let interval;
    if (props.isPlaying) {
      interval = startTimer(songTime);
    }

    return () => clearInterval(interval);
  }, [props.queue]);

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

  return (
    <div className={Styles.footer}>
      <SongInformation queue={props.queue} setQueue={props.setQueue} isPlaying={props.isPlaying} songFullTime={songFullTime} songCurrentTime={songCurrentTime} />
      <PlayerControls isPlaying={props.isPlaying} />
      <SongProgressBar songFullTime={songFullTime} songCurrentTime={songCurrentTime} />
    </div>
  );
}

export default Footer;