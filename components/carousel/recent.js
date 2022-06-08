import SwiperCore, { Scrollbar, Grid, Mousewheel, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dateFormat, { i18n } from 'dateformat';
import Link from 'next/link';

SwiperCore.use([Scrollbar, Grid, Mousewheel, A11y]);

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

function RecentBlog({ posts }) {
  const initialSettings = {
    direction: 'horizontal',
    spaceBetween: 30,
    freeMode: true,
    grid: {
      rows: 3,
      fill: 'column',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="recent-slider">
      <Swiper {...initialSettings}>
        {posts.map((post) => (
          <SwiperSlide
            className="group flex relative overflow-hidden h-[calc((100%_-_60px)_/_3)]"
            key={post.id}
          >
            <Link href={`blog/${post.slug}`}>
              <a className="relative w-[136px] min-w-[136px] h-[136px] overflow-hidden">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center scale-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  style={{ backgroundImage: `url(${post.imgUrl})` }}
                />
              </a>
            </Link>
            <div className="relative z-[2] block bg-white py-1 px-4 w-full">
              <h4 className="font-sans font-medium mb-1 text-[1.125rem] leading-[1.2] lg:text-lg">
                <Link href={`blog/${post.slug}`}>
                  <a className="font-sans font-medium inline-block text-[#171717] no-underline transition-colors duration-300 ease-in-out hover:text-primary">
                    {post.title}
                  </a>
                </Link>
              </h4>
              <span className="font-sans font-medium text-xs lg:text-base block text-[#666666]">
                {dateFormat(post.publishOn, 'dd mmmm yyyy')} by{' '}
                <Link href="/">
                  <a className="inline-block text-[#0fa0ae]">Admin</a>
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

export default RecentBlog;
