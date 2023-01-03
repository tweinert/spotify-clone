import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { provider } from "../Firebase";
import Styles from "../../styles/home/userButtons.module.css";

function UserButtons() {

  const popupLogIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
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
      console.log("sign out successful");
    }).catch((error) => {
      console.log("sign out error: " + error);
    });
  }
  
  return (
    <div className={Styles.userButtons}>
      <button className={Styles.signUpButton}>Sign up</button>
      <button className={Styles.logInButton} onClick={popupLogIn}>Log in</button>
      <button className={Styles.signOutButton} onClick={signOutUser}>Sign Out</button>
    </div>
  );
}

export default UserButtons;