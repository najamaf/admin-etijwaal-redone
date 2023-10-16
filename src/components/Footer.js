import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import '../css/styles.css'

const Footer = () => {
  const media = useMediaQuery("(min-width: 1024px)"
  ) 
  const media500 = useMediaQuery("(min-width: 400px) and (max-width: 500px)"
  ) 
  
    return(
       <Box as="footer" width={'100%'} shadow='md' bg={'#fff'} py={6}>
        <Text color="gray" textAlign="center">&copy; ETijwaal copyrights reserved</Text>
       </Box>
    )
}

export default Footer;