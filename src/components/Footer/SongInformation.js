import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/songInformation.module.css";

function SongInformation(props) {
  const [currentlyPlayingComp, setCurrentlyPlayingComp] = useState(<div></div>);

  useEffect(() => {
    let comp;
    if (props.queue[0] !== undefined) {
      comp = <div>Currently Playing: {props.queue[0].Title}</div>;
    }
    setCurrentlyPlayingComp(comp);
  }, [props.queue]);
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
  
  const getTimeRemaining = (e) => {
    const total = e;
    const minutes = Math.floor(total / 60);
    const seconds = total - minutes * 60;
    return {
      total, minutes, seconds
    };
  }

  return (
    <div className={Styles.songInformation}>
      {currentlyPlayingComp}
      <div>{convertToTime(props.songCurrentTime)}/{convertToTime(props.songFullTime)}</div>
    </div>
  );
}

export default SongInformation;