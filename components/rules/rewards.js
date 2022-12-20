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
    Link
  } from '@chakra-ui/react';

const Rewards = () => {
  const ClickIcon = () => (
    <div className="w-[24px]">
      <svg
        className="w-4 h-4 mr-2 fill-current text-green-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
      </svg>
    </div>
  );
  return (
    <div className="tw mb-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        <div className="p-5 border-t-4 border-b-4 border-[#66cc00] bg-white cursor-auto">
          <p className="uppercase text-sm font-medium text-gray-500">公開組</p>

          <p className="my-4 text-gray-700">
          冠軍、亞軍、季軍及優異獎各一名，共 4 個獎項，得獎者可獲得
          </p>

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
        </div>

        <div className="p-5 border-t-4 border-b-4 border-[#66cc00] bg-white cursor-auto">
          <p className="uppercase text-sm font-medium text-gray-500">學校組</p>

          <p className="my-4 text-gray-700 cursor-auto">
          各組別均設有冠軍、亞軍、季軍及優異獎各一名，共 8 個獎項，得獎者可獲得：
          </p>

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
            <Divider my={4} />

            <p className="my-4 text-gray-700 cursor-auto">
            另設最踴躍學校參與獎 3 名得獎學校可獲得：
          </p>

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




        </div>
      </div>
    </div>
  );
};

export default Rewards;
