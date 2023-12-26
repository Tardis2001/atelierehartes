'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
}: {
  src: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
      </Stack>
    </Flex>
  )
}

export default function Feedbacks() {
  return (
    <Box id='FeedBack' bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>O que os  nossos clientes acham dos produtos</Heading>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Melhores Presentes</TestimonialHeading>
              <TestimonialText>
              “Ainn Re tô até emocionada ela vai chorar quando ver porque ela não sabe nem espera que vou dar pra ela de presente ficou maravilhoso🥰💓👏”
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'placeholder.png'
              }
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Melhores Designs</TestimonialHeading>
              <TestimonialText>
              “Eu amei 🥰🥰 tudo muito lindo, com bom acabamento. super recomendo🥰😘😘 Obrigada Re 😘😘😘”
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'placeholder.png'
              }
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Feito com amor ❤️</TestimonialHeading>
              <TestimonialText>
              “Boa noite Re Obrigada por ter nos atendido tão prontamente e os saquinhos ficaram lindos eu, Raquel e a Renata ficamos bem felizes e os professores então ficaram muito felizes. Ficou uma graça,obrigada mesmo de coração e o carinho e a perfeição como sempre💓”
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'placeholder.png'
              }
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
