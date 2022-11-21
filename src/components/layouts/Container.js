import { Flex } from '@chakra-ui/react';

export function Container(props) {
  const { bgColor, ...rest } = props;
  return (
    <Flex w="100%" px="22px" bgColor={bgColor} justify="center">
      <Flex
        w={{ base: '100%', lg: '75%' }}
        maxW="1080px"
        direction="column"
        align="center"
        {...rest}
      >
        {props.children}
      </Flex>
    </Flex>
  );
}
