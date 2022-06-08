import { NavLink } from '@/components/base';

function Navigation() {
  return (
    <nav className="flex-grow basis-full items-center xl:flex xl:basis-auto xl:opacity-100 xl:visible xl:h-[39px] xl:transform-none">
      <ul className="flex pl-0 mb-0 list-none ml-auto flex-col xl:flex-row">
        <NavLink title="Tentang Danafix" link="/tentang-danafix" />
        <NavLink title="Pembayaran Pinjaman" link="/pembayaran-pinjaman" />
        <NavLink title="Tanya Jawab" link="/pembayaran-pinjaman" />
        <NavLink title="Hubungi Kami" link="/pembayaran-pinjaman" />
        <NavLink title="Blog" link="/pembayaran-pinjaman" />
        <NavLink title="Keterbukaan Regulasi" link="/pembayaran-pinjaman" />
        <NavLink title="Kesulitan Membayar" link="/pembayaran-pinjaman" />
      </ul>
    </nav>
  );
}

export default Navigation;
