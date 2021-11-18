import React from 'react';

import * as styles from './index.module.css';
import type { News } from '../../interface';

const NewsCard: React.FC<News> = (props) => {
  const { date, title, href, imgSrc, imgPosition } = props;
  return (
    <div className={styles.news}>
      <a href={href}>
        <div>
          <img
            src={imgSrc}
            alt={title}
            style={imgPosition ? { objectPosition: imgPosition } : void 0}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.date}>{date}</span>
          <p className={styles.title}>{title}</p>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
