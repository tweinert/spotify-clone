import { useState } from "react";
import Styles from "../../styles/songPage/songPage.module.css";
import Player from "./Player";
import SongList from "./SongList";
import SongPageHeader from "./SongPageHeader";

function SongPage(props) {  
  const [testSongs, setTestSongs] = useState([]);
  
  return (
    <div className={Styles.songPage}>
      <SongPageHeader title={props.title} />
      <Player setQueue={props.setQueue} testSongs={testSongs} />
      <SongList id={props.id} type={props.type} playlists={props.playlists} setTestSongs={setTestSongs} />
    </div>
  );
}

export default SongPage;
