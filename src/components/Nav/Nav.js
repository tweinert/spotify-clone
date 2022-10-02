import Styles from "../../styles/nav/nav.module.css";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavPlaylists from "./NavPlaylists";

function Nav() {
  return (
    <div className={Styles.nav}>
      <NavLogo />
      <NavLinks />
      <NavPlaylists />
    </div>);
}

export default Nav;
