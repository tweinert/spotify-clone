import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/footer.module.css";
import SongInformation from "./SongInformation";

/* TODO
  player controls
    pause
    forwards
    NOT backwards
  
  time display bar
*/
function Footer(props) {
  return (
    <div className={Styles.footer}>
      <SongInformation queue={props.queue} setQueue={props.setQueue} isPlaying={props.isPlaying} />
    </div>
  );
}

export default Footer;