export interface SrcSet {
  dimensions: number[];
  media?: string;
}

export interface PictureProp {
  srcPrefix: string;
  srcPostfix: 'jpg' | 'png';
  srcSets: SrcSet[];
  webp?: boolean;
  alt?: string;
}

export interface NavItem {
  name?: string;
  href?: string;
  target?: string;
  anchor?: string;
}

export interface Annoucement {
  day?: string;
  month?: string;
  title?: string;
  href?: string;
}

export interface News {
  date?: string;
  title?: string;
  href?: string;
  imgSrc?: string;
}

export interface Alumni {
  name?: string;
  desc?: string;
  href?: string;
  avatarUrl?: string;
}
