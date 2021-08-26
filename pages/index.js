import React from "react";
import Wrapper from "components/site/wrapper";
import ListItems from "components/list/items";
import {
  Box
} from "@chakra-ui/react";

export default function Index() {
  return (
    <Box>
      <ListItems/>
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
