import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-900 p-4"
      >
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {!isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 w-60 h-screen flex flex-col bg-gray-800">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 p-4"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex-1 p-2 space-y-1 text-center">
            <a
              href="/home"
              className="text-white block text-3xl px-3 py-2 rounded-md hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/events"
              className="text-white block text-3xl px-3 py-2 rounded-md hover:text-gray-900"
            >
              Events
            </a>
            <a
              href="/gallery"
              className="text-white block text-3xl px-3 py-2 rounded-md hover:text-gray-900"
            >
              Gallery
            </a>
            <a
              href="/team"
              className="text-white block text-3xl px-3 py-2 rounded-md hover:text-gray-900"
            >
              Team
            </a>
            <a
              href="/alumni"
              className="text-white block text-3xl px-3 py-2 rounded-md hover:text-gray-900"
            >
              Alumni
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
