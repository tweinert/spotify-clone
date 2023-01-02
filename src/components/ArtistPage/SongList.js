import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs } from "firebase/firestore/lite";
import { db } from ".././Firebase";
import Styles from "../../styles/artistPage/songList.module.css"

function SongList(props) {
  // use props.id to access Songs collection
  // idDoc > songCol > songIdDoc > Album, Length, Title, Track Number FIELD
  // create tableRow for each song
  // LATER: order by track number and album
  
  const [songs, setSongs] = useState([]);
  const [songComponents, setSongComponents] = useState([]);

  // get song data
  useEffect(() => {
    fetchSongData();
  }, []);

  // update song list
  useEffect(() => {
    createSongComponents();
  }, [songs]);


  // get song info and store each song as object in state array
  // TODO order by track number AND album
  const fetchSongData = async() => {
    const subColRef = collection(db, "Artists", props.id, "Songs");
    const songSnap = await getDocs(subColRef);
    const songList = songSnap.docs.map(doc => doc.data());

    // sort song list
    let sortArray = songList.sort((a, b) => a.Album.localeCompare(b.Album) || a["Track Number"] - b["Track Number"]);

    setSongs([...sortArray]);
  }

  const createSongComponents = () => {
    let songComps = [];
    for (const element of songs) {
      let album = element.Album;
      let title = element.Title;
      let trackNumber = element["Track Number"];
      
      // change length value to minutes:seconds
      let length = element.Length;
      let minutes = 0;
      let seconds = length;
      if (length > 60) {
        minutes = (Math.floor(length / 60));
        seconds = (length - (minutes * 60));
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      length = minutes + ":" + seconds;

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
