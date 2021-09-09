import React, { useEffect } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { wrapper } from 'store/configureStore';
import { useDispatch } from 'react-redux';
import { auth } from 'components/utils';

import '/styles/index.scss';

import theme from '../theme/theme';
import { appTheme } from '../theme/app';

import * as userActions from 'store/actions/action-types/user-actions';

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = auth();
    dispatch({ type: userActions.SET_USER_SUCCESS, data: JSON.parse(data) });
  }, []);

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default wrapper.withRedux(MyApp);
