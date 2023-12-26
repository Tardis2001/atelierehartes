'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = ['Sobre', 'Trabalhos', 'FeedBacks', 'Contatos']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
 
  return (
    <>
      <Box bg={useColorModeValue('#F499B8', '#A7145A')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        
          <Flex alignItems={'center'} direction={'row'} width={'100%'} justifyContent={'space-between'}>
            <Box><Image src='Logo.png' alt='Logo' width={16} height={16}/></Box>
            <Box display={'Flex'}>
                <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                  {/* {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))} */}
                  <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#Sobre'}>
                      Sobre
                  </Box>
                  <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#Trabalhos'}>
                      Trabalhos
                  </Box>
                  <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#FeedBack'}>
                      Feedbacks
                  </Box>
                  <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#Contatos'}>
                      Contatos
                  </Box>
                </HStack>
                <HStack spacing={5}>
                  <Button onClick={toggleColorMode}>
                      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
                  <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                  />
                </HStack>
              </Box>
          </Flex>
          
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#Sobre'}>
                      Sobre
                  </Box>
                  <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#Trabalhos'}>
                      Trabalhos
                  </Box>
                  <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#FeedBack'}>
                      Feedbacks
                  </Box>
                  <Box
                  as="a"
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#Contatos'}>
                      Contatos
                  </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    

    </>
  )
}
