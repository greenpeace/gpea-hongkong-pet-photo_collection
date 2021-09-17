import { extendTheme } from '@chakra-ui/react'
import { appTheme } from './app'

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    brand: {
      100: '#ddffa3',
      300: '#a2e649',
      400: '#85D633',
      500: '#66cc00', // Default GP
      600: '#57AD00',
      700: '#378000',
      900: '#133300',
    },
    gray: {
      100: '#f1f3f5',
      300: '#dee2e6',
      500: '#adb5bd',
      700: '#495057',
      900: '#212529',
    },
    orange: {
      100: '#ffdda3',
      300: '#ffb452',
      500: '#ff8100', // Default CTA
    },
  },
  fonts: {},
  fontSizes: {},
  lineHeights: {},
  layerStyles: {},
  components: {},
  appTheme,
})

export default theme
