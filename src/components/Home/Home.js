import Styles from "../../styles/home/home.module.css";
import RecentlyPlayed from "./RecentlyPlayed";
import CardViewer from "./CardViewer";
import UserButtons from "./UserButtons";

function Home(props) {
  return (
    <div className={Styles.home}>
      <UserButtons />
      <RecentlyPlayed />
      <CardViewer type="artists" artistArr={props.artistArr} />
    </div>
  );
}

export default Home;
