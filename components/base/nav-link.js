import Link from 'next/link';

export default function NavLink({ title, link }) {
  return (
    <Link href={link}>
      <a className="font-sans font-medium text-xs leading-6 text-[#4f4e4f] hover:text-primary transition-colors duration-300 ease-in-out px-[0.625rem] py-2">
        {title}
        <span className="dblock xl:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
          </svg>
        </span>
      </a>
    </Link>
  );
}
