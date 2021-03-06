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
  { name: '校庆日程', href: 'https://wku.edu.cn/10th-anniversary-agenda/', target: '_blank' },
  { name: '十年人物', anchor: 'person' },
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
    date: '2021年11月18日',
    title: '温肯10周年校庆 | 上新！专属限定周边',
    href: 'https://wku.edu.cn/2021/11/18/62134/',
    imgSrc:
      'https://p9.toutiaoimg.com/img/pgc-image/7613824e7b624b4da8bb1323f6a3a5f5~tplv-tt-shrink:640:0.image',
  },
  {
    date: '2021年11月17日',
    title: '温肯10周年校庆｜这份10周年爱心倡议书，请收好',
    href: 'https://wku.edu.cn/2021/11/17/62080/',
    imgSrc:
      'https://p3.toutiaoimg.com/origin/pgc-image/b90b4b9b2e7349e7a8ea9b3383868e3d.png?from=pc',
  },
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
];

export const PERSON_LIST: News[] = [
  {
    date: '2021年11月18日',
    title: '我在温肯这十年⑤ | Jennifer Marquardt：学生促我快速成长，​教学新模式凝聚领导力',
    href: 'https://wku.edu.cn/2021/11/18/62238/',
    imgSrc:
      'https://p9.toutiaoimg.com/origin/pgc-image/e6a1d6e129b843939cd718181fde16fb.png?from=pc',
  },
  {
    date: '2021年11月16日',
    title: '我在温肯这十年④：在这个家里，他们感怀师恩、收获爱情……',
    href: 'https://wku.edu.cn/2021/11/16/62009/',
    imgSrc:
      'https://p9.toutiaoimg.com/origin/pgc-image/7b499b27ac4546cbbac28a295757a7e8.png?from=pc',
    imgPosition: 'right',
  },
  {
    date: '2021年11月16日',
    title: '温肯10周年校庆丨我在温肯这十年③：种下大树种子的人',
    href: 'https://wku.edu.cn/2021/11/16/62001/',
    imgSrc:
      'https://p5.toutiaoimg.com/img/pgc-image/8d9d9562390a452e8ae67dcdb4e794ba~tplv-tt-shrink:640:0.image',
  },
  {
    date: '2021年11月04日',
    title: '温肯10周年校庆｜我在温肯这十年②：十年相伴，他们用技术为学生勾勒未来可能的模样',
    href: 'https://wku.edu.cn/2021/11/04/61636/',
    imgSrc:
      'https://p9.toutiaoimg.com/origin/pgc-image/7ee4105f2fbd403eb5c810d03cfcf152.png?from=pc',
  },
  {
    date: '2021年11月02日',
    title: '温肯10周年校庆｜我在温肯这十年①：探索、创新 十年前，我走进温肯想开阔视野',
    href: 'https://wku.edu.cn/2021/11/02/61531/',
    imgSrc:
      'https://p5.toutiaoimg.com/img/pgc-image/c7631a95d4584ec5b90babc85065240e~tplv-tt-shrink:640:0.image',
  },
  {
    date: '2021年11月18日',
    title: '温肯校友故事系列 | 徐海宁——创业，是一条不断向前的路',
    href: 'https://wku.edu.cn/2021/11/18/62234/',
    imgSrc:
      'https://p26.toutiaoimg.com/origin/pgc-image/0b7459f062fc4f979faee199a2ab275b.png?from=pc',
  },
  {
    date: '2021年11月16日',
    title: '温肯10周年校庆 | 校友故事：林肯——我与温肯的3300天',
    href: 'https://wku.edu.cn/2021/11/16/62005/',
    imgSrc:
      'https://p26.toutiaoimg.com/img/pgc-image/c5904e32a9ec43ce832edea9424018d6~tplv-tt-shrink:640:0.image',
    imgPosition: 'left',
  },
  {
    date: '2021年11月16日',
    title: '10周年校友故事 | 陈风雅——从温肯出发，与世界和自己对话',
    href: 'https://wku.edu.cn/2021/11/16/62033/',
    imgSrc:
      'https://p6.toutiaoimg.com/origin/pgc-image/126c5caa34d74a9880bdcdbbf47bf4cc.png?from=pc',
    imgPosition: 'right',
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
