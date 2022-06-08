import Link from 'next/link';

import { Container, Divider } from '@/components/base';
import { Services, Addresses, Socials, AppDownload } from '@/components/widgets';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full bg-[#fafafa] pt-[3.125rem] pb-[1.565rem] px-0 mt-[3.125rem]"
    >
      <Container>
        <div className="flex flex-wrap -mx-[1.5625rem]">
          <div className="relative w-full flex-[0_0_100%] max-w-[100%] sm:flex-[0_0_25%] sm:max-w-[25%] md:flex-[0_0_33.33333%] md:max-w-[33.33333%] px-[1.5625rem]">
            <Services />
          </div>
          <div className="relative w-full flex-[0_0_100%] max-w-[100%] sm:flex-[0_0_41.66667%] sm:max-w-[41.66667%] md:flex-[0_0_41.66667%] md:max-w-[41.66667%] px-[1.5625rem]">
            <Addresses />
          </div>
          <div className="relative w-full flex-[0_0_100%] max-w-[100%] sm:flex-[0_0_33.33333%] sm:max-w-[33.33333%] md:flex-[0_0_25%] md:max-w-[25%] px-[1.5625rem]">
            <Socials />
            <AppDownload />
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap -mx-[1.5625rem]">
          <div className="relative w-full flex-[0_0_100%] max-w-[100%] lg:flex-[0_0_50%] lg:max-w-[50%] px-[1.5625rem]">
            <div className="w-full flex flex-wrap justify-around mb-4">
              <div className="logo__item flex items-center flex-col mr-4">
                <span className="font-sans text-[#939597] text-[0.625rem] block mb-[0.375rem]">
                  Anggota Dari
                </span>
                <img
                  className="w-auto h-auto max-w-[115px]"
                  src="https://cdn.dfx-id.com/assets/logos/afpi-new.png"
                  width="91"
                  height="44.79"
                  alt="afpi logo"
                />
              </div>
              <div className="logo__item flex items-center flex-col mr-4">
                <span className="font-sans text-[#939597] text-[0.625rem] block mb-1">
                  Berizin Dan Diawasi Oleh
                </span>
                <img
                  className="w-auto h-auto max-w-[91px]"
                  src="https://cdn.dfx-id.com/assets/logos/ojk.png"
                  width="91"
                  height="44.65"
                  alt="ojk logo"
                />
              </div>
              <div className="logo__item flex items-center flex-col mr-4">
                <img
                  className="w-auto h-auto max-w-[150px]"
                  src="https://cdn.dfx-id.com/assets/logos/tuv.png"
                  width="150"
                  height="55.38"
                  alt="tuv logo"
                />
              </div>
            </div>
            <p className="block font-sans font-normal text-[0.5625rem] leading-[1.89] tracking-[-0.05px] text-[#6b6b6b] text-justify">
              Danafix adalah Penyelenggara Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi
              ("LPMUBTI") yang telah <b>berizin</b> dan diawasi oleh Otoritas Jasa Keuangan di
              Indonesia dengan nomor KEP-93/D.05/2021 atas nama PT. Danafix Online Indonesia yang
              telah sesuai dengan Peraturan Otoritas Jasa Keuangan Nomor 77/POJK.01/2016 tentang
              Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi.
            </p>
          </div>
          <div className="relative w-full flex-[0_0_100%] max-w-[100%] lg:flex-[0_0_50%] lg:max-w-[50%] px-[1.5625rem]">
            <ul className="list-disc pl-[1.375rem]">
              <li className="font-sans font-normal text-[0.5625rem] leading-[1.89] tracking-[-0.05px] text-[#6b6b6b] text-justify">
                Rate Tahunan (APR) termasuk semua komisi adalah 144% per tahun.
              </li>
              <li className="font-sans font-normal text-[0.5625rem] leading-[1.89] tracking-[-0.05px] text-[#6b6b6b] text-justify">
                INFORMASI UTAMA PRODUK PINJAMAN DANA TUNAI YANG ADA DI Danafix: Kisaran pinjaman:
                500.000 - 15.000.000; Periode pinjaman: 120 hari - 210 hari; Tingkat pinjaman: 12%
                bulan; Area jangkauan: mencakup seluruh wilayah Indonesia.
              </li>
              <li className="font-sans font-normal text-[0.5625rem] leading-[1.89] tracking-[-0.05px] text-[#6b6b6b] text-justify">
                Jika Anda ingin mengetahui bagaimana bunga pada produk pinjaman dihitung, berikut
                ini adalah contoh dari perhitungan pinjaman: Jika Anda meminjam 12% dari bunga
                pinjaman selama 4 bulan untuk meminjam IDR 500.000, maka Anda harus membayar IDR
                500.000 * (1 + 12% * 4) = IDR 740,000
              </li>
            </ul>
          </div>
        </div>
        <Divider />
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="footer__logo">
              <img
                src="https://cdn.dfx-id.com/assets/logo.svg"
                className="max-w-[94px]"
                width="94"
                height="24.04"
                alt="danafix logo"
              />
            </a>
          </Link>
          <div className="flex flex-wrap">
            <Link href="/laporan-tahunan">
              <a className="block ml-4 text-xs leading-[1.33] tracking-[-0.07px] text-[#464646]">
                Laporan Tahunan
              </a>
            </Link>
            <Link href="/syarat-dan-ketentuan">
              <a className="block ml-4 text-xs leading-[1.33] tracking-[-0.07px] text-[#464646]">
                Syarat &amp; Ketentuan
              </a>
            </Link>
            <Link href="/kebijakan-privasi">
              <a className="block ml-4 text-xs leading-[1.33] tracking-[-0.07px] text-[#464646]">
                Kebijakan Privasi
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
