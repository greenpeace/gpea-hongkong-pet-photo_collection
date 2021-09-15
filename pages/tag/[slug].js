import React from 'react'
import Wrapper from 'components/site/wrapper'
import ListItems from 'components/list/items'
import TopSection from 'components/site/topSection'
import PageContainer from '@/components/site/container/pageContainer'

export default function Index() {
  return (
    <>
      <TopSection/>
      <PageContainer>
        <ListItems/>
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
