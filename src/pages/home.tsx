import Activity from "../components/activity";
import About from "../components/about";
import Coach from "../components/coach";
import Intro from "../components/intro/intro";
import Heading from "../components/heading";

function Home() {
  return (
    <div>
      <Heading
        title="TAEKWONDO CLUB, IITK"
        subtitle="Rise And Respect"
        description="Besides the daily exercise at Taekwondo Arena, We also conduct various events like Belt Promotion Test at regular intervals to develop the healthy and competitive nature among students. We also participate in Poomsae or Fight competitions organised near Kanpur. We also do a demonstration of our skills on Republic day and Independence day every year in auditorium."
      />
      {/* <Intro></Intro> */}
      <Coach></Coach>
      <About></About>
      <Activity></Activity>
    </div>
  );
}

export default Home;
