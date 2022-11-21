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
import theme from 'theme/theme';

import Hero from 'sections/Hero';
import IntroSection from 'sections/IntroSection';
import HowToWorkSection from 'sections/HowToWorkSection';
import MemberProof from 'sections/MemberProof';
import ScheduleSection from 'sections/ScheduleSection';
import TeacherSection from 'sections/TeacherSection';
import ReviewSection from 'sections/ReviewSection';
import AboutUBCSection from 'sections/AboutUBCSection';
import AboutPickupSection from 'sections/AboutPickupSection';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <IntroSection />
      <HowToWorkSection />
      <MemberProof />
      <ScheduleSection />
      <TeacherSection />
      <ReviewSection />
      <AboutUBCSection />
      <AboutPickupSection />
    </ChakraProvider>
  );
}

export default App;
