import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs, getDoc, addDoc, deleteDoc, query, where } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { db } from ".././Firebase";
import Styles from "../../styles/songPage/songList.module.css"

function SongList(props) {
  // use props.id to access Songs collection
  // idDoc > songCol > songIdDoc > Album, Length, Title, Track Number FIELD
  
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
  }, [props.songs, props.playlists]);


  // get song info and store each song as object in state array
  const fetchSongDataArtist = async() => {
    const subColRef = collection(db, "Artists", props.id, "Songs");
    const songSnap = await getDocs(subColRef);
    // const songList = songSnap.docs.map(doc => doc.data());
    const songList = songSnap.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    // sort song list
    let sortArray = songList.sort((a, b) => a.Album.localeCompare(b.Album) || a["Track Number"] - b["Track Number"]);

    props.setSongs([...sortArray]);
    // testing
  }

  const fetchSongDataPlaylist = async() => {
    // get songs from user > (userId) > playlists > (playlistId) > Songs > (songId) > id
    // ArtistPage SongList id={playlistId}
    const subColRef = collection(db, "Users", getAuth().currentUser.uid, "Playlists", props.id, "Songs");
    const songSnap = await getDocs(subColRef);
    const songIdList = songSnap.docs.map(doc => doc.data().Id);

    // get artist id list
    const artistColRef = collection(db, "Artists");
    const artistSnap = await getDocs(artistColRef);
    const artistIdList = artistSnap.docs.map(doc => doc.id);
    const artistList = artistSnap.docs.map(doc => doc.data());

    // second getDoc is required as getDocs is shallow
    let songObjList = [];
    for (const songId of songIdList) {
      for (const artistId of artistIdList) {
        const songRef = doc(db, "Artists", artistId, "Songs", songId);
        const songSnap = await getDoc(songRef);
        if (songSnap.exists()) {
          let songObj = songSnap.data();
          songObj.id = songId;
          songObjList.push(songObj);
        }
      }
    }

    props.setSongs([...songObjList]); 
    // testing
    console.log(songObjList);
    // props.setTestSongs([...songObjList]);
  }

  const createSongComponents = () => {
    let songComps = [];
    let i = 1;
    for (const element of props.songs) {
      let id = element.id;
      let album = element.Album;
      let title = element.Title;
      let trackNumber = 0;
      if (props.type === "playlist") {
        trackNumber = i;
      } else {
        trackNumber = element["Track Number"];
      }
      
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


      let addBtnComps = [];
      let removeBtnComps = [];
      if (props.type !== "playlist") {
        for (const element of props.playlists) {
          let name = element.name;
  
          const addBtn = <button key={name} onClick={() => addToPlaylist(id, element.id)}>Add to {name}</button>;
  
          addBtnComps.push(addBtn);
        }
      } else if (props.type === "playlist") {
        const removeBtn = <button key={i + "remove"} onClick={() => removeFromPlaylist(id, props.id)}>Remove from Playlist</button>

        removeBtnComps.push(removeBtn);
      }
      
      let comp = <div></div>;
      if (props.type === "playlist") {
        comp = <div className={Styles.tableRow} key={title}>
          <div>{trackNumber}</div>
          <div>{title}</div>
          <div>{album}</div>
          <div>{length}</div>
          <div className={Styles.dropDown}>
            <button className={Styles.dropBtn} onClick={showDropDown}></button>
            <div id="addDropDown" className={Styles.dropDownContent}>
              {removeBtnComps}
            </div>
          </div>
        </div>;
      } else {
        comp = <div className={Styles.tableRow} key={title}>
          <div>{trackNumber}</div>
          <div>{title}</div>
          <div>{album}</div>
          <div>{length}</div>
          <div className={Styles.dropDown}>
            <button className={Styles.dropBtn} onClick={showDropDown}></button>
            <div id="addDropDown" className={Styles.dropDownContent}>
              {addBtnComps}
            </div>
          </div>
        </div>;
      }

      songComps.push(comp);

      i++;
    }
    
    setSongComponents([...songComps]);
  }

  const addToPlaylist = async(songId, playlistId) => {
    // get song id
    // get playlist id
    console.log(songId, playlistId);
    
    // add song to playlist
    const docRef = await addDoc(collection(db, "Users", getAuth().currentUser.uid, "Playlists", playlistId, "Songs"), {
      Id: songId
    });

    console.log("docRef: " + docRef);
  }

  const removeFromPlaylist = async(songId, playlistId) => {
    // Finds playlist entry with songId as field and delete the document
    const playlistRef = collection(db, "Users", getAuth().currentUser.uid, "Playlists", playlistId, "Songs");
    const q = query(playlistRef, where("Id", "==", songId));
    const querySnap = await getDocs(q);
    await querySnap.forEach((docSnap) => {
      deleteDoc(doc(db, "Users", getAuth().currentUser.uid, "Playlists", playlistId, "Songs", docSnap.id));
    });

    setTimeout(fetchSongDataPlaylist, 1000);
  }

  const showDropDown = (e) => {
    e.target.nextElementSibling.classList.toggle(Styles.show);
  }
  
  return (
    <div className={Styles.songList}>
      <div className={Styles.tableHeader}>
        <div>#</div>
        <div>Title</div>
        <div>Album</div>
        <div>Length</div>
        <div></div>
      </div>
      <hr />
      <div className={Styles.tableSongs}>
        {songComponents}
      </div>
    </div>
  );
}

export default SongList;
