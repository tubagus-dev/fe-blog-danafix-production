import Link from 'next/link';

import React from 'react';

function AppDownload() {
  return (
    <div className="widget follow-us">
      <h6 className="font-sans font-bold text-[0.6875rem] text-secondary leading-[1.45] mb-4">
        Unduh Aplikasi Danafix
      </h6>
      <Link href="https://go.onelink.me/app/1ebffedb">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="mb-2 block p-0 rounded-none border-none bg-transparent shadow-none opacity-100 hover:opacity-75 focus:opacity-75"
        >
          <img
            src="https://cdn.dfx-id.com/assets/google_play.png"
            width="136"
            height="41.39"
            alt="google playstore"
          />
        </a>
      </Link>
      <Link href="https://danafix.onelink.me/smbC/7a8a652a">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="mb-0 block p-0 rounded-none border-none bg-transparent shadow-none opacity-100 hover:opacity-75 focus:opacity-75"
        >
          <img
            src="https://cdn.dfx-id.com/assets/logos/app-store.png"
            width="136"
            height="41.39"
            alt="app store"
          />
        </a>
      </Link>
    </div>
  );
}

export default AppDownload;
