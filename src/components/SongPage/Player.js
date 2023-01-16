import Styles from "../../styles/songPage/player.module.css"

function Player() {
  return (
    <div className={Styles.player}>
      <button className={Styles.playButton}>Play</button>
    </div>
  );
}

export default Player;
