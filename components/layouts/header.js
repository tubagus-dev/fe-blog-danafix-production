import { Container, Brand, Navigation } from '@/components/base';

function Header() {
  return (
    <header
      id="header"
      className="relative w-full bg-white flex items-center justify-center min-h-[73px] shadow-[0_2px_6px_#cfcfcf]"
    >
      <Container>
        <div className="relative w-full py-[0.375rem] flex items-center justify-center flex-row flex-nowrap">
          <Brand />
          <div className="flex sm:flex md:flex lg:flex xl:hidden items-center">
            <button aria-label="Toggle navigation" type="button" className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default Header;
