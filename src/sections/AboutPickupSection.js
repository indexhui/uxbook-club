import { Text, Flex, Image, VStack, Button } from '@chakra-ui/react';
import { Container, BookTitle } from 'components/layouts';
import pickup from 'assets/images/pickup.png';
import pickupTeam from 'assets/images/pickupTeam.png';

const AboutPickupSection = () => {
  return (
    <Container
      bgColor="white"
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
        bgColor="orange.600"
        border="1px solid white"
        rounded="lg"
        align="center"
        p="40px"
        pb="0"
      >
        <Image w="80px" src={pickup} />
        <VStack color="white" maxW="700px" spacing="20px" mt="30px">
          <Text textStyle="text01" textAlign="center" color="white">
            Pickup Design 是一個致力於知識交流的設計組織，我們堅信保持開放心態
            (Open Mind) 可以改變態度、生活，最終改變世界。
          </Text>
          <Text textStyle="text01" textAlign="center" color="white">
            我們秉持 UX Design、Connect The World、Open Sources
            三大核心理念，建構出一個連結世界，傳遞 UX
            以人為本中心思維的知識交換平台，讓想法觸手可及，改變隨時發生。
          </Text>
        </VStack>
        <Image w="95%" mt="30px" src={pickupTeam} />
      </Flex>
    </Container>
  );
};

export default AboutPickupSection;
