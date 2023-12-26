import { Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import React from "react"
export default function About(){
    return(<>
    <Flex id="Sobre" flexDirection={"column"} justifyContent={'center'} alignItems={'center'} gap={10}>
        <Stack   spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          mb={{ base: 36, md: 40 }}>
            <Image src={'pfp.jpg'} borderRadius={'full'} boxSize={'300px'} margin={'auto'} />
                     <Heading
            fontWeight={600} as={'h3'} fontSize={'3xl'} textAlign={'center'}>Olá sou Renata Dos Santos,Artesã e fundadora do Ateliê Reh Artes.</Heading>
            <Text textAlign={'center'} mx={20} fontSize={{base: '16px'}}>Faço produto de enxoval de cozinha para facilitar o seu dia a dia e levar alegria para o seu lar
        Nas minhas redes sociais você tambem encontra dicas valiosas para aplicar na sua casa receitas fáceis e deliciosas e um pouquinho da minha rotina.

        Fico muito feliz por você estar aqui e acompanhar meu trabalho

        Fique a vontade para compartilhar comigo suas experiências,sugestões e encomendar algo.</Text>
        </Stack>
        </Flex>
    </>)    
}