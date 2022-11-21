import { Text, Flex, Image, VStack, HStack } from '@chakra-ui/react';
import { Container, BookTitle } from 'components/layouts';
import avatar from 'assets/images/avatar.jpg';

const MemberProof = () => {
  return (
    <Container bgColor="white" py="40px">
      <HStack align="flex-start" spacing={{ base: '12px', lg: '32px' }}>
        <Image
          w={{ base: '40px', lg: '80px' }}
          h={{ base: '40px', lg: '80px' }}
          src={avatar}
        />
        <VStack align="flex-start">
          <Text textStyle="heading03" color="gray.600" maxW="600px">
            身為第一屆的學員，在參加讀書會期間 XXXOOO，
            每位夥伴、支持單位、飛行導師都沒有收任何一毛錢，完全是出自於自身的意願。
          </Text>
          <VStack align="flex-start">
            <Text textStyle="text01" color="blue.500" fontWeight="500">
              Belly
            </Text>
            <Text color="gray.500">第一屆學員, 現職為 Bitcoin 設計師</Text>
          </VStack>
        </VStack>
      </HStack>
    </Container>
  );
};

export default MemberProof;
