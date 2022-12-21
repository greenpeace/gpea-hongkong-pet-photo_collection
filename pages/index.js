import React from 'react';
import Head from 'next/head';
import Wrapper from 'components/site/wrapper';
import ListItems from 'components/list/items';
import TopSection from 'components/site/topSection';
import PageContainer from '@/components/site/container/pageContainer';

export default function Index() {
  return (
    <>
      <Head>
        <title>序言 - 山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港</title>
      </Head>
      <TopSection opacity={0}/>
      {/* <PageContainer>
        <ListItems />
      </PageContainer> */}
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
