import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDocs, getDoc } from "firebase/firestore/lite";
import { db } from ".././Firebase";
import { NavLink, Route, Routes } from 'react-router-dom';
import Styles from "../../styles/nav/navPlaylists.module.css";

/*
Created playlists are dynamically added to playlistsContainer div 
*/
function NavPlaylists(props) {
  const [playlists, setPlaylists] = useState([]);
  const [playlistComponents, setPlaylistComponents] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchPlaylistData();
      } else {
        return;
      }
    });
  }, []);

  useEffect(() => {
    props.setPlaylists(playlists);
    createPlaylistLinks();
  }, [playlists]);

  const fetchPlaylistData = async() => {
    // get playlist Id's
    const colRef = collection(db, "Users", getAuth().currentUser.uid, "Playlists");
    const playlistSnap = await getDocs(colRef);
    const playlistIdList = playlistSnap.docs.map(doc => doc.id);
    const playlistNameList = playlistSnap.docs.map(doc => doc.data().Name);

    // create object with id and name for each playlist
    let i = 0;
    const playlistObjArr = [];
    for (const playlistId of playlistIdList) {
      let newObj = {id: playlistId, name: playlistNameList[i]};
      playlistObjArr.push(newObj);
      i++;
    }

    setPlaylists(playlistObjArr);
  }

  const createPlaylistLinks = () => {
    // for each element of playlists state array
    // create link component for playlist
    // use id for href and name for text
    let playlistComps = [];
    for (const element of playlists) {
      let id = element.id;
      let name = element.name;
      let path = "/" + id;

      let comp = <div className={Styles.playlistElement} key={id}>
        <a className={Styles.playlistLink} href={path}>
          <span className={Styles.playlistText}>{name}</span>
        </a>
      </div>;

      playlistComps.push(comp);
    }

    setPlaylistComponents(playlistComps);
  }
  
  return (
    <div className={Styles.playlistNavContainer}>
      <ul className={Styles.linkContainer}>
        <li className={Styles.buttonContainer}>
          <button className={Styles.createButton}>
            <svg className={Styles.icon} viewBox="0 0 24 24">
              <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z" />
            </svg>
            <span className={Styles.buttonText}>Create Playlist</span>
          </button>
        </li>
        <li className={Styles.buttonContainer}>
          <NavLink to="/collection/tracks" className={({ isActive}) => isActive ? Styles.linkActive : Styles.link}>
            <svg className={Styles.icon} viewBox="0 0 24 24">
              <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z" />
            </svg>
            <span className={Styles.buttonText}>Liked Songs</span>
          </NavLink>
        </li>
      </ul>

      <hr />
      
        <div className={Styles.playlistsContainer}>
          {playlistComponents}
        </div>
    </div>
    // hr
    // playlist container
  );
}

export default NavPlaylists;