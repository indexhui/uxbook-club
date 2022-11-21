import {
  Text,
  Flex,
  VStack,
  Image,
  Link,
  HStack,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';

import { Container, BookTitle } from 'components/layouts';
import { BookIcon } from 'components/icons';
import ActionButton from 'components/ActionButton';

import certificate from 'assets/images/certificate.jpg';

const INTRO_LIST = [
  {
    title: 'Learn Together',
    content:
      '你對UX有興趣但擔心自己無法獨力完成 GoogleUX Designe 的學習挑戰嗎? 學習路上不孤單在 UBC 找到志同道合的學伴！ 透過夥伴一起完成，更可激起 in & out 學習循環!',
    isBlue: true,
  },
  {
    title: 'Empathy Driven',
    content:
      '活動的門票費用扣除成本後將轉作實質的物質捐贈給公益團體，以實際行動幫助有需要的人們 !',
    isBlue: false,
  },
  {
    title: 'Experience share',
    content:
      '產業的飛行導師帶領你深入了解業界需求，並分享專業路上的各種過程及成功經驗，更深刻的學習更深刻的學習 Google UX Design。',
    isBlue: false,
  },
  {
    title: 'Connection',
    content:
      '除了專業能力外，職場上更不可或缺的即戰力即是「人脈」。透過參與活動、相互交流，建立屬於你的人脈網，不僅增加工作上互助的好夥伴，更是為自己提高職場即戰力。',
    isBlue: true,
  },
];

const StepCard = props => {
  return (
    <Flex
      bgColor="white"
      p="15px"
      pl="20px"
      borderRadius="30px 4px 4px 30px"
      align="center"
    >
      <Flex
        mr="20px"
        bgColor="orange.600"
        w="36px"
        h="36px"
        rounded="full"
        justify="center"
        align="center"
      >
        <Text color="white" fontSize="20px">
          1
        </Text>
      </Flex>
      <Text color="gray.500" flex="1">
        每章節讀書會開始時會先由負責小組進行課程導讀，帶領大家複習章節重點
      </Text>
    </Flex>
  );
};

const HowToWorkSection = () => {
  return (
    <Container
      bgColor="#F6F6F6"
      py={{ base: '32px', lg: '72px' }}
      align="flex-start"
    >
      <BookTitle title="讀書會如何進行" />
      <Text textStyle="heading02" color="gray.600" maxW="700px">
        本次讀書會將依照工作資歷均分成 7 組，每組 6
        名成員，由資深成員帶領帶初階成員一同學習，自然而然的建立「導師制度」，讓成員們彼此學習
        。
      </Text>
      <SimpleGrid
        pt="20px"
        columns={{ base: 1, lg: 2 }}
        spacingX="40px"
        spacingY="20px"
      >
        {INTRO_LIST.map((item, index) => (
          <StepCard {...item} order={index} />
        ))}
      </SimpleGrid>
      <SimpleGrid
        pt={{ base: '40px', lg: '60px' }}
        columns={{ base: 1, lg: 2 }}
        spacingX="40px"
        spacingY="20px"
      >
        <Flex w="100%" align="center">
          <VStack spacing="15px" align="flex-start">
            <Text textStyle="heading02">
              參與且完成讀書會
              <br />
              你將會獲得....
            </Text>
            <VStack spacing="10px" align="flex-start">
              <Text textStyle="text01">
                1.Google UX Design 官方認證章節完成證書
              </Text>
              <Text textStyle="text01">
                2.結識來自不同背景但目標相同的學習夥伴
              </Text>
              <Text textStyle="text01">3.UBC 聯合讀書會頒發的參與證明</Text>
              <Text textStyle="text01">
                4.Google UX Design 官方認證章節完成證書
              </Text>
            </VStack>
          </VStack>
        </Flex>
        <Flex>
          <Image rounded="md" src={certificate} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default HowToWorkSection;
