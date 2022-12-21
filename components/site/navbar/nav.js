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

        <Flex flex={1} justify={'flex-end'} direction={'row'} maxW={'140px'}>
          {/* <UploadButton url={'https://api.greenpeace.org.hk/app/preview-hk/?preview=event-plastics-plasticfree_harbour'} /> */}
        </Flex>
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
    <Stack direction={'row'} spacing={8}>
      {NAV_ITEMS.map((d) => (
        <Box key={d.LABEL}>
          <Link href={d.HREF} passHref>
            <Box
              fontSize={'sm'}
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

const MobileNav = ({onToggle}) => {
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
                onClick={()=>onToggle()}
              >
                <Text>{d.LABEL}</Text>
              </Box>
            </Link>
          </Flex>
        </Stack>
      ))}
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
