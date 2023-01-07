import Styles from "../../styles/artistPage/artistPage.module.css";
import Player from "./Player";
import SongList from "../Global/SongList";
import ArtistHeader from "./ArtistHeader";

function ArtistPage(props) {
  return (
    <div className={Styles.artistPage}>
      <ArtistHeader artistName={props.artistName} />
      <Player />
      <SongList id="YvrYPnCbCe6Wq4X9juV3" type="playlist" />
    </div>
  );
}

export default ArtistPage;
