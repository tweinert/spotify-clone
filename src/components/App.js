import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore/lite";
import { db } from "./Firebase";
import Styles from "../styles/app.module.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import SongPage from './SongPage/SongPage';
import Header from './Header/Header';


function App() {
  const [artists, setArtists] = useState([]);
  const [artistComponents, setArtistComponents] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [playlistComponents, setPlaylistComponents] = useState([]);

  // get artists from db
  useEffect(() => {
    fetchArtistData();
    console.log("App mount");
  }, []);

  // for testing purposes
  useEffect(() => {
    createArtistComponents();
    console.log("App artists changed");
  }, [artists]);

  useEffect(() => {
    createPlaylistComponents();
    console.log("App playlists changed");
  }, [playlists]);

  // gets unique artists from song list in database
  const fetchArtistData = async() => {
    const artistCol = collection(db, "Artists");
    const artistSnapshot = await getDocs(artistCol);

    // get all unique artists and add to array
    let uniqueArtists = [];
    for (const element of artistSnapshot.docs) {
      let obj = {id: element.id, name: element.data().Name};
      uniqueArtists.push(obj);
    }

    setArtists([...uniqueArtists]);
  }

  const createArtistComponents = () => {
    // for each artist in state artists array
    // create artistPage component using that artist's id as link
    // set unique key for each component (artist id)
    let artistComps = [];
    for (const element of artists) {
      let id = element.id;
      let name = element.name;
      let path = "/" + id;

      let comp = <Route key={id} path={path} element={<SongPage key={id} id={id} title={name} type="artist" playlists={playlists} />} />;

      artistComps.push(comp);
    }

    setArtistComponents([...artistComps]);
  }

  const createPlaylistComponents = () => {
    let playlistComps = [];
    for (const element of playlists) {
      let id = element.id;
      let name = element.name;
      let path = "/" + id;

      let comp = <Route key={id} path={path} element={<SongPage key={id} id={id} title={name} type="playlist" playlists={playlists} />} />;

      playlistComps.push(comp)
    }

    setPlaylistComponents([...playlistComps]);
  }


  return (
    <BrowserRouter>
      <div className={Styles.app}>
        <Nav setPlaylists={setPlaylists} />
        <Header />
        <Routes>
          {/* <Route path="/search"><Search /></Route> */}
          <Route path="/" element={<Home artistArr={artists} />} />
          {artistComponents}
          {playlistComponents}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
