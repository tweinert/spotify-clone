import { useState, useEffect } from 'react';
import Styles from "../../styles/footer/footer.module.css";

function Footer(props) {
  // remove queue[0] when song ends
  
  return (
    <div className={Styles.footer}>
      Currently Playing: {props.queue[0].Title}
    </div>
  );
}

export default Footer;