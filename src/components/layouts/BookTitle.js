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

import { BookIcon } from 'components/icons';

export function BookTitle({ title }) {
  return (
    <HStack ml="-12px" pb="12px">
      <BookIcon />
      <Text textStyle="heading02">{title}</Text>
    </HStack>
  );
}
