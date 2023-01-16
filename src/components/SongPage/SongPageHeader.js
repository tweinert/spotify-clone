import Styles from "../../styles/songPage/songPageHeader.module.css"

function SongPageHeader(props) {
  return (
    <div className={Styles.songPageHeader}>
      <h1 className={Styles.title}>{props.title}</h1>
    </div>
  );
}

export default SongPageHeader;