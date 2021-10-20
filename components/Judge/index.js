import React from 'react';
import { Box, Stack, Heading, Text, Flex, Link, Image } from '@chakra-ui/react';
import styled from 'styled-components';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Judge = ({ judge }) => {
  return (
    <Box
      w={'full'}
      bg={'white'}
      boxShadow={'2xl'}
      rounded={'md'}
      py={6}
      px={6}
      mt={12}
      id={judge.id}
    >
      <Box w="33.33%" mx={'auto'} mt={-14}>
        <Image src={judge.avatar} alt={judge.name} loading="lazy" />
      </Box>
      <Stack spacing={6}>
        <Box mt={8} textAlign={'center'}>
          <Heading as="h3" fontSize={'xl'} mb={2} fontWeight={500}>
            {judge.name}
          </Heading>
          <Text fontSize={'sm'} letterSpacing={'2px'} color={'gray.900'}>
            {judge.designation}
          </Text>
        </Box>
        <Text fontSize={'sm'} letterSpacing={'2px'} color={'gray.700'}>
          {judge.profile}
        </Text>
        {judge.ig && judge.fb && (
          <Stack w={'100%'} direction={'column'} spacing={4}>
            <Link isExternal>
              <Flex alignItems={'center'}>
                <FaFacebook />
                <Text as="span" fontSize={'xs'} color={'gray.700'} mx={2}>
                  {judge.fb}
                </Text>
              </Flex>
            </Link>
            <Link isExternal>
              <Flex alignItems={'center'}>
                <FaInstagram w="8" />
                <Text as="span" fontSize={'xs'} color={'gray.700'} mx={2}>
                  {judge.ig}
                </Text>
              </Flex>
            </Link>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Judge;
