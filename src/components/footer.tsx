import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white py-8">
      <div className="w-11/12 min-w-96 container flex flex-col sm:flex-row justify-center mb-12">
        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            Contact Us:
          </h1>
        </div>
        <div className="w-full sm:w-2/3 flex flex-col items-end">
          <textarea
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-4 mb-4"
            placeholder="Enter your message..."
          ></textarea>
          <button className="w-20 bg-sky-300 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
            Send
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-12 my-8">
        <a href="#" className="text-purple-400 text-4xl hover:text-purple-600">
          <FaInstagram />
        </a>
        <a href="#" className="text-purple-400 text-4xl hover:text-purple-600">
          <FaFacebook />
        </a>
        <a href="#" className="text-purple-400 text-4xl hover:text-purple-600">
          <FaYoutube />
        </a>
        <a href="#" className="text-purple-400 text-4xl hover:text-purple-600">
          <FaTwitter />
        </a>
      </div>
      <div className="text-xl text-center">
        with <FaHeart className="text-red-500 inline" /> from taekwondo club
      </div>
    </div>
  );
}

export default Footer;
