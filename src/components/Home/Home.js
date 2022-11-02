import Styles from "../../styles/home/home.module.css";
import RecentlyPlayed from "./RecentlyPlayed";
import CardViewer from "./CardViewer";

function Home() {
  return (
    <div className={Styles.home}>
      <RecentlyPlayed />
      <CardViewer />
      <CardViewer />
    </div>
  );
}

export default Home;
