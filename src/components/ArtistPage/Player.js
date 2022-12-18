import Styles from "../../styles/artistPage/player.module.css"

function Player() {
  return (
    <div className={Styles.player}>
      <button className={Styles.playButton}>Play</button>
    </div>
  );
}

export default Player;
