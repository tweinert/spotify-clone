import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore/lite";
import db from "./Firebase";
import Styles from "../styles/app.module.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import ArtistPage from './ArtistPage/ArtistPage';


function App() {
  const [artists, setArtists] = useState([]);
  const [artistComponents, setArtistComponents] = useState([]);

  // get artists from db
  useEffect(() => {
    fetchArtistData();
  }, []);

  // for testing purposes
  useEffect(() => {
    createArtistComponents();
  }, [artists]);

  // gets unique artists from song list in database
  const fetchArtistData = async() => {
    const artistCol = collection(db, "Artists");
    const artistSnapshot = await getDocs(artistCol);
    // const artistList = artistSnapshot.docs.map(doc => doc.data());

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

      let comp = <Route key={id} path={path} element={<ArtistPage key={id} id={id} artistName={name}/>} />;

      artistComps.push(comp);
    }

    setArtistComponents([...artistComps]);
    console.log(artistComponents);
  }


  return (
    <BrowserRouter>
      <div className={Styles.app}>
        <Nav />
        <Routes>
          {/* <Route path="/search"><Search /></Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/artistPage" element={<ArtistPage />} />
          {artistComponents}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
