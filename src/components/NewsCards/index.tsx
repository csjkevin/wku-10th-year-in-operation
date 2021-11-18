import React from 'react';

import type { News } from '../../interface';
import NewsCard from '../NewsCard';

interface Props {
  list?: News[];
}

const NewsCards: React.FC<Props> = (props) => {
  const { list: newsList = [] } = props;

  const newsCardsRender = (list: News[]) => {
    if (Array.isArray(list)) {
      return list.map((item) => (
        <NewsCard
          key={item.title}
          date={item.date}
          title={item.title}
          href={item.href}
          imgSrc={item.imgSrc}
          imgPosition={item.imgPosition}
        />
      ));
    }
  };

  return <div className="flex justify-content-center flex-wrap">{newsCardsRender(newsList)}</div>;
};

export default NewsCards;
