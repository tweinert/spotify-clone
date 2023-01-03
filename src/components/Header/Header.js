import Styles from "../../styles/header/header.module.css";
import UserButtons from "./UserButtons";

function Header() {
  return (
    <UserButtons className={Styles.header} />
  );
}

export default Header;
