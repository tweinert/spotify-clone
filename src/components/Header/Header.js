import Styles from "../../styles/header/header.module.css";
import UserButtons from "./UserButtons";

function Header() {
  return (
    <div className={Styles.header}>
      <UserButtons className={Styles.header} />
    </div>
  );
}

export default Header;
