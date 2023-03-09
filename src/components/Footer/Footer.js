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
  return (
    <div className={Styles.footer}>
      <SongInformation queue={props.queue} setQueue={props.setQueue} isPlaying={props.isPlaying} />
      <PlayerControls />
      <SongProgressBar />
    </div>
  );
}

export default Footer;