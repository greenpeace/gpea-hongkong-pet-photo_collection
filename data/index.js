import shing from '../assets/images/shing-avatar.png'
import sion from '../assets/images/sion-avatar.png'
import daphne from '../assets/images/daphne-avatar.png'
import tugo from '../assets/images/tugo-avatar.png'

import date1 from '../assets/images/79.png'
import date2 from '../assets/images/80.png'
import date3 from '../assets/images/81.png'
import date4 from '../assets/images/82.png'

const demo =
  'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/fdc48d59-gp0stupjr_high_res.jpg'

const data = {
  judges: [
    {
      id: 'tugocheng',
      avatar: tugo,
      pic: 'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/d602f416-tugo-avatar.png',
      name: '鄭振揚 Tugo Cheng',
      designation: '風景攝影師',
      profile:
        '鄭振揚（Tugo），本地建築師和藝術攝影師，作品屢奪國際殊榮，2017年獲選為「Perspective亞太區40位年輕藝術家」之一。受其建築學背景影響，他的作品構圖特別著重線條和韻律，曾於香港和世界各地展出，並被CNN、BBC、SCMP、Guardian和Wallpaper * 等刊載，國家地理雜誌更以其相片作封面。鄭曾擔任Canon Photo Marathon、會德豐攝影大賽和不同專業學會比賽的評審。',
      ig: 'tcycheng',
      fb: 'TUGO CHENG Photography',
    },
    {
      id: 'shing',
      avatar: shing,
      pic: 'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/3d57c8bf-shing-avatar.png',
      name: '馮漢城 Fung Hon Shing',
      designation: '生態攝影師及紀錄片製作人',
      profile:
        '馮漢城（城），畢業於香港中文大學生物系，從中學時期開始觀鳥，積極走到香港各處山野，發現大自然處處驚喜。畢業後投身生態攝影及生態紀錄片製作，為不同機構製作影片，記錄本地野生生態，推廣生物多樣性及環境教育 。擔任香港電台本地生態紀錄片節目《大自然大不同》第二季的單元編導、攝影、剪接。也會為機構及學校舉辦野外生態導賞、工作坊等活動。',
      ig: 'fhs.f',
      fb: 'FHS Wildlife',
    },
    {
      id: 'daphnewong',
      avatar: daphne,
      pic: 'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/6f962855-daphne-avatar.png',
      name: '黃遂心 Daphne Wong',
      designation: '生態攝影師及紀錄片製作人',
      profile:
        '黃遂心（Daphne），生態攝影師及生態紀錄片製作人，致力拍出寫實而精彩的生態故事。大學時就讀海洋與自然歷史攝影，畢業作品《白海豚失樂園》紀錄中華白海豚在香港水域的生存狀況，探討保護香港獨特自然生態的重要性，此片獲美國 WorldFest Houston International Film Festival「海洋學/海洋生物學」紀錄片金奬及入圍美國 Jackson Wild Media Awards 特別評審團：外語片。回港後繼續執拍本地生態紀錄片，包括香港電台《大自然大不同》系列節目。',
      ig: 'daphnewongphoto',
      fb: 'Daphne Wong - Photographer & Filmmaker',
    },
    {
      id: 'sionchan',
      avatar: sion,
      pic: 'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/4f6f4ae1-sion-avatar.png',
      name: '陳可淳 Chan Hall Sion',
      designation: '綠色和平守護大嶼項目主任',
      profile:
        '陳可淳（阿淳）一直關注公民社會，參與過的議題包括社區營造、公平貿易及塑膠污染等，目前是綠色和平守護大嶼的項目主任。無論是因工作需要到戶外考察，還是在工餘享受戶外風光，都經常到訪不同部份的香港郊野。希望更多香港人，可以加入我們一起守護大嶼，堅守香港。',
      ig: '綠色和平Greenpeace Hong Kong',
      fb: 'Greenpeace 綠色和平 - 香港',
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
        details: '「與大師同攝」延伸活動',
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
}

export default data
