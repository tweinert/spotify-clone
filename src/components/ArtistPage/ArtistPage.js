import Styles from "../../styles/artistPage/artistPage.module.css";
import Player from "./Player";
import SongList from "../Global/SongList";
import ArtistHeader from "./ArtistHeader";

function ArtistPage(props) {
  // TODO id={props.id} type="artist"
  
  return (
    <div className={Styles.artistPage}>
      <ArtistHeader artistName={props.artistName} />
      <Player />
      <SongList id={props.id} type="artist" />
    </div>
  );
}

export default ArtistPage;
