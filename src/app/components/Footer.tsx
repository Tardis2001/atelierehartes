'use client'

import {
  Box,
  chakra,
  Container,
  Link,
  LinkBox,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube,FaWhatsapp, FaFacebook} from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithSocial() {
  return (
    <>
    <Box id='Contatos' as='footer' role='contentinfo'
      bg={useColorModeValue('#F499B8', '#A7145A')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Whatsapp'} href={'https://wa.me/554191239810'}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/Renatamimosefofurices'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} href={' https://www.instagram.com/atelie.reh.artes'}>
            <FaInstagram />
          </SocialButton>
          <Link href='mailto:atelie.reh.artes@gmail.com'>atelie.reh.artes@gmail.com</Link>
        
        </Stack>
      </Container>


   </Box>
 
    </>
  )
}
