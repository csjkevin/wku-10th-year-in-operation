import React, { useEffect, useState } from 'react';
import { withPrefix } from 'gatsby';

import * as styles from './index.module.css';
import Picture from '../Picture';
import type { PictureProp } from '../../interface';

interface Props {
  imgList?: PictureProp[];
}

const Gallery: React.FC<Props> = (props) => {
  const { imgList: initialImgList = [] } = props;

  const [imgList, setImgList] = useState<PictureProp[]>(initialImgList);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (counter > 0 && counter % 4 === 0) {
      setImgList((prevState) => prevState.slice(3).concat(prevState.slice(0, 3)));
    }
  }, [counter]);

  const galleryItemsRender = (list: PictureProp[]) => {
    if (Array.isArray(list)) {
      return list.map((item) => (
        <Picture
          key={item.srcPrefix}
          srcPrefix={withPrefix(item.srcPrefix)}
          srcPostfix={item.srcPostfix}
          srcSets={item.srcSets}
          webp={item.webp}
          className={styles.imgContainer}
        />
      ));
    }
  };

  return (
    <div className={styles.galleryContainer}>
      <div
        className={styles.gallery}
        style={{
          transform: `translateX(calc(-34vw * ${counter % 4}))`,
          transition: counter % 4 ? '2s' : '0s',
        }}
      >
        {galleryItemsRender(imgList)}
      </div>
    </div>
  );
};

export default Gallery;
