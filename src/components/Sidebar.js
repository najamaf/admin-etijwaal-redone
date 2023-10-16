import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, Image, useMediaQuery, Avatar, Stack, Box, Text, Heading, DrawerBody, UnorderedList, ListItem, AvatarBadge } from '@chakra-ui/react'
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import '../css/styles.css'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { pathname } = useLocation()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 1024px)")
  const open = useSelector(state => state.open).open;


  useEffect(() => {
    if (open) {
      onOpen()
    }
  }, [onOpen, open])

  if (isMobile[0] === false) {
    return (
      <Box
        position={'fixed'}
        shadow='md'
        zIndex= '1'
        h="100vh"
        bg="#fff"
        py={8}
        width={'256px'}
        
      >
        <Image w={200} mx="auto" px={2} mb={6} src="/assets/logo/etijwaal.png" />
        <Stack py={2} mx="auto" mb={10} w={200} borderRadius={4} direction="row" alignItems="center" bg="dark">
          <Avatar size="sm" src='https://bit.ly/kent-c-dodds'>
          <AvatarBadge boxSize='0.8em' bg='green.500' />
          </Avatar>
          <Box>
            <Heading fontSize="16px" fontWeight={"medium"}>Randall Summers</Heading>
            <Text as="p" fontSize="x-small">
              Premium users
            </Text>
          </Box>
        </Stack>
        <UnorderedList mt={4} p={0} margin={0}>
          <ListItem py={2} mb={4} className={pathname === '/' ? 'active' : ''} color='#000' listStyleType="none" w="100%">
            <NavLink
              to='/'
              style={{ paddingLeft: 50, fontWeight: 500 }}
            >Dashboard</NavLink>
          </ListItem>
          <ListItem className={pathname === '/orders' ? 'active' : ''} color='#000' py={2} mb={4} listStyleType="none" w="100%">
            <NavLink to='/orders' style={{ paddingLeft: 50, fontWeight: 500 }}>Orders</NavLink>
          </ListItem>
        </UnorderedList>
      </Box>
    )
  } else {
    return (
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement='left'
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent py={6}>
          <DrawerCloseButton hidden={!isMobile[0]} />
          <DrawerHeader mb={6} px={10}>
            <Image mb={6} width={200} src='/assets/logo/etijwaal.png' />
            <Stack p={2} borderRadius={10} direction="row" alignItems="center" bg={"dark"}>
            <Avatar size="sm" src='https://bit.ly/kent-c-dodds'>
               <AvatarBadge boxSize='0.8em' bg='green.500' />
            </Avatar>
              <Box ms={2}>
                <Heading fontSize="16px" fontWeight={600}>Randall Summers</Heading>
                <Text as="p" fontSize="xs">Premuim users</Text>
              </Box>
            </Stack>
          </DrawerHeader>
          <DrawerBody p={0}>
            <UnorderedList m={0}>
              <ListItem width={'100%'} mb={3} py={2} className={pathname === '/' ? 'active' : ''} color={'#000'} listStyleType='none'>
                <NavLink to={'/'} style={{
                  paddingLeft: 50
                }}>Dashboard</NavLink>
              </ListItem>
              <ListItem className={pathname === '/orders' ? 'active' : ''} mb={3} py={2} color='#000' listStyleType='none'>
                <NavLink to={'/orders'} style={{
                  paddingLeft: 50
                }}>Orders</NavLink>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }
};


export default Sidebar;