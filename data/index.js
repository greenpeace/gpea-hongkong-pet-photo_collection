import gloria from '../assets/images/gloria.png';

import mandyCat from '../assets/images/mandyCat-avatar.png';
import leanneTam from '../assets/images/leanneTam_avatar.jpeg';
import brianKan from '../assets/images/brianKan_avatar.jpeg';

import date1 from '../assets/images/event_launch.png';
import date2 from '../assets/images/deadline.png';
import date3 from '../assets/images/announce_date.png';
import date4 from '../assets/images/event_date.png';

const demo =
  'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/fdc48d59-gp0stupjr_high_res.jpg';

const data = {
  judges: [
    {
      id: 'mandcat',
      avatar: mandyCat,
      pic: 'https://via.placeholder.com/800x800.png',
      name: '文地貓 Mandycat',
      designation: '著名插畫家',
      profile:
        '文地貓為香港著名資深插畫家，於2000年開始，文地貓亦先後替多本雜誌及多個網站寫寫畫畫，包括東方新地more、新假期、Esdlife.com(生活易)、明報學生版、Metropop及Yahoo等。亦有推出個人繪本故事。愛貓的她以貓貓和自己作為插畫主角，其刊出之作品多以打工心情和生活感受為主及分享生活雜記。',
      ig: 'https://www.instagram.com/mandycats/',
      fb: 'https://www.facebook.com/mandycats',
    },
    {
      id: 'kol',
      avatar: gloria,
      pic: 'https://via.placeholder.com/800x800.png',
      name: '葉蘊儀 Gloria Yip',
      designation: '多媒體藝術家',
      profile:
        '葉蘊儀，演員、多媒體藝術家、澳洲墨爾本理工大學純藝術碩士，多以陶瓷、紅繩、粘土及布料為媒介進行創作，擅長裝置藝術及繪畫等。藝術作品曾多次於海內外展出並屢獲殊榮，包括入圍2014年意大利威尼斯Arte Laguna Prize裝置藝術媒介組別的裝置藝術作品《家書》（Home Poem）。<br/><br/>葉蘊儀身體力行推動環保，擅長以環保物料進行藝術創作，並推出環保手工課程，鼓勵小朋友以家中信手拈來的物料創作美觀又實用的擺設及用具，從小養成環保生活習慣。',
      ig: 'https://www.instagram.com/gloriayipwanyee/',
      fb: '',
    },
    {
      id: 'leannetam',
      avatar: leanneTam,
      pic: 'https://via.placeholder.com/800x800.png',
      name: '譚穎琳 Leanne Tam',
      designation: '綠色和平減塑項目主任',
      profile:
        '走塑項目主任譚穎琳（Leanne）在綠色和平工作數年間，積極推行「全城走塑」項目，除了把握政府政策窗口發聲，Leanne 曾帶領團隊舉行多個不同形式的大型社區活動，促進社區走塑風潮；過往成功招募超過 1,100 間走塑店鋪，又推出重用餐具社區實驗活動，最近更夥拍初創公司開創智能借杯手機 App！',
      ig: 'https://www.instagram.com/greenpeace_hk/',
      fb: 'https://www.facebook.com/greenpeacehk',
    },
    {
      id: 'briankan',
      avatar: brianKan,
      pic: 'https://via.placeholder.com/800x800.png',
      name: '簡鏡倫 Brian Kan',
      designation: '環保繪本小畫家',
      profile:
        '香港環保少年簡鏡倫（Brian）曾在他 7 歲時以繪畫為海洋動物請命，不僅積極宣傳、募款，更將繪本收入捐助支持綠色和平，以行動守護環境！<br/><br/>現時 13 歲的 Brian，正為最新的作品努力著，他依然熱衷於畫畫，更進一步學習素描、油畫和國畫。他的畫作中，有一部分是與環境議題有關，像是污染、保育野生動物。',
      ig: '',
      fb: 'https://www.facebook.com/briankl.kan',
    },
  ],
  rules: {
    timelineHeadline: '重要日子',
    timelines: [
      {
        date: '2021年9月20日',
        pic: date1,
        details: '作品開放遞交',
      },
      {
        date: '2021年10月31日',
        pic: date2,
        details: '作品截止遞交',
      },
      {
        date: '2021年11月中旬',
        pic: date3,
        details: '比賽結果公佈',
      },
      {
        date: '2021年11月下旬',
        pic: date4,
        details: '比賽頒獎禮及「無塑海港」展覽',
      },
    ],
    uploadHeadline: '相片上載',
    uploads: [
      '所有參加者必須確保作品質素符合比賽規則的標準。',
      '所有參加者只限最多上載每組別5張的作品（總共10張）。',
    ],
    groupHeadline: '參賽組別',
    groups: [
      {
        name: '大嶼風景',
        details:
          '捕捉大嶼景觀，分享今昔的變遷與光影，反映大嶼獨有的風土人情與自然美態。',
      },
      {
        name: '大嶼生態',
        details:
          '大嶼山蘊含豐富生物多樣性，透過頃刻快門，把生物富有生命力的一瞬拍下，讓公眾增加對野生生物的認識及對「堅守大嶼」的關注。',
      },
    ],
    formatHeadline: '作品格式',
    formats: [
      '作品必須為數位檔案，拍攝器材不限，亦接受負片、幻燈片、沖印相片之數位掃描檔。',
      '作品檔案大小必須在20MB以下。',
      '作品須為JPEG或JPG格式。',
      '水平相片至少1,600個像素寬，垂直相片至少1,600個像素高。',
    ],
    criteriaHeadline: '評審準則',
    criterias: [
      '本次攝影比賽會依據下列之標準，從每個組別之全體有效參賽作品中選出優勝作品：',
      '1. 意念、主題（40%）',
      '2. 攝影技巧、藝術感、構圖（30%）',
      '3. 創意（30%）',
      '本攝影比賽優勝作品將於2021年11月選出，並以電子郵件通知。各評審的評審結果為最終決定。',
    ],
    specificationHeadline: '作品規範',
    specifications: [
      '參賽作品不得含有任何具猥褻、挑釁、毀謗、情色、暴力、種族歧視性或其他任何引人厭惡或不合宜之內容，主辦單位得自行判斷並排除該作品之參賽資格。',
      '參賽作品須附完整標題，能充分傳達拍攝照片時之情境。參加者若偽造或誤導照片內容之來源，將會喪失參賽資格。',
      '參賽者僅能對其作品進行少量色彩加深（burning）、色彩加亮（dodging）、或色彩校正（color correction）等修改，適度裁切亦在可接受範圍。',
      '生態攝影參賽作品嚴禁擺拍、誘拍及籠養 / 被困主題。',
      '主辦單位不接受含有任何浮水印的參賽作品。',
      '主辦單位保留一切檢驗原始作品／來源素材以確認其符合參賽規則的權利。',
      '主辦單位保留解釋、修改及補充本參賽辦法、細則及獎項說明內容之權利。',
      '參賽者呈交相片時，即同意授予主辦單位不可撤銷之權利，即對參賽作品進行複製、傳播、展示、及於現今或未來之任何媒體上製作衍生物，其包含但不僅限於：公開展示獲獎者之作品或作慈善銷售；出版機構月曆及其他紀念物品；於主辦單位網站刊載參賽或得獎作品。主辦單位以前述方式使用該作品及相關之文字敘述時，將不需再付出額外代價與徵求額外之同意。',
      '於參賽之時，參賽者即同意下列條款：（a）遵從正式規定；（b）評審在與本比賽相關事務上之決定為最終且具約束效力；（c）若參賽者獲得獎項，主辦單位有權使用其照片、姓名、代表肖像、與／或聲音於任何與本比賽相關之公開或推銷場合，或未來相關之推廣活動，不需另行支付代價或取得同意（除非為法律所禁止）。',
      '主辦單位保留驗證任何參賽作品之有效性與原創性，並取消任何未遵守正式規定或以非正當手段干預賽程之參賽者資格。主辦單位未能及時於比賽途中執行此權利，不等同放棄行使該權利。',
      '凡參賽者即視為同意本比賽各項規定，如有未盡事宜，主辦單位可隨時補充說明或變更。若因任何理由而無法進行本活動，主辦單位有權決定終止、變更或暫停本活動，並保留活動修改正式規定內容之權利。',
    ],
    dateHeadline: '徵件日期',
    date: '由即日起至10月31日23:59:59止。',
    prizeHeadline: '獎項及獎品',
    prizes: [
      '捕捉大嶼獨有光景，立即上載你的作品，贏取參與「與大師同攝」延伸活動的機會，各組別優勝作品將有機會刊登於綠色和平2022年〈山海大嶼〉年曆，並於綠色和平網上平台發佈，與香港20萬讀者分享。',
      '- 專業大獎（每組1名）',
      '- 佳作獎（每組3名）',
      '- 入圍獎（每組5名）',
    ],
    prizeList: [
      {
        headline: '專業大獎（每組1名）',
        items: [
          '大嶼山片藍造工房藍染體驗工作坊一節（價值$780）',
          '藍染和尚袋一個（價值$440）',
          '「堅守大嶼」旗幟一面',
          '綠色和平2022年〈山海大嶼〉年曆',
          '優先參與「與大師同攝」延伸活動的資格',
        ],
      },
      {
        headline: '佳作獎（每組2名）',
        items: [
          '「堅守大嶼」旗幟一面',
          '綠色和平2022年〈山海大嶼〉年曆',
          '優先參與「與大師同攝」延伸活動的資格',
        ],
      },
      {
        headline: '入圍獎（每組5名）',
        items: [
          '綠色和平2022年〈山海大嶼〉年曆一個',
          '優先參與「與大師同攝」延伸活動的資格',
        ],
      },
    ],
  },
  photowalk: {
    itemHeadline: '注意事項',
    items: [
      '請穿著適合戶外活動的衣物及行山鞋、做好防曬措施，並帶備食水，盡量避免使用即棄樽裝水。',
      '請做好個人防蚊措施，如穿著寬鬆淺色長袖衫褲，並塗上驅蚊用品。',
      '可帶備個人拍攝器材（如相機、腳架、收音咪等），參加者可在戶外環節，由導師從旁指導進行拍攝。',
      '參加者需填妥健康申報表。',
      '參加者需進行體溫檢測及需全程配戴口罩。',
    ],
    tcHeadline: '條款及細則',
    tcs: [
      '參加者需自攜相機及記憶咭上課。',
      '如香港天文台於活動開始前3 小時之內發出3號或以上颱風信號或黃色/紅色/黑色暴雨警告，本活動將會取消及再作安排。',
      '主辦單位保留因惡劣天氣，突發事故或人數不足而取消或調動活動的權利，參加者將獲另行通知。',
      '如於活動上作出破壞性、妨礙活動進行、或損害其他參加者利益的行為，主辦單位有權立即取消該名學員的參加資格。',
      '主辦單位保留對活動細則作出任何更改之最終決定權。',
    ],
  },
  thankyouMessage: {
    headLine: '感謝您的參與！',
    zeroLine:
      '「山海大嶼」攝影比賽2021參加者可優先獲得參加「與大師同攝」延伸活動的資格，活動詳情及優先報名表將於11月中以電郵通知。',
    firstLine: '您願意進一步行動，捐款支持綠色和平更多環境項目嗎？',
    SecondLine:
      '守護大嶼！我們需要您的支持為環境堅持努力。綠色和平不接受政府、企業捐款，請立刻加入我們的1%會員計畫，以您的1%收入，支持我們的100%財政獨立。',
  },
};

export default data;
