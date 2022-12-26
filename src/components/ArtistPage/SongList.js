import Styles from "../../styles/artistPage/songList.module.css"

function SongList() {
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
        <div className={Styles.tableRow}>
          <div>1</div>
          <div>Speak to Me</div>
          <div>The Dark Side of the Moon</div>
          <div>1:05</div>
        </div>
        <div className={Styles.tableRow}>
          <div>2</div>
          <div>Breathe (In the Air)</div>
          <div>The Dark Side of the Moon</div>
          <div>2:49</div>
        </div>
      </div>
    </div>
  );
}

export default SongList;
