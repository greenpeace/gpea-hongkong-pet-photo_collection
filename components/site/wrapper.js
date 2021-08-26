import Head from 'next/head'
import {
  Box,
  Text,
  Heading,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
  Button,
} from "@chakra-ui/react";
import Nav from "components/site/navbar/nav";
import SubNav from "components/site/navbar/subNav";
import Footer from 'components/site/footer/SmallWithSocial'

const ModalWrapper = ({isOpen, onClose}) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          Demo
        </ModalContent>
    </Modal>
  );
};


export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Head>
        <title>Greenpeace 綠色和平 | 香港</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <SubNav/>
      <Button onClick={()=>onOpen()}>Click</Button>
      {children}
      <Footer/>
      <ModalWrapper isOpen={isOpen} onClose={onClose}/>
    </Box>
  );
}
