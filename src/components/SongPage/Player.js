import Styles from "../../styles/songPage/player.module.css"

function Player(props) {

  // add current songList to queue
  const addToQueue = () => {
    props.setIsPlaying(true);
    props.setQueue(props.songs);
  }
  
  return (
    <div className={Styles.player}>
      <button className={Styles.playButton} onClick={addToQueue}>Play</button>
    </div>
  );
}

export default Player;
