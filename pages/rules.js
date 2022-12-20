import React from 'react';
import Head from 'next/head';
import Wrapper from 'components/site/wrapper';
import {
  Box,
  Center,
  Divider,
  List,
  OrderedList,
  ListItem,
  UnorderedList,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Image,
} from '@chakra-ui/react';

import PageContainer from '@/components/site/container/pageContainer';
import ContentContainer from '@/components/site/container/contentContainer';
import TopBanner from '@/components/site/banner/banner';
import UploadButton from '@/components/site/button/uploadButton';

import GroupTable from '@/components/rules/group';
import RewardsTable from '@/components/rules/rewards';

import data from '../data';

const RuleHeadline = ({ children }) => {
  return (
    <Text fontWeight={700} color={'brand.500'} fontSize={'2xl'} mb={4}>
      {children}
    </Text>
  );
};

export default function Index() {
  return (
    <>
      <Head>
          <title>
            比賽詳情 - 「無塑海港」重用杯創意設計比賽 - Greenpeace 綠色和平 |
            香港
          </title>
          <meta
          name="description"
          content="發揮創意，繪製「無塑海港」，立即上載你的作品，贏取豐富獎品並優先參與「無塑海港」展覽。各組別優勝作品將印刷成實物，成為你獨一無二的專屬重用杯，並於綠色和平「無塑海港」展覽展出及用作推廣綠色和平項目之用途，讓公眾進一步了解重用系統的概念及願景。"
        />
        </Head>
      <TopBanner
        src={
          'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/87ea4a0b-gp1sular_high_res.jpg'
        }
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>比賽詳情</Heading>
        <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          發揮創意，繪製「無塑海港」，立即上載你的作品，贏取豐富獎品並優先參與「無塑海港」展覽。各組別優勝作品將印刷成實物，成為你獨一無二的專屬重用杯，並於綠色和平「無塑海港」展覽展出及用作推廣綠色和平項目之用途，讓公眾進一步了解重用系統的概念及願景。
        </Text>
        <Box d={'none'} py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton />
        </Box>
      </TopBanner>
      <PageContainer>
        <ContentContainer>
          <RuleHeadline>{data.rules.timelineHeadline}</RuleHeadline>
          <Wrap py={4} spacing={6}>
            {data.rules.timelines.map((c, i) => (
              <WrapItem
                key={i}
                w={{ base: '38%', md: '20%' }}
                maxWidth={'180px'}
              >
                <Stack spacing={4} alignItems={'center'}>
                  <Image src={c.pic} alt={c.details} />
                  <Text fontSize={'sm'}>{c.details}</Text>
                </Stack>
              </WrapItem>
            ))}
          </Wrap>

          <Divider my={4} />

          <RuleHeadline>主題方向</RuleHeadline>
          <Box>
            <Text fontSize={'sm'} mb={2}>
              「全城走塑，重用代替即棄，保護美麗海港」
            </Text>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>
                  設計主題需圍繞「全城走塑，重用代替即棄，保護美麗海港」為方向，為綠色和平的重用杯繪製一幅宣揚環保的圖案設計，與我們一起推廣「重用杯借還系統」和全城走塑理念。
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  重用杯設計檔將會於報名後以電郵方式提供給參加者，參加者需把參賽設計以手繪或電腦繪圖畫在重用杯設計檔上，並於作品上載網站（公開組）/
                  設計檔後頁（學校團體組）<b>寫上 100 字內的創作意念</b>
                </Text>
              </ListItem>
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>參賽資格</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>綠色和平每月捐款人及公眾人士</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  分為小學組及中學組，學校可以以學校名義報名，參加後該校不限參加人數
                </Text>
              </ListItem>
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>參賽組別</RuleHeadline>

          <GroupTable />

          <Text fontSize={'md'} fontWeight="bold">
            捐款參加費及豐富禮品
          </Text>

          <UnorderedList spacing={2} pl={2}>
            <ListItem>
              <Text fontSize={'sm'}>
                所有參加者成功上載參賽作品後，均可得到電子參賽證書乙張
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={'sm'}>
                $100 以上捐款參加費用可作慈善捐款扣稅用途
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={'sm'}>
                所有禮品先到先得，送完即止。禮品領取詳情將於電郵通知。
              </Text>
            </ListItem>
          </UnorderedList>

          <Divider my={4} />

          <RuleHeadline>參賽流程：</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>
                  填妥網上報名表格並成功繳付報名費。
                  <br />
                  *以支票報名只適用於學校組別
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={'sm'}>
                  成功報名後將會收到電郵通知，內容包括：
                </Text>
                <UnorderedList spacing={2}>
                  <ListItem>
                    <Text fontSize={'sm'}>
                      公開組：重用杯設計檔、作品上載專屬連結；
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize={'sm'}>
                      學校組別：重用杯設計檔、作品遞交需知、「減塑知識王」教材包；
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize={'sm'}>有關索取禮品安排（如適用）</Text>
                  </ListItem>
                </UnorderedList>
              </ListItem>

              <ListItem>
                <Text fontSize={'sm'}>
                  請於截止日期 2023 年 2 月 12 日 晚上 11 時 59 分前遞交參賽作品
                  <br />
                  *學校組別遞交日期以信封上郵戳所示日期為準
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={'sm'}>成功遞交作品後將收到電郵通知。</Text>
              </ListItem>

              <ListItem>
                <Text fontSize={'sm'}>
                  有關賽果將於 2023 年 3 月 3
                  日公佈，詳情可留意綠色和平社交平台（
                  <a
                    href="https://www.facebook.com/greenpeacehk/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <u>Facebook</u>
                  </a>{' '}
                  /{' '}
                  <a
                    href="https://www.instagram.com/greenpeace_hk/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <u>Instagram</u>
                  </a>
                  ），得獎者會以電郵或電話另行通知，敬請留意。
                </Text>
              </ListItem>
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>作品格式</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>
                  檔案名稱要求： 報名英文姓名及電話號碼（例如：Lam Tai
                  Man_51234567）
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>圖片像素：300dpi 或以上</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>檔案格式：JPG 及 PDF</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>檔案大小：JPG 及 PDF（10MB 或以下）</Text>
              </ListItem>
            </OrderedList>

            <Text fontSize={'sm'} my={2}>
              請代表老師將參賽學生中英文姓名以 excel 或 word 檔電郵至{' '}
              <a href="mailto:event.hk@greenpeace.org">
                <u>event.hk@greenpeace.org</u>
              </a>
              ，並將已清楚填上學生姓名及創作意念的作品以郵寄形式（有足夠郵資），寄付至：香港九龍新蒲崗太子道東
              698 號寶光商業中心 10 樓
              綠色和平辦公室（請註明：「無塑海港」重用杯創意設計比賽），成功遞交後將收到確認電郵。
            </Text>
          </Box>

          <Divider my={4} />

          <RuleHeadline>評審準則</RuleHeadline>
          <Box>
            <Text fontSize={'sm'} mb={2}>
              本次設計比賽會依據下列之標準，從每個組別之全體有效參賽作品中選出優勝作品：
            </Text>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>繪畫/著色技巧 20%</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>內容創意性 40%</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>切合主題 40%</Text>
              </ListItem>
            </OrderedList>
            <Text fontSize={'sm'} my={2}>
              本設計比賽優勝作品將於 2023 年 3月選出，並以電子郵件通知。各評審的評審結果為最終決定。
            </Text>
          </Box>

          <Divider my={4} />
          <RuleHeadline>獎項及獎品</RuleHeadline>

          <RewardsTable/>

          {/* <Box>
            <Text fontSize={'sm'} mb={2}>
              冠軍、亞軍、季軍及優異獎各一名，共 4 個獎項，得獎者可獲得
            </Text>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>實體及電子證書各乙張；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  現金書券乙份（冠軍$800、亞軍$500、季軍$300、優異$200）；
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>得獎設計實體杯乙個；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>Slowood 精美環保禮品乙份</Text>
              </ListItem>
            </OrderedList>
          </Box>

          <Box my={4}>
            <Text fontSize={'sm'} mb={2}>
              各組別均設有冠軍、亞軍、季軍及優異獎各一名，共 8
              個獎項，得獎者可獲得：
            </Text>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>實體及電子證書各乙張；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  現金書券乙份（冠軍$800、亞軍$500、季軍$300、優異$200）；
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>獎座乙個；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>得獎設計實體杯乙個；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>Slowood 精美環保禮品乙份；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  綠色和平代表「減塑」講座乙次（可轉 zoom 形式進行）
                </Text>
              </ListItem>
            </OrderedList>
          </Box>

          <Box my={4}>
            <Text fontSize={'sm'} my={2}>
              另設最踴躍學校參與獎 3 名得獎學校可獲得：
            </Text>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>實體及電子證書各乙張；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>獎座乙個；</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  綠色和平代表「減塑」講座乙次（可轉 zoom 形式進行）；
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>Slowood 精美環保禮品包乙份</Text>
              </ListItem>
            </OrderedList>
          </Box> */}

          <Text fontSize={'sm'} fontWeight={500} style={{ color: '#1A202C' }}>
            *獎品將於 3 月比賽頒獎禮頒發
          </Text>

          <Divider my={4} />

          <RuleHeadline>作品規範</RuleHeadline>
          <Box>
            <Text fontSize={'sm'} mb={2}>
              每位參賽者只可遞交一份作品，以最先遞交作品為準，其餘作廢。
            </Text>
            <OrderedList spacing={2}>
              <ListItem>
                <Text fontSize={'sm'}>
                  得獎者所獲得的「重用杯」不適用於綠色和平「重用杯借還計劃」之手機應用程式功能。
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  主辦單位保留解釋、修改及補充本參賽辦法、細則及獎項說明內容之權利。
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  參賽者呈交作品時，即同意授予主辦單位不可撤銷之權利，即對參賽作品進行複製、傳播、展示、及於現今或未來之任何媒體上製作衍生物，其包含但不僅限於：公開展示獲獎者之作品或作慈善及項目宣傳及其他紀念物品；於主辦單位網站刊載參賽或得獎作品。主辦單位以前述方式使用該作品及相關之文字敘述時，將不需再付出額外代價與徵求額外之同意。
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  於參賽之時，參賽者即同意下列條款：（a）遵從正式規定；（b）評審在與本比賽相關事務上之決定為最終且具約束效力；（c）若參賽者獲得獎項，主辦單位有權使用其照片、姓名、代表肖像、與／或聲音於任何與本比賽相關之公開或推銷場合，或未來相關之推廣活動，不需另行支付代價或取得同意（除非為法律所禁止）。
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  主辦單位保留驗證任何參賽作品之有效性與原創性，並取消任何未遵守正式規定或以非正當手段干預賽程之參賽者資格。如主辦單位未能及時於比賽途中執行此權利，不等同放棄行使該權利。
                </Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  凡參賽者即視為同意本比賽各項規定，如有未盡事宜，主辦單位可隨時補充說明或變更。若因任何理由而無法進行本活動，主辦單位有權決定終止、變更或暫停本活動，並保留活動修改正式規定內容之權利。
                </Text>
              </ListItem>
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>活動查詢</RuleHeadline>
          <Box>
            <Text fontSize={'sm'} mb={2}>
              請電郵至{' '}
              <a href="mailto<:event.hk@greenpeace.org">
                <u>event.hk@greenpeace.org</u>
              </a>{' '}
              或於辦公時間星期一至五上午十時至下午六時（午膳時間除外）致電
              2854-8318 或與會員服務部梁小姐 聯絡。
            </Text>
          </Box>

          {/* <RuleHeadline>{data.rules.uploadHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.uploads.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.groupHeadline}</RuleHeadline>
          <Box>
            <List>
              {data.rules.groups.map((c) => (
                <ListItem key={c} mb={4}>
                  <Text fontWeight={500} mt={6} mb={2}>
                    {c.name}
                  </Text>
                  <Text fontSize={'sm'}>{c.details}</Text>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.formatHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.formats.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.criteriaHeadline}</RuleHeadline>
          <Box>
            {data.rules.criterias.map((c) => (
              <Text key={c} fontSize={'sm'} mb={2}>
                {c}
              </Text>
            ))}
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.specificationHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.specifications.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.dateHeadline}</RuleHeadline>
          <Text>{data.rules.date}</Text>

          <Divider my={4} />

          <RuleHeadline>{data.rules.prizeHeadline}</RuleHeadline>
          <Box>
            <List spacing={4}>
              {data.rules.prizeList.map((c, i) => (
                <ListItem key={i}>
                  <RuleHeadline>{c.headline}</RuleHeadline>
                  <UnorderedList spacing={2}>
                    {c.items.map((item, i) => (
                      <ListItem key={i}>
                        <Text fontSize={'sm'}>{item}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider my={4} /> */}
        </ContentContainer>
      </PageContainer>
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
