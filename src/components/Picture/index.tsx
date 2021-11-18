import React from 'react';

import type { PictureProp, SrcSet } from '../../interface';

interface Props extends PictureProp {
  className?: string;
}

const generateSrcSet = (prefix: string, dimensions: number[], postfix: string) => {
  return dimensions
    .map((dimension, index) => `${prefix}_${dimension}.${postfix} ${index + 1}x`)
    .join(', ');
};

const Picture: React.FC<Props> = (props) => {
  const { className, srcPrefix, srcPostfix, srcSets = [], webp, alt } = props;

  const sourcesRender = (srcSetsList: SrcSet[]) => {
    if (Array.isArray(srcSetsList) && srcSetsList.length > 1) {
      return srcSetsList.map((srcSet) => {
        const { dimensions, media } = srcSet;
        return (
          <>
            {webp ? (
              <source
                key={`${media} webp`}
                srcSet={generateSrcSet(srcPrefix, dimensions, 'webp')}
                {...(media ? { media } : {})}
                type="image/webp"
              />
            ) : null}
            <source
              key={`${media}`}
              srcSet={generateSrcSet(srcPrefix, dimensions, srcPostfix)}
              {...(media ? { media } : {})}
            />
          </>
        );
      });
    }
  };

  const allDimensions =
    srcSets.length > 0 ? srcSets.reduce((a, b) => a.concat(b.dimensions), [] as number[]) : [];
  const maxDimension = Math.max(...allDimensions, 0);

  return (
    <picture className={className}>
      {sourcesRender(srcSets)}
      <source srcSet={`${srcPrefix}_${maxDimension}.webp`} type="image/webp" />
      <img src={`${srcPrefix}_${maxDimension}.${srcPostfix}`} alt={alt} />
    </picture>
  );
};

export default Picture;
