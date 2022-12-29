import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs } from "firebase/firestore/lite";
import db from ".././Firebase";
import Styles from "../../styles/artistPage/songList.module.css"

function SongList(props) {
  // use props.id to access Songs collection
  // idDoc > songCol > songIdDoc > Album, Length, Title, Track Number FIELD
  // create tableRow for each song
  // LATER: order by track number and album
  
  const [songs, setSongs] = useState([]);
  const [songComponents, setSongComponents] = useState([]);

  useEffect(() => {
    fetchSongData();
  }, []);

  // update song list
  useEffect(() => {
    console.log(songs);
    createSongComponents();
  }, [songs]);

  // get song info and store each song as object in state array
  const fetchSongData = async() => {
    const idDoc = doc(db, "Artists", props.id);
    const subColRef = collection(db, "Artists", props.id, "Songs");
    const songSnap = await getDocs(subColRef);
    const songList = songSnap.docs.map(doc => doc.data());

    setSongs([...songList]);
  }

  const createSongComponents = () => {
    let songComps = [];
    for (const element of songs) {
      let album = element.Album;
      let length = element.Length;
      let title = element.Title;
      let trackNumber = element["Track Number"];

      let comp = <div className={Styles.tableRow} key={title}><div>{trackNumber}</div><div>{title}</div><div>{album}</div><div>{length}</div></div>;

      songComps.push(comp);
    }

    setSongComponents([...songComps]);
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
        {songComponents}
      </div>
    </div>
  );
}

export default SongList;
