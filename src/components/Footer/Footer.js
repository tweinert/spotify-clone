import { useState, useEffect, useRef } from 'react';
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

  const timerInterval = useRef();
  
  // on song queue change
  useEffect(() => {
    // set new time
    let songTime = props.isPlaying ? props.queue[0].Length : "0";
    setSongFullTime(songTime);

    setSongCurrentTime(0);
    
  }, [props.queue]);

  // toggle timer
  useEffect(() => {
    if(props.isPlaying) {
      timerInterval.current = startTimer();
    } else if(!props.isPlaying) {
      clearInterval(timerInterval.current);
    }
  }, [props.isPlaying]);

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      incrementSongTime();
    }, 1000);

    return timerInterval;
  }

  const incrementSongTime = () => {
    if (props.isPlaying) {
      setSongCurrentTime((songCurrentTime) => songCurrentTime + 1);
    }
  }

  return (
    <div className={Styles.footer}>
      <SongInformation queue={props.queue} setQueue={props.setQueue} isPlaying={props.isPlaying} songFullTime={songFullTime} songCurrentTime={songCurrentTime} />
      <PlayerControls isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} />
      <SongProgressBar songFullTime={songFullTime} songCurrentTime={songCurrentTime} />
    </div>
  );
}

export default Footer;