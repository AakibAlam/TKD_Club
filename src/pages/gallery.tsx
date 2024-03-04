import Heading from "../components/heading";
import ImageCard from "../components/img-view";

import Ex1 from "../../public/ex1.jpeg";
import Ex2 from "../../public/ex2.jpeg";
import Ex3 from "../../public/ex3.jpeg";
import Ex4 from "../../public/ex4.jpeg";

function Gallery() {
  return (
    <div>
      <Heading
        title="Discipline in motion"
        subtitle="GALLERY"
        description="Experience the spirit of Taekwondo with our inspiring gallery"
      ></Heading>

      <div className="container p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <ImageCard src={Ex1} alt="Image 1" />
          <ImageCard src={Ex2} alt="Image 2" />
          <ImageCard src={Ex3} alt="Image 3" />
          <ImageCard src={Ex4} alt="Image 3" />
          <ImageCard src={Ex3} alt="Image 3" />
          <ImageCard src={Ex4} alt="Image 3" />
          <ImageCard src={Ex1} alt="Image 1" />
          <ImageCard src={Ex2} alt="Image 2" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
