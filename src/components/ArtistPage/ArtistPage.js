import Styles from "../../styles/artistPage/artistPage.module.css";
import Header from "./Header.js";
import Player from "./Player";
import SongList from "./SongList";

function ArtistPage(props) {
  return (
    <div className={Styles.artistPage}>
      <Header artistName={props.artistName} />
      <Player />
      <SongList id={props.id} />
    </div>
  );
}

export default ArtistPage;
