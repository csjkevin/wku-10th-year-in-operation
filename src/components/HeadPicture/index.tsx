import React, { useEffect, useState } from 'react';
import { withPrefix } from 'gatsby';

import * as styles from './index.module.css';
import type { PictureProp } from '../../interface';
import Picture from '../Picture';

interface Props {
  imgList?: PictureProp[];
}

const HeadPictures: React.FC<Props> = (props) => {
  const { imgList = [] } = props;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const headPictureItemsRender = (list: PictureProp[]) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <Picture
            key={item.srcPrefix}
            srcPrefix={withPrefix(item.srcPrefix)}
            srcPostfix={item.srcPostfix}
            srcSets={item.srcSets}
            webp={item.webp}
            className={`${styles.headPicture} ${
              counter % imgList.length === index ? styles.active : ''
            }`}
          />
        );
      });
    }
  };

  return <div className={styles.headPicture}>{headPictureItemsRender(imgList)}</div>;
};

export default HeadPictures;
