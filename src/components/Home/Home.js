import Styles from "../../styles/home/home.module.css";
import RecentlyPlayed from "./RecentlyPlayed";
import CardViewer from "./CardViewer";

function Home(props) {
  return (
    <div className={Styles.home}>
      <RecentlyPlayed />
      <CardViewer type="artists" artistArr={props.artistArr} />
    </div>
  );
}

export default Home;
