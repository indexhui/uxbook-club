import { Container, BookTitle } from 'components/layouts';

const ReviewSection = () => {
  return (
    <Container
      bgColor="#FFFAF9"
      py={{ base: '32px', lg: '72px' }}
      align="flex-start"
    >
      <BookTitle title="回顧第一屆" />
    </Container>
  );
};

export default ReviewSection;
