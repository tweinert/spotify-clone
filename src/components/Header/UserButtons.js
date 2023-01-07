import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { db, provider } from "../Firebase";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
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
        setUserName(user.displayName);
        signUpUser();
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  
  const signUpUser = async() => {
    // let docRef = collection("Users").doc(getAuth().currentUser.uid);
    const docRef = doc(db, "Users", getAuth().currentUser.uid);
    const docSnap = await setDoc(docRef, {}, {
      merge: true
    });
    console.log(docSnap);
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