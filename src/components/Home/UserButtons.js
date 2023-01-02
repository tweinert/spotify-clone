import Styles from "../../styles/home/userButtons.module.css";

function UserButtons() {
  return (
    <div className={Styles.userButtons}>
      <button className={Styles.signUpButton}>Sign up</button>
      <button className={Styles.logInButton}>Log in</button>
    </div>
  );
}

export default UserButtons;