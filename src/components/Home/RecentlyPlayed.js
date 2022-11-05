import Styles from "../../styles/home/recentlyPlayed.module.css"

function RecentlyPlayed() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.recentContainer}>
        <img className={Styles.recentImage}></img>
        <span className={Styles.recentText}>Example Playlist Name</span>
      </div>
      <div className={Styles.recentContainer}>
        <img className={Styles.recentImage}></img>
        <span className={Styles.recentText}>Example Playlist Name</span>
      </div>
      <div className={Styles.recentContainer}>
        <img className={Styles.recentImage}></img>
        <span className={Styles.recentText}>Example Playlist Name</span>
      </div>
      <div className={Styles.recentContainer}>
        <img className={Styles.recentImage}></img>
        <span className={Styles.recentText}>Example Playlist Name</span>
      </div>
      <div className={Styles.recentContainer}>
        <img className={Styles.recentImage}></img>
        <span className={Styles.recentText}>Example Playlist Name</span>
      </div>
      <div className={Styles.recentContainer}>
        <img className={Styles.recentImage}></img>
        <span className={Styles.recentText}>Example Playlist Name</span>
      </div>
    </div>
  );
}

export default RecentlyPlayed;
