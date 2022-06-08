import { NextSeo } from 'next-seo';

import { Container, Heading } from '@/components/base';
import { PopuplarBlog, LatestBlog, RecentBlog } from '@/components/carousel';
import { Layout } from '@/components/layouts';

function Home({ popular, latest, recent }) {
  return (
    <>
      <NextSeo
        title="Blog - Danafix"
        description="Temukan tulisan berupa blog yang akan memberikan banyak inspirasi bagi kamu disini."
        canonical="https://blog.danafix.id/"
        openGraph={{
          url: 'https://blog.danafix.id/',
          title: 'Danafix',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
        }}
      />
      <Layout>
        <div className="overflow-hidden relative w-full pb-16">
          <Container>
            <div className="flex flex-wrap -mx-[1.5625rem]">
              <div className="relative w-full flex-[0_0_100%] max-w-[100%] md:flex-[0_0_75%] md:max-w-[75%] px-[1.5625rem]">
                <Heading title="Blog Terpopuler" variant="h3" />
                <PopuplarBlog posts={popular} />
              </div>
              <div className="relative w-full flex-[0_0_100%] max-w-[100%] md:flex-[0_0_25%] md:max-w-[25%] px-[1.5625rem]">
                <div className="relative z-10 widget articles">
                  <Heading title="Blog Terbaru" variant="h3" />
                  <LatestBlog posts={latest} />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="section recent-lists pt-0">
          <Container>
            <Heading title="Blog Terkini" variant="h3" />
            <RecentBlog posts={recent} />
          </Container>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const popularRes = await fetch(
    `${process.env.api_url}${process.env.api_service}/cms/article/carousel`
  );
  const popularData = await popularRes.json();

  const latestRes = await fetch(
    `${process.env.api_url}${process.env.api_service}/cms/article/sidebar`
  );
  const latestData = await latestRes.json();

  const recentRes = await fetch(`${process.env.api_url}${process.env.api_service}/cms/article`);
  const recentData = await recentRes.json();

  return {
    props: {
      popular: popularData.data,
      latest: latestData.data,
      recent: recentData.data,
    },
  };
};

export default Home;
