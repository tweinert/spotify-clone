import Styles from "../../styles/artistPage/artistHeader.module.css"

function ArtistHeader(props) {
  return (
    <div className={Styles.artistHeader}>
      <h1 className={Styles.title}>{props.artistName}</h1>
    </div>
  );
}

export default ArtistHeader;