import { Text, Flex, Image, SimpleGrid } from '@chakra-ui/react';

import { Container, BookTitle } from 'components/layouts';

import ActionButton from 'components/ActionButton';

import blueWhite from 'assets/images/bookWhite.svg';

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

const IntroCard = props => {
  const { title, content, isBlue, order } = props;
  const isOdd = order & 1;
  return (
    <Flex
      bgColor={{
        base: isOdd ? 'orange.200' : 'gray.100',
        lg: isBlue ? 'orange.200' : 'gray.100',
      }}
      direction="column"
      p={{ base: '16px', md: '32px' }}
      rounded="sm"
      position="relative"
      overflow="hidden"
    >
      <Image
        w="100px"
        position="absolute"
        top="-10px"
        left="-20px"
        opacity=".5"
        src={blueWhite}
      />
      <Text
        zIndex="2"
        pb="10px"
        color={{
          base: isOdd ? 'orange.600' : '#6082DF',
          lg: isBlue ? 'orange.600' : '#6082DF',
        }}
        fontWeight="700"
        fontSize="20px"
      >
        {title}
      </Text>
      <Flex zIndex="2" flex="1" align="center">
        <Text color="gray.600">{content}</Text>
      </Flex>
    </Flex>
  );
};

const IntroSection = () => {
  return (
    <Container py={{ base: '32px', lg: '72px' }} align="flex-start">
      <BookTitle title="一起讀書吧 !" />
      <Text textStyle="heading02" color="gray.600">
        我們將在 18 周的時間裡一起完成
        <br />
        Google UX Design Professional Certificate 課程
      </Text>
      <SimpleGrid
        pt="20px"
        columns={{ base: 1, lg: '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        {INTRO_LIST.map((item, index) => (
          <IntroCard {...item} order={index} />
        ))}
      </SimpleGrid>
      <ActionButton />
    </Container>
  );
};

export default IntroSection;
