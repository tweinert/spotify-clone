import Styles from "../../styles/home/cardViewer.module.css";

function CardViewer() {
  return (
    <div>
      <h2 className={Styles.title}>Your Top Mixes</h2>
      <div className={Styles.mainContainer}>
        <div className={Styles.cardContainer}>
          <img className={Styles.cardImage}></img>
          <span className={Styles.cardHeader}>Discover Weekly</span>
          <span className={Styles.cardText}>Your weekly mixtape of fresh music</span>
        </div>
        <div className={Styles.cardContainer}>
          <img className={Styles.cardImage}></img>
          <span className={Styles.cardHeader}>Discover Weekly</span>
          <span className={Styles.cardText}>Your weekly mixtape of fresh music</span>
        </div>
        <div className={Styles.cardContainer}>
          <img className={Styles.cardImage}></img>
          <span className={Styles.cardHeader}>Discover Weekly</span>
          <span className={Styles.cardText}>Your weekly mixtape of fresh music</span>
        </div>
        <div className={Styles.cardContainer}>
          <img className={Styles.cardImage}></img>
          <span className={Styles.cardHeader}>Discover Weekly</span>
          <span className={Styles.cardText}>Your weekly mixtape of fresh music</span>
        </div>
        <div className={Styles.cardContainer}>
          <img className={Styles.cardImage}></img>
          <span className={Styles.cardHeader}>Discover Weekly</span>
          <span className={Styles.cardText}>Your weekly mixtape of fresh music</span>
        </div>
        <div className={Styles.cardContainer}>
          <img className={Styles.cardImage}></img>
          <span className={Styles.cardHeader}>Discover Weekly</span>
          <span className={Styles.cardText}>Your weekly mixtape of fresh music</span>
        </div>
      </div>
    </div>
  );
}

export default CardViewer;
