import Link from 'next/link';

import { CMS_NAME } from '@/lib/constants';

function Brand() {
  return (
    <Link
      href="/"
      className="mr-0 inline-block py-[0.3125rem] text-xl leading-none whitespace-nowrap bg-transparent"
    >
      <a className="no-underline">
        <img
          src="https://cdn.dfx-id.com/assets/logo.svg"
          className="hidden sm:block md:block lg:block"
          width="129"
          height="33"
          alt={CMS_NAME}
        />
        <img
          src="https://cdn.dfx-id.com/assets/logo_mobile.svg"
          className="block sm:hidden md:hidden lg:hidden xl:hidden"
          width="102.04"
          height="26"
          alt={CMS_NAME}
        />
        <div className="block text-[0.625rem] text-[#9b9b9b] mt-0.5">TKB90: 95.00%</div>
      </a>
    </Link>
  );
}

export default Brand;
