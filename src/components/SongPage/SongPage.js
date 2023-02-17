import Styles from "../../styles/songPage/songPage.module.css";
import Player from "./Player";
import SongList from "./SongList";
import SongPageHeader from "./SongPageHeader";

function SongPage(props) {  
  return (
    <div className={Styles.songPage}>
      <SongPageHeader title={props.title} />
      <Player setQueue={props.setQueue} />
      <SongList id={props.id} type={props.type} playlists={props.playlists} />
    </div>
  );
}

export default SongPage;
