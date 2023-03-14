import { useEffect } from "react";
import Styles from "../../styles/footer/songProgressBar.module.css";

// TODO interpolate bar progress
function SongProgressBar(props) {
  useEffect(() => {
    updateProgressBar();
  }, [props.songCurrentTime]);

  const updateProgressBar = () => {
    document.getElementById("bar-progress").style.width = ((props.songCurrentTime / props.songFullTime) * 100) + "%";
  }
  
  return(
    <div className={Styles.songProgressBar}>
      <div className={Styles.barBackground}>
        <div className={Styles.barProgress} id="bar-progress"></div>
      </div>
    </div>
  );
}

export default SongProgressBar;
