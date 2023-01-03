import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { provider } from "../Firebase";
import Styles from "../../styles/header/userButtons.module.css";

function UserButtons() {
  const [userName, setUserName] = useState();

  const popupLogIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setUserName(user.displayName);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUserName("");
      console.log("sign out successful");
    }).catch((error) => {
      console.log("sign out error: " + error);
    });
  }
  
  return (
    <div className={Styles.userButtons}>
      <div className={Styles.userText}>{userName}</div>
      {userName
        ? <button className={Styles.signOutButton} onClick={signOutUser}>Sign Out</button>
        :
        <div>
          <button className={Styles.signUpButton}>Sign up</button>
          <button className={Styles.logInButton} onClick={popupLogIn}>Log in</button>
        </div>
      }
    </div>
  );
}

export default UserButtons;