import { withPrefix } from 'gatsby';
import React from 'react';

import * as styles from './index.module.css';

const Message: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.leaders}>
      <div>
        <img src={withPrefix('/images/leaders/wangbeijiao.jpg')} />
        <p>温州肯恩大学理事会理事长、党委书记 王北铰</p>
      </div>
      <div>
        <img src={withPrefix('/images/leaders/wangli.jpg')} />
        <p>温州肯恩大学校长、俄罗斯工程院外籍院士 王立</p>
      </div>
    </div>
    <p>
      自2006年合作签约、2011年获批筹建，栉风沐雨，风雨同舟，温州肯恩大学已走过十年办学历程。十年奋进、逐梦前行；一路风景，感恩有您。值此办学十周年之际，谨向海内外社会各界长期以来关心、支持学校建设与发展的朋友致以最衷心的感谢！
    </p>
    <p>
      回瞻过往，我们披荆斩棘、携手同行。我们集国家政策、地方发展和人才集聚的天时地利人和，中美两校跨洋合作、社会各界关心支持，充分发扬“创业、创新、创造、创优、创融、创强”精神，凝练办学特色、明晰办学思路、提升办学品质。十年间，温州肯恩大学从最初仅有208名本科新生，到现有3500多名本硕博在校生，从成立伊始仅开设3个本科专业，到如今拥有20个本科专业、获批11个硕博专业，从一开始借用教室、宿舍和办公楼，到现如今建成投用约20万平方米建筑与设施，在国际化、高水平发展道路上留下了奋斗的足迹，收获了成功的喜悦。
    </p>
    <p>
      展望未来，我们任重道远、初心不改。我们共同绘就规模化、可持续发展的壮丽画卷，我们齐手谱写高等教育对外开放的华美篇章。下一个十年，让我们继续乘风逐梦，加快建设成为国际化、高水平大学，筑牢中美教育与人文交流的桥梁，打造省市改革开放的重要阵地窗口，奋力争当中美合作办学的“领头雁”，耕耘国际人才培养的广阔新天地，迎接中美合作办学更美好、更久远的明天！
    </p>
    <p className="text-align-right">
      温州肯恩大学理事会理事长、党委书记 王北铰
      <br />
      温州肯恩大学校长、俄罗斯工程院外籍院士 王立
      <br />
      2021年10月
    </p>
  </div>
);

export default Message;
