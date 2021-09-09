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
          {/* campaign dataLayer */}
          <script>
            {`
              var dataLayer = (window.dataLayer = window.dataLayer || []);
              dataLayer.push({
                gCampaign: "oceans",
                gBasket: "sanctuaries",
              });
            `}
          </script>
          {/* title */}
          <meta
            property="og:title"
            content="守護海洋，攜手成立全球海洋保護區！ - Greenpeace 綠色和平 | 香港"
          />
          {/* description */}
          <meta
            name="description"
            content="海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！"
          />
          <meta
            property="og:description"
            content="海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！"
          />
          {/* meta image */}
          <meta
            property="og:image"
            content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/03/26435735-og-petition.jpeg"
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
      style={{display: 'none'}}
    >
      <input type="hidden" name="numSignupTarget" defaultValue="12345" />
      <input type="hidden" name="numResponses" defaultValue="1234" />

      <input placeholder="FirstName" name="FirstName" type="text" defaultValue="" />
      <input placeholder="LastName" name="LastName" type="text" defaultValue="" />
      <input placeholder="Email" name="Email" type="email" defaultValue="" />
      <input placeholder="MobilePhone" name="MobilePhone" type="tel" defaultValue="" />
      <input placeholder="Birthdate" name="Birthdate" type="text" defaultValue="" />
      <input
        placeholder="MobileCountryCode"
        name="MobileCountryCode"
        type="text"
        defaultValue="852"
      />
      <input placeholder="OptIn" name="OptIn" type="checkbox" defaultValue="" />

      <input type="hidden" name="req" defaultValue="post_data" />
      <input type="hidden" name="LeadSource" defaultValue="Petition - Plastics" />
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
      <input type="hidden" name="CampaignId" defaultValue="7012u000000OxDYAA0" />
      <input type="hidden" name="UtmMedium" defaultValue="" />
      <input type="hidden" name="UtmSource" defaultValue="" />
      <input type="hidden" name="UtmCampaign" defaultValue="" />
      <input type="hidden" name="UtmContent" defaultValue="" />
      <input type="hidden" name="UtmTerm" defaultValue="" />
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
