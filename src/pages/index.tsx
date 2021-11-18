import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

import * as styles from './index.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import Gallery from '../components/Gallery';
import {
  ALUMNI_LIST,
  ANNOUCEMENT_LIST,
  GALLERY_IMAGES,
  HEAD_PICTURES,
  NAV_ITEMS,
  NEWS_LIST,
  PERSON_LIST,
} from '../constant';
import HeadPicture from '../components/HeadPicture';
import AnnoucementCards from '../components/AnnoucementCards';
import NewsCards from '../components/NewsCards';
import AlumniCards from '../components/AlumniCards';
import Picture from '../components/Picture';
import type { SrcSet } from '../interface';
import Message from '../components/Message';

const srcSets: SrcSet[] = [
  { dimensions: [960] },
  { dimensions: [480, 960], media: '(max-width: 1920px)' },
  { dimensions: [320, 640, 960], media: '(max-width: 1280px)' },
  { dimensions: [160, 320, 480], media: '(max-width: 640x)' },
];

const Index: React.FC = () => {
  useEffect(() => {
    require('../utils/modernizr.js');
  }, []);

  return (
    <>
      <Helmet>
        <title>温州肯恩大学办学十周年</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003767" />
      </Helmet>
      <Header navItemList={NAV_ITEMS} />
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Picture
            srcPrefix={withPrefix('/images/logo/10-year-logo')}
            srcPostfix="png"
            srcSets={srcSets}
            webp={true}
          />
        </div>
      </div>
      <HeadPicture imgList={HEAD_PICTURES} />
      <main>
        <Section id="message" title="领导寄语" subTitle="Message">
          <Message />
        </Section>
        <Section id="video" title="温肯十年" subTitle="Video">
          <div className={styles.videoContainer}>
            <video controls poster={withPrefix('/images/video-thumbnail.jpg')}>
              <source
                src="https://wku.edu.cn/wp-content/uploads/video/anniversary.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Section>
        <Section id="annoucement" title="校庆公告" subTitle="Annoucements">
          <AnnoucementCards list={ANNOUCEMENT_LIST} />
        </Section>
        <Section id="news" title="校庆新闻" subTitle="News">
          <NewsCards list={NEWS_LIST} />
          <a href="https://wku.edu.cn/news/archive/" target="_blank">
            <button className={styles.viewMoreButton}>查看更多</button>
          </a>
        </Section>
        <Section id="person" title="十年人物" subTitle="Persons">
          <NewsCards list={PERSON_LIST} />
        </Section>
        <Section id="alumni" title="校友故事" subTitle="Alumni">
          <AlumniCards list={ALUMNI_LIST} />
          <a href="https://wku.edu.cn/jgsz/xyh/xydt/" target="_blank">
            <button className={styles.viewMoreButton}>查看更多</button>
          </a>
        </Section>
        <Section id="gallery" title="影像温肯" subTitle="Photos">
          <Gallery imgList={GALLERY_IMAGES} />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
