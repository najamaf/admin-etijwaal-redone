import { Avatar, Button, HStack,Stack, useMediaQuery } from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom"
import { setOpen } from "../redux/slices/openSlice"
import { useDispatch } from 'react-redux'

const Header = ({isOpen}) => {
   const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 1024px)")
   const dispatch = useDispatch();

    return(
       <HStack  py={3}  px={{base: 2, sm: 6, lg: 6}} bgColor={"orange.400"} justifyContent="space-between">
          <Stack direction="row" alignItems='center'>
            <GiHamburgerMenu onClick={() => dispatch(setOpen())} color="#fff" oncl style={{
               display: isMobile[0] === false ? 'none' : 'block' 
            }}  />
              <Link style={{color:'#fff'}}>Help: 123 456 789</Link>
          </Stack>
   
           <Stack direction="row" alignItems="center">
              <Button color="#fff" bg="transparent">Logout</Button>
              <Avatar size='sm' src='https://bit.ly/kent-c-dodds' />
           </Stack>
       </HStack>
    )

}

export default Header