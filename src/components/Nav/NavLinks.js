import Styles from "../../styles/nav/navLinks.module.css";

function NavLinks() {
  return (
    <ul className={Styles.linkContainer}>
      <li className={Styles.listElement}>
        <a className={Styles.link} href="/">
          <svg className={Styles.icon} viewBox="0 0 24 24">
            <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
          </svg>
          <span className={Styles.text}>Home</span>
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;