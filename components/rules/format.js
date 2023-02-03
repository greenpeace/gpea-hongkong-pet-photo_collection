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
  Link,
  Text,
  Wrap,
  WrapItem,
  Image,
} from '@chakra-ui/react';

const Format = () => {
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
      <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-6 mx-auto">
        <div className="p-5 border-t-4 border-b-4 border-[#66cc00] bg-white cursor-auto">
          <p className="uppercase text-sm font-medium text-gray-500">公開組</p>

          <div className="rounded-lg p-2 mt-2 cursor-auto">
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
                <Text fontSize={'sm'}>檔案大小：10MB 或以下</Text>
              </ListItem>
              <ListItem>
                <Text fontSize={'sm'}>
                  參加者請以電郵中的上載連結遞交作品。
                </Text>
              </ListItem>
            </OrderedList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Format;
