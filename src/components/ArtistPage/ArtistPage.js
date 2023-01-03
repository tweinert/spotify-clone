import Styles from "../../styles/artistPage/artistPage.module.css";
import Player from "./Player";
import SongList from "./SongList";
import ArtistHeader from "./ArtistHeader";

function ArtistPage(props) {
  return (
    <div className={Styles.artistPage}>
      <ArtistHeader artistName={props.artistName} />
      <Player />
      <SongList id={props.id} />
    </div>
  );
}

export default ArtistPage;
