import Styles from "../../styles/artistPage/header.module.css"

function Header(props) {
  return (
    <div className={Styles.header}>
      <h1 className={Styles.title}>{props.artistName}</h1>
    </div>
  );
}

export default Header;