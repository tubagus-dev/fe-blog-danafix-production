import Link from 'next/link';

import React from 'react';

function Services() {
  return (
    <div className="widget customer-service">
      <h6 className="font-sans font-bold text-[0.6875rem] text-secondary leading-[1.45] mb-4">
        Layanan Konsumen
      </h6>
      <Link href="https://m.facebook.com/messages/thread/1000639100099415/?force_thread_view=1">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="inline-flex font-sans font-medium text-sm no-underline rounded-[30px] py-3 px-6 text-[#6c4fc9] hover:bg-[#6c4fc9] focus:bg-[#6c4fc9] hover:text-white focus:text-white border border-solid border-[#6c4fc9] transition-all duration-300 ease-in-out"
        >
          <i className="text-[1.25rem] mr-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path>
            </svg>
          </i>
          Facebook Chat
        </a>
      </Link>
      <h2 className="group text-[2.25rem] leading-[1.2] font-bold tracking-[-.9px] text-[#464646] my-4 mx-0">
        <Link href="tel:14086">
          <a className="text-inherit no-underline group-hover:underline">14086</a>
        </Link>
      </h2>
      <p className="font-sans text-xs font-medium leading-[1.83] m-0">
        <span className="block text-[#939597]">Senin - Jumat, 09:00 – 18:00</span>{' '}
        <Link href="mailto:info@danafix.id">
          <a
            className="font-sans text-xs leading-[2.08] tracking-[-0.07px] text-[#464646] underline font-bold"
            target="_blank"
          >
            info@danafix.id
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Services;
