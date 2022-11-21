import {
  Text,
  Flex,
  Image,
  SimpleGrid,
  Button,
  AspectRatio,
} from '@chakra-ui/react';
import { Container, BookTitle } from 'components/layouts';
import teacher01 from 'assets/images/teachers/teacher01.jpg';
import teacher02 from 'assets/images/teachers/teacher02.jpg';
import teacherDemo from 'assets/images/teachers/teacherDemo.jpg';

const TEACHER_LIST = [
  {
    name: 'Simon Lin',
    title: 'Canva | 領導產品設計師',
    image: teacher01,
  },
  {
    name: 'Min-yu Wu',
    title: ' Zalando | Lead & Senior Product Design',
    image: teacher02,
  },
  {
    name: '飛行導師',
    title: ' 即將公開 | 追蹤我們',
    image: teacherDemo,
  },
];

const TeacherCard = props => {
  const { image, title, name } = props;
  return (
    <Flex w="100%" direction="column">
      <AspectRatio w="100%" ratio={20 / 24}>
        <Image objectFit="cover" src={image} rounded="30px" />
      </AspectRatio>
      <Text pt="12px" textStyle="heading02" fontWeight="500">
        {name}
      </Text>
      <Text>{title}</Text>
    </Flex>
  );
};

const TeacherSection = () => {
  return (
    <Container py={{ base: '32px', lg: '72px' }} align="flex-start">
      <BookTitle title="飛行導師陣容" />
      <SimpleGrid
        w="100%"
        pt="20px"
        columns={{ base: 2, lg: 5 }}
        spacingX="30px"
        spacingY="20px"
      >
        {TEACHER_LIST.map(item => (
          <TeacherCard key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default TeacherSection;
