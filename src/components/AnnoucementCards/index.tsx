import React from 'react';

import type { Annoucement } from '../../interface';
import AnnoucementCard from '../AnnoucementCard';

interface Props {
  list?: Annoucement[];
}

const AnnoucementCards: React.FC<Props> = (props) => {
  const { list: annoucementList = [] } = props;

  const annoucementCardsRender = (list: Annoucement[]) => {
    if (Array.isArray(list)) {
      return list.map((item) => (
        <AnnoucementCard
          key={item.title}
          day={item.day}
          month={item.month}
          title={item.title}
          href={item.href}
        />
      ));
    }
  };

  return (
    <div className="flex justify-content-center flex-wrap">
      {annoucementCardsRender(annoucementList)}
    </div>
  );
};

export default AnnoucementCards;
