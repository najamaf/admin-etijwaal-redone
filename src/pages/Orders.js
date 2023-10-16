import { Box, Flex, Heading, Input, Select, Stack, Text, chakra, Button} from '@chakra-ui/react'
import SingleTable from '../components/SingleTable';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


export default function Orders() {
  return (
     <Box as='section' mb={16}>
    <Heading pt={6} pb={2} as={'h2'} fontSize={'large'} ms={{base: 2, sm: 6, lg: 8}} fontWeight={'bold'}>Order listing</Heading> 
    <Box py={4} shadow={'lg'} bg={'dark'} px={6}  rounded={'md'} mx={{base: 2, sm: 6, lg: 8}}>
        <Flex justifyContent={'space-between'} flexWrap={'wrap'} mb={4} gap={4} direction={'row'}>
          <Stack direction={'row'} alignItems={{sm:'end', md: 'center', lg:'center'}}>
            <Text>Show</Text>
            <Select size={'xs'} defaultValue={10}>
            <option>10</option>  
            <option>25</option>  
            <option>100</option>  
            </Select>
            <Text>Entries</Text>
          </Stack>
          <Stack direction={'row'} flexWrap={{ base: 'wrap', md: 'nowrap', lg:'nowrap' }}>
          <Text>From</Text>
          <Input type='date' size={'xs'}/>
          <Text>To</Text>
          <Input type='date' size='xs'/>
          </Stack>
          <Stack direction={'row'}>
          <Input type='search' placeholder='search' size={'xs'}/>
          </Stack>
        </Flex>
         <SingleTable />
       <Stack flexWrap='wrap' direction="row" mt={4} textAlign='center' justify='space-between'>
          <chakra.span color='gray'>Showing results 1-12 of 200 results</chakra.span>
          <Stack spacing={4} direction='row' align='center'>
            <Button bg="transparent" size='xs'>
            <AiOutlineLeft color='black'/>
            </Button>
            <Button border="1px solid #eeee" bg="transparent" className='active' size='xs'>
                  1
            </Button>
            <Button border="1px solid #eeee" bg="transparent" size='xs'>
                    2
            </Button>
            <Button bg='transparent' size='xs'>
               <AiOutlineRight color='black'/>
            </Button>
            </Stack>
       </Stack>
    </Box>
     </Box>
  );
}
