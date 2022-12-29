import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs } from "firebase/firestore/lite";
import db from ".././Firebase";
import Styles from "../../styles/artistPage/songList.module.css"

function SongList(props) {
  // use props.id to access Songs collection
  // idDoc > songCol > songIdDoc > Album, Length, Title, Track Number FIELD
  // create tableRow for each song
  // LATER: order by album
  
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongData();
  }, []);

  // update song list
  useEffect(() => {
    console.log(songs);
    
  }, [songs]);

  // get song info and store each song as object in state array
  const fetchSongData = async() => {
    const idDoc = doc(db, "Artists", props.id);
    const subColRef = collection(db, "Artists", props.id, "Songs");
    const songSnap = await getDocs(subColRef);
    const songList = songSnap.docs.map(doc => doc.data());

    setSongs([...songList]);
  }
  
  return (
    <div className={Styles.songList}>
      <div className={Styles.tableHeader}>
        <div>#</div>
        <div>Title</div>
        <div>Album</div>
        <div>Length</div>
      </div>
      <hr />
      <div className={Styles.tableSongs}>
        <div className={Styles.tableRow}>
          <div>1</div>
          <div>Speak to Me</div>
          <div>The Dark Side of the Moon</div>
          <div>1:05</div>
        </div>
        <div className={Styles.tableRow}>
          <div>2</div>
          <div>Breathe (In the Air)</div>
          <div>The Dark Side of the Moon</div>
          <div>2:49</div>
        </div>
      </div>
    </div>
  );
}

export default SongList;
