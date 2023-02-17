import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/footer.module.css";

function Footer(props) {
  return <div className={Styles.footer}>Currently Playing: {props.queue}</div>
}

export default Footer;