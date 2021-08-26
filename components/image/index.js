import React, {useEffect, useState, useRef} from 'react'
import { Box, Image, Text, Center, Stack } from "@chakra-ui/react";

export default function Index({src, otherImageProps}) {
  const imageRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded && imageRef.current?.complete) {
      // setLoaded(true);
    }
  }, []);
  
  return (
      <Box position={'relative'}>
        <Box>
          <Image
              ref={imageRef}
              src={src}
              // onError={onError}
              onLoad={() => {
                setLoaded(true);
              }}
              {...otherImageProps}
            />
        </Box>
        {loaded && <Box><Text>123</Text></Box>}
      </Box>
  );
}