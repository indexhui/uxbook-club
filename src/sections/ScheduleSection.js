import { Text, Flex, Image, SimpleGrid, Button } from '@chakra-ui/react';
import { Container, BookTitle } from 'components/layouts';

const SCHEDULE_LIST = [];

const ScheduleCard = () => {
  return (
    <Flex
      bgColor="#F2EAE9"
      border="1px solid white"
      py="32px"
      pl="20px"
      pr="10px"
      borderRadius="30px 2px 2px 30px"
    >
      <Flex direction="column" pr="20px">
        <Text textStyle="text01" color="orange.500" fontSize="16px" pb="12px">
          COURSE 2:
        </Text>
        <Text textStyle="heading03" fontWeight="700">
          Conduct UX Research and Test Early Concepts
        </Text>
      </Flex>
      <Flex direction="column" justify="space-between">
        <Text color="gray.500" fontSize="14px">
          2023.01.15
        </Text>
        <Button bgColor="#E8DFDF" color="#424242" rounded="full">
          More
        </Button>
      </Flex>
    </Flex>
  );
};

const ScheduleSection = () => {
  return (
    <Container
      bgColor="orange.200"
      py={{ base: '32px', lg: '72px' }}
      align="flex-start"
    >
      <BookTitle title="讀書會排程" />
      <SimpleGrid
        pt="20px"
        columns={{ base: 1, lg: '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </SimpleGrid>
    </Container>
  );
};

export default ScheduleSection;
