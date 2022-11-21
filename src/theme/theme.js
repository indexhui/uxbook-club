import { extendTheme, theme as base } from '@chakra-ui/react';
import colors from './colors';
import textStyles from './textStyles';

const theme = extendTheme({
  textStyles,
  // layerStyles,
  // semanticTokens,
  colors,
  fonts: {
    heading: `'Montserrat','-apple-system','BlinkMacSystemFont ','PingFang TC','NotoSansCJK','Microsoft JhengHei',${base.fonts?.body}`,
    body: `'Montserrat','-apple-system','BlinkMacSystemFont ','PingFang TC','NotoSansCJK','Microsoft JhengHei',${base.fonts?.body}`,
  },
  components: {
    // Button,
    // Form,
    // Input,
    // Link,
  },
  // breakpoints: {
  //   xs: '320px',
  //   sm: '768px',
  //   md: '991px',
  //   lg: '1200px',
  //   xl: '1300px',
  //   '2xl': '1536px',
  // },
});

export default theme;
