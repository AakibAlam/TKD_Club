import { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

Modal.setAppElement("#root");

function ImageCard({ src, alt }: { src: string; alt: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`relative overflow-hidden ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-center object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black opacity-50"></div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel={alt}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "60%",
            minWidth: "450px",
            border: "none",
            background: "transparent",
          },
        }}
      >
        <button
          className="absolute top-4 right-4 text-white text-lg"
          onClick={handleCloseModal}
        >
          <FaTimes />
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-full" />
      </Modal>
    </>
  );
}

export default ImageCard;
