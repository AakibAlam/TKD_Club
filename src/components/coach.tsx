import CoachImg from "../../public/neutral.jpg";

function Coach() {
  return (
    <div className="py-16 px-4 md:px-0 bg-white text-black">
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
        <div className="md:flex md:flex-col md:items-center">
          <img
            src={CoachImg}
            alt="Coach"
            className="rounded-full w-96 md:w-auto mb-4 md:mb-0"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Balram Yadav
            </h1>
            <h1 className="text-xl md:text-2xl">5th Dan Black Belt</h1>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:text-left text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Instructor</h1>
          <p className="text-lg md:text-xl text-justify md:pr-16">
            Coach Balram Yadav is a 5th Dan Black Belt holder in Taekwondo. He
            has been teaching Taekwondo in IIT Kanpur for the past 20 years. He
            has trained many students who have represented IIT Kanpur in various
            national level competitions. He has also been awarded the best coach
            award by IIT Kanpur.
          </p>
          <button className="bg-gray-500 hover:bg-gray-700 text-white w-32 h-12 font-bold mt-12 rounded">
            Show more...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coach;
