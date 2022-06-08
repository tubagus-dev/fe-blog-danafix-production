import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dateFormat, { i18n } from 'dateformat';
import Link from 'next/link';

SwiperCore.use([Pagination, A11y]);

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

function PopularBlog({ posts }) {
  const initialSettings = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className="popular-slider relative w-full pb-2 lg:pb-0">
      <Swiper {...initialSettings}>
        {posts.map((post) => (
          <SwiperSlide
            key={post.id}
            className="popular__item group flex items-end min-h-[520px] relative overflow-hidden p-6 lg:p-8 rounded-3xl shadow-[0_0_0_rgba(0,_0,_0,_0.1)] transition-shadow duration-300 ease-in-out -z-10"
          >
            <Link href={`blog/${post.slug}`}>
              <a className="absolute inset-0 mt-8 mx-auto mb-0 w-[calc(100%_-_48px)] lg:w-[calc(100%_-_64px)] h-[70%] bg-[#674f4f] z-10 overflow-hidden rounded-3xl">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  style={{ backgroundImage: `url(${post.imgUrl})` }}
                />
              </a>
            </Link>
            <div className="relative z-10 block max-w-[600px] mx-auto my-0 text-center bg-white p-6 lg:p-8 rounded-[0.625rem]">
              <span className="block font-sans text-[1.125rem] lg:text-[1.25rem] text-[#0dcbde] uppercase font-medium leading-[1.5] mb-3">
                {post.categoryName}
              </span>
              <h4 className="font-sans text-lg lg:text-2xl lg font-medium leading-[1.2] mb-4">
                <Link href={`blog/${post.slug}`}>
                  <a className="font-sans inline-block text-[#171717] hover:text-secondary leading-[1.2] no-underline transition-colors duration-300 ease-in-out">
                    {post.title}
                  </a>
                </Link>
              </h4>
              <span className="font-sans font-medium text-base lg:text-[1.125rem] block leading-[1.5]">
                {dateFormat(post.publishOn, 'dd mmmm yyyy')}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularBlog;
