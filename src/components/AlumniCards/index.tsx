import React from 'react';

import type { Alumni } from '../../interface';
import AlumniCard from '../AlumniCard';

interface Props {
  list?: Alumni[];
}

const AlumniCards: React.FC<Props> = (props) => {
  const { list: alumniList = [] } = props;

  const alumniCardsRender = (list: Alumni[]) => {
    if (Array.isArray(list)) {
      return list.map((item) => (
        <AlumniCard
          key={item.name}
          name={item.name}
          desc={item.desc}
          href={item.href}
          avatarUrl={item.avatarUrl}
        />
      ));
    }
  };

  return (
    <div className="flex justify-content-center flex-wrap">{alumniCardsRender(alumniList)}</div>
  );
};

export default AlumniCards;
