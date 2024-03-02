import Activity from "../components/activity/activity";
import About from "../components/about/about";
import Coach from "../components/coach/coach";
import Intro from "../components/intro/intro";

function Home() {
  return (
    <div>
      <Intro></Intro>
      <Coach></Coach>
      <About></About>
      <Activity></Activity>
    </div>
  );
}

export default Home;
