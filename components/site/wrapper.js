import Head from 'next/head'
import { Box, Flex, Container } from "@chakra-ui/react";
import Nav from "components/site/navbar/nav";
import SubNav from "components/site/navbar/subNav";
import Footer from 'components/site/footer/SmallWithSocial'

export default function Layout({ children }) {
  const openWidget = () => {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'idt',
        uploadPreset: 'quocv8wr',
      },
      (error, { event, info }) => {
        if (event === 'success') {
          console.log('event-',event)
          // this.setState({
          //   imageUrl: info.secure_url,
          //   imageAlt: `An image of ${info.original_filename}`
          // })
        }
      },
    ).open();
  };
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
    </Box>
  );
}
