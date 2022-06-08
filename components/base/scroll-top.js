import { useState } from 'react';

export default function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    const pageY = typeof window !== 'undefined' ? window.pageYOffset : null;

    if (!showScroll && pageY > 400) {
      setShowScroll(true);
    } else if (showScroll && pageY <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <button
      type="button"
      className="fixed right-8 bottom-8 w-[42px] h-[42px] p-0 rounded-lg border-none text-[1.125rem] leading-[32px] z-50 bg-[#464646] hover:bg-primary focus:bg-primary text-white inline-flex justify-center items-center animate-fading transition-all duration-300 ease-in-out"
      onClick={scrollTop}
      style={{ opacity: showScroll ? '1' : '0', visibility: showScroll ? 'visible' : 'hidden' }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
      </svg>
    </button>
  );
}
