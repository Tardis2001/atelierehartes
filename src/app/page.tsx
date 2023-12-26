import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeedBacks from './components/Feedbacks' 
import Footer from './components/Footer'
import DevContacts from './components/DevContacts'
import Works from './components/Works'
export default function Home() {
  return (<>
      <ChakraProvider>
        <NavBar/>
        <Hero/>
        <About/>
        <Works/>
        <FeedBacks/>
        <Footer/>
        {/* <DevContacts/> */}
    </ChakraProvider>
  </>
  )
}
