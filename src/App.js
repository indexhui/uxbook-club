import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Hero from 'sections/Hero';
import theme from 'theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
    </ChakraProvider>
  );
}

export default App;
