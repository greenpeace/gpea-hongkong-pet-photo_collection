import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Image,
  useColorModeValue,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as filterActions from 'store/actions/action-types/filter-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import { useRouter } from 'next/router';

import UploadButton from '@/components/site/button/uploadButton';

// Hook
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function WithSubnavigation({ user, setModal, setSorting }) {
  const router = useRouter();
  const prevRoute = usePrevious(router);
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    if (!router || !prevRoute) {
      return;
    }

    if (router.pathname !== prevRoute.pathname && isOpen) {
      onToggle();
    }

    if (
      router.asPath !== prevRoute.asPath &&
      router.query.slug !== prevRoute.query.slug
    ) {
      setSorting('defaultDESC');
    }
  }, [router]);
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex flex={1} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={2} justify={{ base: 'center', md: 'start' }}>
          <Image
            src={'https://www.greenpeace.org/global/static/img/gp-logo.svg'}
            maxW={'120px'}
            alt={'Greenpeace 綠色和平'}
            cursor={'pointer'}
            loading="eager"
            onClick={() => {
              router.push('/');
            }}
          />

          <Flex px={6} display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>

        <div className="md:hidden flex-1">&nbsp;</div>

        <div className="hidden md:flex flex-col lg:flex-row gap-2">
        <Flex flex={1} justify={'flex-end'} direction={'row'} maxW={'140px'}>
          <a
            href={
              'https://cloud.greenhk.greenpeace.org/donation-plastics-plasticfree_harbour_public/?_gl=1*ndl4h0*_ga*OTgzMjQxMzM4LjE2NzE0MjIzNDQ.*_ga_4KSKE81WM7*MTY3MTc3MTczNS4xMy4xLjE2NzE3NzE4NzguNTcuMC4w&_ga=2.111883143.2073700989.1671590531-983241338.1671422344'
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="main-cta"
              w={'100%'}
              px={'4'}
              py={'4'}
              mx={'auto'}
              rounded={'md'}
              fontWeight={'bold'}
              color={'white'}
              bg={'orange.500'}
              _hover={{
                bg: 'orange',
              }}
              rel="noreferrer"
              fontSize={{base: "sm", md: "md"}}
            >
              公開組報名
            </Button>
          </a>
        </Flex>

        {/* <Flex flex={1} justify={'flex-end'} direction={'row'} maxW={'140px'}>
          <a
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLScnV-d1rBK_RWJtUYB9VuujSs0PCBZxvfCF_-pOZp5IqSkuJg/viewform'
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="main-cta"
              w={'100%'}
              px={'4'}
              py={'4'}
              mx={'auto'}
              rounded={'md'}
              fontWeight={'bold'}
              color={'white'}
              bg={'orange.500'}
              _hover={{
                bg: 'orange',
              }}
              rel="noreferrer"
              fontSize={{base: "sm", md: "md"}}
            >
              學校組報名
            </Button>
          </a>
        </Flex> */}
        </div>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav isOpen={isOpen} onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const NAV_ITEMS = process.env.NAV || [];
  return (
    <Stack direction={'row'} spacing={{base: 4, md:8}}>
      {NAV_ITEMS.map((d) => (
        <Box key={d.LABEL} textAlign="center">
          <Link href={d.HREF} passHref>
            <Box
              fontSize={{base: "xs", md: "sm"}}
              fontWeight={500}
              _hover={{
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {d.LABEL}
            </Box>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ onToggle }) => {
  const NAV_ITEMS = process.env.NAV || [];
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((d) => (
        <Stack key={d.LABEL} spacing={4}>
          <Flex
            py={2}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Link href={d.HREF} passHref>
              <Box
                fontSize={'sm'}
                fontWeight={500}
                _hover={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => onToggle()}
              >
                <Text>{d.LABEL}</Text>
              </Box>
            </Link>

          </Flex>
        </Stack>
      ))}
      <Flex flex={1} direction={'row'} maxW={'140px'}>
          <a
            href={
              'https://cloud.greenhk.greenpeace.org/donation-plastics-plasticfree_harbour_public/?_gl=1*ndl4h0*_ga*OTgzMjQxMzM4LjE2NzE0MjIzNDQ.*_ga_4KSKE81WM7*MTY3MTc3MTczNS4xMy4xLjE2NzE3NzE4NzguNTcuMC4w&_ga=2.111883143.2073700989.1671590531-983241338.1671422344'
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="main-cta"
              w={'100%'}
              px={'4'}
              py={'4'}
              mx={'auto'}
              rounded={'md'}
              fontWeight={'bold'}
              color={'white'}
              bg={'orange.500'}
              _hover={{
                bg: 'orange',
              }}
              rel="noreferrer"
            >
              公開組報名
            </Button>
          </a>
        </Flex>
{/* 
        <Flex flex={1} direction={'row'} maxW={'140px'}>
          <a
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLScnV-d1rBK_RWJtUYB9VuujSs0PCBZxvfCF_-pOZp5IqSkuJg/viewform'
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="main-cta"
              w={'100%'}
              px={'4'}
              py={'4'}
              mx={'auto'}
              rounded={'md'}
              fontWeight={'bold'}
              color={'white'}
              bg={'orange.500'}
              _hover={{
                bg: 'orange',
              }}
              rel="noreferrer"
            >
              學校組報名
            </Button>
          </a>
        </Flex> */}
    </Stack>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol });
    },
    setSorting: (data) => {
      dispatch({ type: filterActions.SET_SORTING, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithSubnavigation);
