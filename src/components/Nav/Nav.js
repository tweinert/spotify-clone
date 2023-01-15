import Styles from "../../styles/nav/nav.module.css";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavPlaylists from "./NavPlaylists";

function Nav(props) {
  return (
    <div className={Styles.nav}>
      <NavLogo />
      <NavLinks />
      <NavPlaylists setPlaylists={props.setPlaylists} />
    </div>);
}

export default Nav;
