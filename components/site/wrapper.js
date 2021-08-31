import Head from 'next/head'
import {
  Box,
} from "@chakra-ui/react";
import Nav from "components/site/navbar/nav";
import SubNav from "components/site/navbar/subNav";
import Modal from 'components/site/modal'
import SignupModal from 'components/site/modal/signup'
import Footer from 'components/site/footer/SmallWithSocial'

export default function Layout({ children }) {
  return (
    <Box>
      <Head>
        <title>Greenpeace 綠色和平 | 香港</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <SubNav/>
      {children}
      <Footer/>
      <Modal/>
      <SignupModal/>
    </Box>
  );
}
