import { Text, Flex, VStack, Image, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { TypeAnimation } from 'react-type-animation';
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from 'framer-motion';

// import { Container } from 'components/layouts';
import LogoAnimation from 'components/LogoAnimation';

import blueBook from 'assets/images/blueBook.svg';

const MotionImage = motion(Image);

const ActionButton = () => {
  return (
    <Flex
      mt="40px"
      as={Link}
      href="https://pickupdesign.notion.site/UBC-e9421c1d34d24eb1b2f14578701f229f"
      isExternal
      cursor="pointer"
      bgColor="white"
      rounded="full"
      h="50px"
      w="280px"
      justify="center"
      align="center"
      position="relative"
    >
      <Text color="gray.500">
        和我們一起
        <TypeAnimation
          cursor={false}
          sequence={['讀書會吧', 2000, '做公益吧', 2000]}
          speed={60}
          wrapper="span"
          repeat={Infinity}
        />
      </Text>
      <Flex
        top="5px"
        right="5px"
        position="absolute"
        w="40px"
        h="40px"
        bgColor="orange.600"
        rounded="full"
        align="center"
        justify="center"
        justifySelf="flex-end"
      >
        <ArrowForwardIcon h="24px" w="24px" color="white" />
      </Flex>
    </Flex>
  );
};

const Hero = () => {
  const x = useMotionValue(0.2);
  const y = useMotionValue(0.2);
  const rotateX = useTransform(y, [0, 400], [0, 20]);
  const rotateY = useTransform(x, [100, 200], [0, 10]);
  const rotateX2 = useTransform(y, [0, 400], [0, 40]);
  const rotateY2 = useTransform(x, [0, 400], [0, -10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / 20);
    y.set((event.clientY - rect.top) / 20);
  }

  return (
    <Flex
      bgColor="orange.600"
      h="600px"
      justify="center"
      align="center"
      position="relative"
      overflow="hidden"
      onMouseMove={handleMouse}
      style={{
        placeItems: 'center',
        placeContent: 'center',
        perspective: 100,
      }}
    >
      <MotionImage
        w="380px"
        top="-130px"
        left="-100px"
        position="absolute"
        src={blueBook}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <MotionImage
        w="380px"
        bottom="-130px"
        right="-100px"
        position="absolute"
        src={blueBook}
        style={{
          rotateX: rotateX2,
          rotateY: rotateY2,
        }}
      />
      <Flex direction="column" align="center">
        <LogoAnimation />
        <VStack pt="30px" spacing="20px">
          <Text textStyle="heading01" color="orange.200">
            第二屆 UBC 公益讀書會
          </Text>
          <Text textStyle="heading01" color="orange.200">
            2023 1.15 ~ 2023 6.18
          </Text>
        </VStack>
        <ActionButton />
      </Flex>
    </Flex>
  );
};

export default Hero;
