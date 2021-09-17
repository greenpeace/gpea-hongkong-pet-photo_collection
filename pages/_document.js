import Document, { Html, Head, Main, NextScript } from 'next/document'

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='zh'>
        <Head>
          <link
            rel='shortcut icon'
            type='image/png'
            href='https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/gp-favicon.png?v=1550651064000'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/gp-favicon.png?v=1550651064000'
          />
          {/* title */}
          <meta
            property='og:title'
            content='山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港'
          />
          {/* description */}
          <meta
            name='description'
            content='「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。獲選佳作更有機會展出及刊登於綠色和平2022年〈山海大嶼〉年曆中，參加者亦可優先獲得參加大嶼Photo walk（詳情容後公佈）的機會。'
          />
          <meta
            property='og:description'
            content='「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。獲選佳作更有機會展出及刊登於綠色和平2022年〈山海大嶼〉年曆中，參加者亦可優先獲得參加大嶼Photo walk（詳情容後公佈）的機會。'
          />
          {/* meta image */}
          <meta
            property='og:image'
            content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/06/da17973a-20210616_elm_petitionpage_b-02.jpg'
          />
          {/* Load google fonts */}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/** MC_FORM_STARTS  */}
          <form
            method='post'
            action='https://cloud.greenhk.greenpeace.org/websign'
            id='mc-form'
            style={{ display: 'none' }}
          >
            <input type='hidden' name='numSignupTarget' defaultValue='12345' />
            <input type='hidden' name='numResponses' defaultValue='1234' />
            <input
              placeholder='FirstName'
              name='FirstName'
              type='text'
              defaultValue=''
            />
            <input
              placeholder='LastName'
              name='LastName'
              type='text'
              defaultValue=''
            />
            <input
              placeholder='Email'
              name='Email'
              type='email'
              defaultValue=''
            />
            <input
              placeholder='MobilePhone'
              name='MobilePhone'
              type='tel'
              defaultValue=''
            />
            <input
              placeholder='Birthdate'
              name='Birthdate'
              type='text'
              defaultValue=''
            />
            <input
              placeholder='MobileCountryCode'
              name='MobileCountryCode'
              type='text'
              defaultValue='852'
            />
            <input
              placeholder='OptIn'
              name='OptIn'
              type='checkbox'
              defaultValue=''
            />
            <input type='hidden' name='req' defaultValue='post_data' />
            <input
              type='hidden'
              name='LeadSource'
              defaultValue='Petition - Plastics'
            />
            <input
              type='hidden'
              name='Petition_Interested_In_Arctic__c'
              defaultValue='false'
            />
            <input
              type='hidden'
              name='Petition_Interested_In_Climate__c'
              defaultValue='false'
            />
            <input
              type='hidden'
              name='Petition_Interested_In_Forest__c'
              defaultValue='false'
            />
            <input
              type='hidden'
              name='Petition_Interested_In_Health__c'
              defaultValue='false'
            />
            <input
              type='hidden'
              name='Petition_Interested_In_Oceans__c'
              defaultValue='false'
            />
            <input
              type='hidden'
              name='Petition_Interested_In_Plastics__c'
              defaultValue='true'
            />
            <input
              type='hidden'
              name='CampaignId'
              defaultValue='7012u000000P8kwAAC'
            />
            <input type='hidden' name='UtmMedium' defaultValue='' />
            <input type='hidden' name='UtmSource' defaultValue='' />
            <input type='hidden' name='UtmCampaign' defaultValue='' />
            <input type='hidden' name='UtmContent' defaultValue='' />
            <input type='hidden' name='UtmTerm' defaultValue='' />
            <input type='hidden' name='CampaignData1__c' defaultValue='' />
            <input type='hidden' name='CampaignData2__c' defaultValue='' />
            <input type='hidden' name='CampaignData3__c' defaultValue='' />
            <input type='hidden' name='CampaignData4__c' defaultValue='' />
            <input type='hidden' name='CampaignData5__c' defaultValue='' />
          </form>
          {/** MC_FORM_ENDS  */}
        </body>
      </Html>
    )
  }
}

export default NextDocument
