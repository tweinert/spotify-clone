import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { db } from ".././Firebase";
import Styles from "../../styles/artistPage/songList.module.css"
// TODO change songList css location

function SongList(props) {
  // use props.id to access Songs collection
  // idDoc > songCol > songIdDoc > Album, Length, Title, Track Number FIELD
  
  const [songs, setSongs] = useState([]);
  const [songComponents, setSongComponents] = useState([]);

  // get song data
  useEffect(() => {
    if (props.type === "artist") {
      fetchSongDataArtist();  
    }
    else if (props.type === "playlist") {
      fetchSongDataPlaylist();
    }
  }, []);

  // update song list
  useEffect(() => {
    createSongComponents();
  }, [songs]);


  // get song info and store each song as object in state array
  const fetchSongDataArtist = async() => {
    const subColRef = collection(db, "Artists", props.id, "Songs");
    const songSnap = await getDocs(subColRef);
    const songList = songSnap.docs.map(doc => doc.data());

    // sort song list
    let sortArray = songList.sort((a, b) => a.Album.localeCompare(b.Album) || a["Track Number"] - b["Track Number"]);

    setSongs([...sortArray]);
  }

  const fetchSongDataPlaylist = async() => {
    // get songs from user > (userId) > playlists > (playlistId) > Songs > (songId) > id
    // ArtistPage SongList id={playlistId}
    const subColRef = collection(db, "Users", getAuth().currentUser.uid, "Playlists", props.id, "Songs");
    const songSnap = await getDocs(subColRef);
    const songList = songSnap.docs.map(doc => doc.data());

    let songIdList = [];
    for (const element of songList) {
      songIdList.push(element.Id);
    }

    // TODO use songIdList for Artist > id > Songs > id
    // need to search for song id through every artist
    
    // let sortArray = songList.sort((a, b) => a["Track Number"] - b["Track Number"]);
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
