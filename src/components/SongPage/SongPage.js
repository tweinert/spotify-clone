import { useState } from "react";
import Styles from "../../styles/songPage/songPage.module.css";
import Player from "./Player";
import SongList from "./SongList";
import SongPageHeader from "./SongPageHeader";

function SongPage(props) {  
  const [songs, setSongs] = useState([]);
  
  return (
    <div className={Styles.songPage}>
      <SongPageHeader title={props.title} />
      <Player setQueue={props.setQueue} setIsPlaying={props.setIsPlaying} songs={songs}  />
      <SongList id={props.id} type={props.type} playlists={props.playlists} songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default SongPage;
