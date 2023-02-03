import { Text, Link, Image, Box, Flex } from '@chakra-ui/react';
import image01 from "../../assets/images/202212_Design_graphic-12.jpg"
import image02 from "../../assets/images/202212_Design_graphic-13.jpg"
import image03 from "../../assets/images/202212_Design_graphic-14.png"

const Group = () => {
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
      <div className="w-full grid grid-cols-1 gap-6 mx-auto">
        <div className="p-5 border-t-4 border-b-4 border-[#66cc00] bg-white cursor-auto">
          <p className="uppercase text-sm font-medium text-gray-500">公開組</p>
          <p className="mt-4 font-medium text-gray-700">
            綠色和平每月捐款支持者
          </p>

          <div className="bg-[#F9F9F9] rounded-lg p-2 mt-2 cursor-auto">
            <ul className="grid grid-cols-1 gap-4 cursor-auto">
              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                免費參加
              </li>

              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                額外捐款$200：可獲得減塑徽章乙個及咖啡優惠券乙張（*指定商店）
              </li>
            </ul>
            <div className="text-gray-600 text-sm mt-4">
              每月捐款支持者報名詳情，可參閱本會早前已發送之電郵。
            </div>
           
          </div>

          <Image src={image02} alt={"獎品"} loading="lazy" maxW={400}/>

          <p className="mt-4 font-medium text-gray-700">公眾人士</p>

          <div className="bg-[#F9F9F9] rounded-lg p-2 mt-2 cursor-auto">
            <ul className="grid grid-cols-1 gap-4 ">
              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $150：可獲得減塑徽章乙個
              </li>

              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $350：可獲得減塑徽章乙個、咖啡渣番梘乙個
              </li>

              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $550：可獲得減塑徽章乙個、咖啡渣番梘乙個及咖啡優惠券乙張（*指定商店）
              </li>
            </ul>
            <Link
              href={'https://cloud.greenhk.greenpeace.org/donation-plastics-plasticfree_harbour_public'}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Text
                fontWeight={700}
                textAlign={'right'}
                color={'brand.500'}
                p={2}
              >
                立即報名
              </Text>
            </Link>
          </div>
          <Image src={image01} alt={"獎品"} loading="lazy" maxW={600} />
        </div>
        

        {/* <div className="p-5 border-t-4 border-b-4 border-[#66cc00] bg-white cursor-auto">
          <p className="uppercase text-sm font-medium text-gray-500">學校組</p>

          <p className="mt-4 font-medium text-gray-700 cursor-auto">
            小學組及中學組
          </p>

          <div className="bg-[#F9F9F9] rounded-lg p-2 mt-2">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $1,500：不限參加人數，成功報名後可獲得「無塑海港」教材包乙份，包括簡報、工作紙及教學指引
              </li>
            </ul>
            <Link
              href={'https://forms.gle/xcz1NFSdm7rjXdqR8'}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Text
                fontWeight={700}
                textAlign={'right'}
                color={'brand.500'}
                p={2}
              >
                立即報名
              </Text>
            </Link>
          </div>
          <Flex justify="end" align="end">
          <Image src={image03} maxW={'120px'} py={2} align="right" alt={"獎品"} loading="lazy" />
          </Flex>
        </div> */}
      </div>
    </div>
  );
};

export default Group;
