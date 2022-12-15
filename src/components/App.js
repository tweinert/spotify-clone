import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "./Firebase";
import Styles from "../styles/app.module.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";


function App() {
  const [artists, setArtists] = useState([]);

  // get artists from db
  useEffect(() => {
    fetchArtistData();
  }, []);

  /*
    TODO change this to use new database format:
    Artists > ID > Songs > ID > Album, Title, Length, Track Number
    This means that unique artists can easily be pulled directly from top level of database.
    Send artist name through as parameter
  */
  // gets unique artists from song list in database
  const fetchArtistData = async() => {
    const songsCol = collection(db, "Songs");
    const songsSnapshot = await getDocs(songsCol);
    const songsList = songsSnapshot.docs.map(doc => doc.data());

    // get all unique artists and add to array
    let uniqueArtists = [];
    for (const element of songsList) {
      if (!uniqueArtists.includes(element.Artist)) {
        uniqueArtists.push(element.Artist);
      }
    }
    console.log(songsList);
    console.log("Artists: " + uniqueArtists);
  }

  return (
    <BrowserRouter>
      <div className={Styles.app}>
        <Nav />
        <Routes>
          {/* <Route path="/search"><Search /></Route> */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
