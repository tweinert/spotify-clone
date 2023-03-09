import { useEffect, useState } from "react";
import Styles from "../../styles/footer/playerControls.module.css";

function PlayerControls(props) {
  const [buttonComp, setButtonComp] = useState();

  // TODO change button display when no song is playing (use queue)
  // toggle button display
  useEffect(() => {
    let button;
    if (props.isPlaying) {
      button = <button className={Styles.pauseButton} onClick={pauseSong} >PAUSE</button>;
    } else {
      button = <button className={Styles.resumeButton} onClick={resumeSong} >RESUME</button>;
    }

    setButtonComp(button);
  }, [props.isPlaying]);
  
  const resumeSong = () => {
    console.log("resume");
  }

  const pauseSong = () => {
    console.log("pause");
  }

  return(
    <div className={Styles.playerControls}>
      {buttonComp}
    </div>
  );
}

export default PlayerControls;
