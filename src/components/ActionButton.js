import { Text, Flex, VStack, Image, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ActionButton = () => {
  return (
    <Flex w="100%" justify="center">
      <Flex
        border="1px solid #666"
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
        <Text color="gray.500">快來報名</Text>
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
    </Flex>
  );
};

export default ActionButton;
