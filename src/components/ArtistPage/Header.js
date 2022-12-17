import Styles from "../../styles/artistPage/header.module.css"

function Header() {
  return (
    <div className={Styles.header}>
      <h1 className={Styles.title}>Artist Name</h1>
    </div>
  );
}

export default Header;