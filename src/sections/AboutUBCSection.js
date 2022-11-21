import { Text, Flex, Image, VStack, Button } from '@chakra-ui/react';
import { Container, BookTitle } from 'components/layouts';
import logo from 'assets/images/logo.svg';

const AboutUBCSection = () => {
  return (
    <Container
      bgColor="orange.200"
      py={{ base: '32px', lg: '72px' }}
      // align="flex-start"
    >
      <VStack w="100%" spacing="8px">
        <Text
          textStyle="heading01"
          color="orange.600"
          fontWeight="700"
          fontSize={{ base: '32px', lg: '48px' }}
        >
          About
        </Text>
        <Text textStyle="heading02" fontWeight="700">
          UX BOOK CLUB
        </Text>
      </VStack>
      <Flex
        w="100%"
        mt="20px"
        direction="column"
        bgColor="#F2EAE9"
        border="1px solid white"
        rounded="lg"
        align="center"
        p="40px"
      >
        <Image w="260px" src={logo} />
        <VStack maxW="700px" spacing="20px" mt="30px">
          <Text textStyle="text01" textAlign="center">
            UBC 是 Pickup Design 以學習 UX
            相關知識為目標所經營的非營利項目，也是第一個與公益結合的 UX
            讀書會，並以「學習、公益、社群」做為三大核心理念，在課程中除了能有系統的學習使用者經驗知識，還會以社會公益為主題進行設計，讓夥伴在學習的同時也能用設計發揮社會影響力。
          </Text>
          <Text textStyle="text01" textAlign="center">
            UBC
            廣納來自不同背景、文化、經驗的夥伴，相信這個社群能夠幫助人們獲得相關知識，進而改變人們對這個領域的態度，讓我們一起為臺灣的
            UX 努力。
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default AboutUBCSection;
