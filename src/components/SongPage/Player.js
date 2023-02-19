import Styles from "../../styles/songPage/player.module.css"

function Player(props) {

  // add current songList to queue
  const addToQueue = () => {
    console.log("play button clicked");
    props.setQueue(props.testSongs);
    props.setIsPlaying(true);
  }
  
  return (
    <div className={Styles.player}>
      <button className={Styles.playButton} onClick={addToQueue}>Play</button>
    </div>
  );
}

export default Player;
