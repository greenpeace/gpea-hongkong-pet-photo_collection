import React, { useEffect, useState } from "react";
import Wrapper from "components/site/wrapper";
import Card from "components/image";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

export default function Index({ src }) {
  return (
    <Box>
      <Box gridColumn={"-moz-initial"} p={4}>
        <Box className="masonry">
          {[...Array(36)].map((d, i) => (
            <Box className="grid" key={i}>
              <img
                src={`https://source.unsplash.com/random/${
                  Math.random() * 100
                }`}
              />
              <Box className="grid__body">
                <Box className="relative">
                  <Heading className="grid__title">Title {i+1}</Heading>
                  <Text className="grid__author">Author</Text>
                </Box>
                <Box className="mt-auto">
                  <Text as="span" className="grid__tag">#Tag name</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
