import Document, { Html, Head, Main, NextScript } from 'next/document';

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh">
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/gp-favicon.png?v=1550651064000"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/gp-favicon.png?v=1550651064000"
          />
          {/* title */}
          <meta
            property="og:title"
            content="「無塑海港」重用杯創意設計比賽 - Greenpeace 綠色和平 | 香港"
          />
          {/* description */}
          <meta
            name="description"
            content="「無塑海港」重用杯創意設計比賽，號召愛環保、愛香港的你，以繪畫推廣「重用杯借還系統」和全城走塑理念。得獎設計會製作成實體重用杯送贈得獎者並作展覧及綠色和平項目宣傳用途。守護環境需要結合眾人之力，向世界展示你我的「無塑」願景，動員小朋友、大朋友守護屬於我們的海港。期待你的參與，將創意設計轉化成推動「減塑」的力量。"
          />
          <meta
            property="og:description"
            content="「無塑海港」重用杯創意設計比賽，號召愛環保、愛香港的你，以繪畫推廣「重用杯借還系統」和全城走塑理念。得獎設計會製作成實體重用杯送贈得獎者並作展覧及綠色和平項目宣傳用途。守護環境需要結合眾人之力，向世界展示你我的「無塑」願景，動員小朋友、大朋友守護屬於我們的海港。期待你的參與，將創意設計轉化成推動「減塑」的力量。"
          />
          {/* meta image */}
          <meta
            property="og:image"
            content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/8fc53baa-photo-album-preview2.jpg"
          />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/** MC_FORM_STARTS  */}
          <form
            method="post"
            action="https://cloud.greenhk.greenpeace.org/websign"
            id="mc-form"
            style={{ display: 'none' }}
          >
            <input type="hidden" name="numSignupTarget" defaultValue="12345" />
            <input type="hidden" name="numResponses" defaultValue="1234" />
            <input
              placeholder="FirstName"
              name="FirstName"
              type="text"
              defaultValue=""
            />
            <input
              placeholder="LastName"
              name="LastName"
              type="text"
              defaultValue=""
            />
            <input
              placeholder="Email"
              name="Email"
              type="email"
              defaultValue=""
            />
            <input
              placeholder="MobilePhone"
              name="MobilePhone"
              type="tel"
              defaultValue=""
            />
            <input
              placeholder="Birthdate"
              name="Birthdate"
              type="text"
              defaultValue=""
            />
            <input
              placeholder="MobileCountryCode"
              name="MobileCountryCode"
              type="text"
              defaultValue="852"
            />
            <input
              placeholder="OptIn"
              name="OptIn"
              type="checkbox"
              defaultValue=""
            />
            <input type="hidden" name="req" defaultValue="post_data" />
            <input
              type="hidden"
              name="LeadSource"
              defaultValue="Petition - Plastics"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Arctic__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Climate__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Forest__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Health__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Oceans__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Plastics__c"
              defaultValue="true"
            />
            <input
              type="hidden"
              name="CampaignId"
              defaultValue="7012u000000P8kwAAC"
            />
            <input
              type="hidden"
              name="UtmMedium"
              id="UtmMedium"
              defaultValue=""
            />
            <input
              type="hidden"
              name="UtmSource"
              id="UtmSource"
              defaultValue=""
            />
            <input
              type="hidden"
              name="UtmCampaign"
              id="UtmCampaign"
              defaultValue=""
            />
            <input
              type="hidden"
              name="UtmContent"
              id="UtmContent"
              defaultValue=""
            />
            <input type="hidden" name="UtmTerm" id="UtmTerm" defaultValue="" />
            <input type="hidden" name="CampaignData1__c" defaultValue="" />
            <input type="hidden" name="CampaignData2__c" defaultValue="" />
            <input type="hidden" name="CampaignData3__c" defaultValue="" />
            <input type="hidden" name="CampaignData4__c" defaultValue="" />
            <input type="hidden" name="CampaignData5__c" defaultValue="" />
          </form>
          {/** MC_FORM_ENDS  */}
        </body>
      </Html>
    );
  }
}

export default NextDocument;
