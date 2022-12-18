import Styles from "../../styles/artistPage/artistPage.module.css";
import Header from "./Header.js";
import Player from "./Player";

function ArtistPage() {
  return (
    <div className={Styles.artistPage}>
      <Header />
      <Player />
      {/* <SongList /> */}
    </div>
  );
}

export default ArtistPage;
