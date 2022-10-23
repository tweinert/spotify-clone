import Styles from "../../styles/nav/navPlaylists.module.css";

/*
Created playlists are dynamically added to playlistsContainer div 
*/
function NavPlaylists() {
  return (
    <div className={Styles.playlistNavContainer}>
      <div className={Styles.buttonContainer}>
        <button className={Styles.createButton}>
          <svg className={Styles.iconInactive} viewBox="0 0 24 24">
            <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z" />
          </svg>
          <span className={Styles.buttonText}>Create Playlist</span>
        </button>
      </div>
      <div className={Styles.buttonContainer}>
        <a className={Styles.likedButton} href="/collection/tracks">
          <svg className={Styles.iconInactive} viewBox="0 0 24 24">
            <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z" />
          </svg>
          <span className={Styles.buttonText}>Liked Songs</span>
        </a>
      </div>
      <hr />
      <div className={Styles.playlistsContainer}>

        <div className={Styles.playlistElement}>
          <a className={Styles.playlistLink} href="/">
            <span className={Styles.playlistText}>Example playlist</span>
          </a>
        </div>

        <div className={Styles.playlistElement}>
          <a className={Styles.playlistLink} href="/">
            <span className={Styles.playlistText}>Example playlist</span>
          </a>
        </div>
      </div>
    </div>
    // hr
    // playlist container
  );
}

export default NavPlaylists;