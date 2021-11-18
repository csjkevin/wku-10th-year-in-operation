import type { Alumni, Annoucement, News, PictureProp, SrcSet } from './interface';

const HEAD_PICTURE_SRC_SETS: SrcSet[] = [
  { dimensions: [2160] },
  { dimensions: [1080, 2160], media: '(max-height: 1080px)' },
  { dimensions: [720, 1440, 2160], media: '(max-height: 720px)' },
  { dimensions: [480, 960, 1440], media: '(max-height: 480px)' },
];

export const HEAD_PICTURES: PictureProp[] = [
  { srcPrefix: '/images/campus/1', srcPostfix: 'jpg', srcSets: HEAD_PICTURE_SRC_SETS, webp: true },
  { srcPrefix: '/images/campus/2', srcPostfix: 'jpg', srcSets: HEAD_PICTURE_SRC_SETS, webp: true },
  { srcPrefix: '/images/campus/02', srcPostfix: 'jpg', srcSets: HEAD_PICTURE_SRC_SETS, webp: true },
];

export const NAV_ITEMS = [
  { name: '校庆公告', anchor: 'annoucement' },
  { name: '校庆新闻', anchor: 'news' },
  { name: '校友故事', anchor: 'alumni' },
  { name: '校友捐赠', href: 'https://wku.edu.cn/jgsz/jjh/jzfs/', target: '_blank' },
  { name: '影像温肯', anchor: 'gallery' },
];

export const ANNOUCEMENT_LIST: Annoucement[] = [
  {
    month: '十月',
    day: '29',
    title: '温州肯恩大学10周年校庆公告（第二号）',
    href: 'https://wku.edu.cn/2021/10/29/61301/',
  },
  {
    month: '九月',
    day: '15',
    title: '温肯10周年校庆 | 宣传语、老照片…创意征集，快来吧！',
    href: 'https://wku.edu.cn/2021/09/15/60025/',
  },
  {
    month: '九月',
    day: '2',
    title: '温州肯恩大学10周年校庆公告（第一号）',
    href: 'https://wku.edu.cn/2021/09/02/59518/',
  },
  {
    month: '六月',
    day: '13',
    title: '温州肯恩大学办学十周年校庆系列活动正式启动',
    href: 'https://wku.edu.cn/2021/06/13/58207/',
  },
];

export const NEWS_LIST: News[] = [
  {
    date: '2021年11月10日',
    title: '一览温肯十年，我们用跑的 | “十年之路”温肯校园跑校庆活动圆满落幕',
    href: 'https://wku.edu.cn/2021/11/10/61836/',
    imgSrc:
      'https://p3.toutiaoimg.com/img/pgc-image/b203cc01925e412d909d4fb62018d4e8~tplv-tt-shrink:640:0.image',
  },
  {
    date: '2021年11月03日',
    title: '温肯10周年校庆｜校庆新晋打卡点！快来看看有谁霸屏了朋友圈',
    href: 'https://wku.edu.cn/2021/11/03/61602/',
    imgSrc:
      'https://p3.toutiaoimg.com/origin/pgc-image/9fa529d1b839469b87ac2c9ef316550f.png?from=pc',
  },
  {
    date: '2021年11月01日',
    title: '温肯10周年校庆丨绿色发展论坛重磅来袭，这张表GET到你了吗？',
    href: 'https://wku.edu.cn/2021/11/01/61473/',
    imgSrc:
      'https://p5.toutiaoimg.com/origin/pgc-image/4011acdf375e42849aabfb83236a9c92.png?from=pc',
  },
  {
    date: '2021年10月26日',
    title: '温肯10周年校庆｜WKU题库强势来袭，挑战温肯“最强大脑”！',
    href: 'https://wku.edu.cn/2021/10/26/61198/',
    imgSrc:
      'https://p6.toutiaoimg.com/img/pgc-image/926e8bbf66da4d5cbc068cb8ee2edb27~tplv-tt-shrink:640:0.image',
  },
];

export const ALUMNI_LIST: Alumni[] = [
  {
    name: '夏雪',
    desc: '记录美国穆斯林游行、调查跨国代孕……APEC女孩的“新闻梦”',
    href: 'https://wku.edu.cn/2019/04/28/38042/',
    avatarUrl: '/images/alumni/xue-xia.jpeg',
  },
  {
    name: '郑大为',
    desc: '从Ted x到甲骨文，天生敢为，从不止步',
    href: 'https://wku.edu.cn/2019/10/18/44041/',
    avatarUrl: '/images/alumni/dawei-zheng.jpeg',
  },
  {
    name: '吴程程',
    desc: '从4A广告公司到Airbnb中国区TOP200民宿房东，这位校友小姐姐，好帅气！',
    href: 'https://wku.edu.cn/2019/12/17/45368/',
    avatarUrl: '/images/alumni/chengcheng-wu.jpg',
  },
  {
    name: '何奕韬',
    desc: '赴美读研，入职华为，“目标”是成功的最大动力！',
    href: 'https://wku.edu.cn/2019/10/18/44033/',
    avatarUrl: '/images/alumni/yitao-he.jpg',
  },
  {
    name: '朱经纬 & 顾婷婷',
    desc: '温肯校友情侣毕业3年修成正果，这是他们的故事……',
    href: 'https://wku.edu.cn/2019/06/17/40737/',
    avatarUrl: '/images/alumni/jingwei-zhu-and-tingting-gu.jpg',
  },
  {
    name: '叶伟力',
    desc: '英语系唯一男生，毕业关头，他做出了那一届唯一的选择……',
    href: 'https://wku.edu.cn/2019/01/02/33631/',
    avatarUrl: '/images/alumni/weili-ye.jpg',
  },
];

const GALLERY_IMAGE_SRC_SETS: SrcSet[] = [
  { dimensions: [213, 427, 640], media: '(max-width: 640px)' },
  { dimensions: [427, 853, 1280], media: '(max-width: 1280px)' },
  { dimensions: [640, 1280], media: '(max-width: 1920px)' },
  { dimensions: [1280] },
];

export const GALLERY_IMAGES: PictureProp[] = [
  { srcPrefix: '/images/campus/1', srcPostfix: 'jpg', srcSets: GALLERY_IMAGE_SRC_SETS, webp: true },
  { srcPrefix: '/images/campus/2', srcPostfix: 'jpg', srcSets: GALLERY_IMAGE_SRC_SETS, webp: true },
  {
    srcPrefix: '/images/campus/02',
    srcPostfix: 'jpg',
    srcSets: GALLERY_IMAGE_SRC_SETS,
    webp: true,
  },
  {
    srcPrefix: '/images/campus/03',
    srcPostfix: 'jpg',
    srcSets: GALLERY_IMAGE_SRC_SETS,
    webp: true,
  },
  {
    srcPrefix: '/images/campus/09',
    srcPostfix: 'jpg',
    srcSets: GALLERY_IMAGE_SRC_SETS,
    webp: true,
  },
  {
    srcPrefix: '/images/campus/638A5946',
    srcPostfix: 'jpg',
    srcSets: GALLERY_IMAGE_SRC_SETS,
    webp: true,
  },
  {
    srcPrefix: '/images/campus/638A5994',
    srcPostfix: 'jpg',
    srcSets: GALLERY_IMAGE_SRC_SETS,
    webp: true,
  },
];
