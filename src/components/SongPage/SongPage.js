import Styles from "../../styles/songPage/songPage.module.css";
import Player from "./Player";
import SongList from "./SongList";
import SongPageHeader from "./SongPageHeader";

function SongPage(props) {  
  return (
    <div className={Styles.songPage}>
      <SongPageHeader title={props.title} />
      <Player />
      <SongList id={props.id} type={props.type} />
    </div>
  );
}

export default SongPage;
