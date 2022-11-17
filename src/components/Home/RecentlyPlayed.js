import Styles from "../../styles/home/recentlyPlayed.module.css"

function RecentlyPlayed() {
  return (
    <div>
      <h1 className={Styles.title}>Good (Morning/Afternoon/Evening)</h1>
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
    </div>
  );
}

export default RecentlyPlayed;
