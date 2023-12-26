import { Container, Stack,Link,Text } from "@chakra-ui/react"

export default function DevContacts(){
    return (
        <Container backgroundColor={'blue'} 
            as={Stack}
            
            direction={{ base: 'column', md: 'row' }}
            width={'100%'} margin={0} padding={'auto'}
            >
            <Text color={'white'}>© 2023 - Matheus Evangelista</Text>
            <Text color="white">Contatos</Text>
            <Link color={'white'} href='mailto:matheus_santos_evangelista@hotmail.com'>matheus_santos_evangelista@hotmail.com</Link>
            <Link color={'white'} href='https://wa.me/554192582201'>41 99123-9810</Link>
        </Container>
    )
}