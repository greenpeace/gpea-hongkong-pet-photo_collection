import React, { useEffect } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { wrapper } from 'store/configureStore';
import { useDispatch } from 'react-redux';
import { auth } from 'components/utils';
import Router from 'next/router';
import nProgress from 'nprogress';
import TagManager from 'react-gtm-module';

import theme from '../theme/theme';
import { appTheme } from '../theme/app';

import 'nprogress/nprogress.css';
import '/styles/index.scss';

import * as userActions from 'store/actions/action-types/user-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    /* GTM is only applicable for production env */
    if (process.env.NODE_ENV === 'production') {
      const tagManagerArgs = {
        gtmId: 'GTM-M6LZL75',
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  useEffect(() => {
    const data = auth();
    let params = {};
    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])'
    );
    const hiddenFormValue = [...getHiddenFields].reduce(
      (obj, e) => ({ ...obj, [e.name]: e.value }),
      {}
    );

    window.location.search
      .slice(1)
      .split('&')
      .forEach((elm) => {
        if (elm === '') return;
        let spl = elm.split('=');
        const d = decodeURIComponent;
        params[d(spl[0])] = spl.length >= 2 ? d(spl[1]) : true;
      });

    dispatch({ type: userActions.SET_USER_SUCCESS, data: JSON.parse(data) });
    dispatch({
      type: hiddenFormActions.SET_HIDDEN_FORM,
      data: {
        ...hiddenFormValue,
        ...params,
      },
    });
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
