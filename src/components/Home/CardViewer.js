import React, { useState, useEffect } from 'react';
import Styles from "../../styles/home/cardViewer.module.css";

function CardViewer(props) {
  // create content based on type
  // type: artists
  const [type, setType] = useState(props.type);
  // const [artists, setArtists] = useState(props.artistArr);
  const [cardComponents, setCardComponents] = useState([]);

  // run on prop change to ensure it runs after fetch
  useEffect(() => {
    if (type == "artists") {
      createArtistCards();
    }
  }, [props]);

  const createArtistCards = () => {
    const artistComps = [];
    for (const element of props.artistArr) {
      // create card for each artist
      let name = element.name;
      let id = element.id;
      let comp = <div className={Styles.cardContainer} key={id}>
        <img className={Styles.cardImage}></img>
        <span className={Styles.cardHeader}>{name}</span>
        <span className={Styles.cardText}>{id}</span>
        </div>
      
      artistComps.push(comp);
    }

    setCardComponents([...artistComps]);
  }
  
  return (
    <div>
      <h2 className={Styles.title}>{props.type}</h2>
      <div className={Styles.mainContainer}>
        <div className={Styles.cardContainer}>
          <img className={Styles.cardImage} alt="card"></img>
          <span className={Styles.cardHeader}>Discover Weekly</span>
          <span className={Styles.cardText}>Your weekly mixtape of fresh music</span>
        </div>
        {cardComponents}
      </div>
    </div>
  );
}

export default CardViewer;
