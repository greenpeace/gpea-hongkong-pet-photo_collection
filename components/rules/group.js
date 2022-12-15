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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        <div className="p-5 border-t-4 border-b-4 border-[#66cc00] bg-white cursor-auto">
          <p className="uppercase text-sm font-medium text-gray-500">公開組</p>

          {/* <p className="mt-4 text-2xl text-gray-700 font-medium">
            {' '}
            綠色和平每月捐款支持者/公眾人士
          </p> */}

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
                額外捐款$200 (可獲得減塑徽章乙個及咖啡優惠券乙張(*指定商店))
              </li>
            </ul>
          </div>

          <p className="mt-4 font-medium text-gray-700">公眾人士</p>

          <div className="bg-[#F9F9F9] rounded-lg p-2 mt-2 cursor-auto">
            <ul className="grid grid-cols-1 gap-4 ">
              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $150 （可獲得減塑徽章乙個）
              </li>

              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $350 （可獲得減塑徽章乙個、咖啡渣番梘乙個）
              </li>

              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $550
                （可獲得減塑徽章乙個、咖啡渣番梘乙個及咖啡優惠券乙張）*指定商 店
              </li>
            </ul>
          </div>
        </div>

        <div className="p-5 border-t-4 border-b-4 border-[#66cc00] bg-white cursor-auto">
          <p className="uppercase text-sm font-medium text-gray-500">學校組</p>

          <p className="mt-4 font-medium text-gray-700 cursor-auto">小學組及中學組</p>

          <div className="bg-[#F9F9F9] rounded-lg p-2 mt-2">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600 cursor-auto">
                <ClickIcon />
                $1,500
                (不限參加人數，成功報名後可獲得「減塑知識王」教材包乙份，包括簡報、工作紙及教學指引)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
