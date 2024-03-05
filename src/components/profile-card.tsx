import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ProfileCard({
  img,
  background,
  name,
  role,
}: {
  img: string;
  background: string;
  name: string;
  role: string;
}) {
  return (
    <div className="max-w-2xl mx-2 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={background}
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src={img}
          alt="Woman looking front"
        />
      </div>
      <div className="text-center my-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500">{role}</p>
      </div>
      <div className="flex justify-center gap-16 my-16">
        <a href="" className="text-4xl">
          {" "}
          <FaLinkedin />{" "}
        </a>
        <a href="" className="text-4xl">
          {" "}
          <FaTwitter />{" "}
        </a>
        <a href="" className="text-4xl">
          {" "}
          <FaInstagram />{" "}
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
