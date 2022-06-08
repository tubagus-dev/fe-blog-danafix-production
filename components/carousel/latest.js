import SwiperCore, { Scrollbar, Mousewheel, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dateFormat, { i18n } from 'dateformat';
import Link from 'next/link';

SwiperCore.use([Scrollbar, Mousewheel, A11y]);

i18n.dayNames = [
  'Mig',
  'Sen',
  'Sel',
  'Rab',
  'Kam',
  'Jum',
  'Sab',
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
];

i18n.monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agu',
  'Sep',
  'Okt',
  'Nov',
  'Des',
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

function Latestpost({ posts }) {
  const initialSettings = {
    direction: 'vertical',
    slidesPerView: 2,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: {
      releaseOnEdges: true,
    },
  };

  return (
    <div className="articles">
      <Swiper {...initialSettings}>
        {posts.map((post) => (
          <SwiperSlide className="group relative overflow-hidden p-0 h-auto" key={post.id}>
            <Link href={`blog/${post.slug}`}>
              <a className="relative inset-0 m-0 w-full h-[145px] bg-[#674f4f] z-[1] overflow-hidden block">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-repeat bg-center scale-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  style={{ backgroundImage: `url(${post.imgUrl})` }}
                />
              </a>
            </Link>
            <div className="block bg-white py-4 px-0">
              <h4 className="font-sans font-medium text-[1.125rem] leading-[1.2] mb-2">
                <Link href={`blog/${post.slug}`}>
                  <a className="font-sans font-medium inline-block no-underline text-[#464646] hover:text-primary focus:text-primary transition-colors duration-300 ease-in-out">
                    {post.title}
                  </a>
                </Link>
              </h4>
              <span className="font-sans font-medium text-sm block leading-[1.5] text-[#666666] meta">
                {dateFormat(post.publishOn, 'dd mmmm yyyy')} by{' '}
                <Link href="/">
                  <a className="font-sans font-medium inline-block text-[#0fa0ae]">Admin</a>
                </Link>
              </span>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar" slot="container-end"></div>
      </Swiper>
    </div>
  );
}

export default Latestpost;
