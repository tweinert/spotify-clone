import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/footer.module.css";

function Footer(props) {
  // remove queue[0] when song ends
  
  // props.queue[0].Title
  return (
    <div className={Styles.footer}>
      Currently Playing: {props.isPlaying ? props.queue[0].Title : "nothing"}
    </div>
  );
}

export default Footer;