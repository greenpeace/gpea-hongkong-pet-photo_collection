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

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

// `getStaticPaths` allows the user to return a list of parameters to
// render to HTML at build time.
export async function getStaticPaths() {
  return {
    // Opt-out of the described fallback behavior
    fallback: false,
    paths: [
      { params: { slug: "all" } },
      { params: { slug: "lantauLandscape" } },
      { params: { slug: "lantauEcology" } }
    ]
  };
}