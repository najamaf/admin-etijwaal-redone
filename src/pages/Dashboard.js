import { Box, Flex, Stack, Image, Heading, HStack, VStack,chakra, Input, Text } from "@chakra-ui/react";
import BarChart from "../charts/BarChart";
import DonutChart from "../charts/DonutChart";
import AreaChart from "../charts/AreaChart";
import LineChart from "../charts/LineChart";
import {GrStackOverflow} from 'react-icons/gr'
import BarChartHasBackground from "../charts/BarChartHasBackground";
import TinyBarChart from "../charts/TinyBarChart";



export default function Dashboard() {


    return (
      <Box maxW={'100%'} my={8} px={8} as="section">
            <Heading mb={4} fontSize="22px">Dashboard</Heading>
          <HStack borderRadius={10} direction={'row'} flexWrap={{base: 'wrap', sm: 'wrap', md:'wrap', lg: 'nowrap'}} shadow="xl" gap={12}  bg="#fff" py={6} px={4} w={'100%'}>
              <Stack maxW={'100%'} alignItems="center" w={{sm:'100%', md: '100', lg: '100%'}} direction="row">
                 <Box flex={1}>
                 <Heading fontSize="22px">32, 451</Heading>
                 <Text color="orange.500">Visits</Text> 
                 </Box>
                 <Box flex={1}>
                  <LineChart />
                 </Box>
              </Stack>
              <Stack maxW={'100%'} alignItems="center" w={{sm:'100%', md: '100', lg: '100%'}} direction="row">
                 <Box flex={1}>
                 <Heading fontSize="22px">32, 451</Heading>
                 <Text color="orange.500">Visits</Text> 
                 </Box>
                 <Box flex={1}>
                  <LineChart />
                 </Box>
              </Stack>
              <Stack maxW={'100%'} alignItems="center" w={{sm:'100%', md: '100', lg: '100%'}} direction="row">
                 <Box flex={1}>
                 <Heading fontSize="22px">32, 451</Heading>
                 <Text color="orange.500">Visits</Text> 
                 </Box>
                 <Box flex={1}>
                  <LineChart />
                 </Box>
              </Stack>
              <Stack maxW={'100%'} alignItems="center" w={{sm:'100%', md: '100', lg: '100%'}} direction="row">
                 <Box flex={1}>
                 <Heading fontSize="22px">32, 451</Heading>
                 <Text color="orange.500">Visits</Text> 
                 </Box>
                 <Box flex={1}>
                  <LineChart />
                 </Box>
              </Stack>
              <Stack maxW={'100%'} alignItems="center"w={{sm:'100%', md: '100', lg: '100%'}} direction="row">
                 <Box flex={1}>
                 <Heading fontSize="22px">32, 451</Heading>
                 <Text color="orange.500">Visits</Text> 
                 </Box>
                 <Box flex={1}>
                  <LineChart />
                 </Box>
              </Stack>
          </HStack>




         <Flex flexWrap="wrap" direction={{base:"column", sm: "column", md: "row", lg:"row" }} gap={{base:5, sm: 5, lg: 10}}>
           <BarChart />
          <Box maxW={'100%'} bg={'#fff'} borderRadius={10}  p={4} flex="1" my={{ base: 4, sm: 4, lg:10 }} shadow="xl">
          <Box pb={4} mb={20} borderBottom='1px solid lightgray'>
          <Heading fontSize='22px'>Trafic sources</Heading>
           </Box> 
           <DonutChart />
          </Box>
         </Flex>
         
         <Flex direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }} gap={9}>
          <VStack gap={10} flex="3">
            <Stack gap={8} w={'100%'} direction={{base: "column", lg: "row"}}>
            <Box bg={'#fff'} shadow={'xl'} p={2} borderRadius={10} maxW={'100%'} flex="1">
               <AreaChart />
            </Box>
             <Box bg={'#fff'} borderRadius={10} maxW={'100%'} p={2} shadow={'xl'} flex="1">
                <AreaChart />
            </Box>
            </Stack>

            <Stack w={'100%'} gap={8} direction={{base: "column", lg: "row"}}>
            <Box bg={'#fff'} maxW={'100%'}  p={4} shadow={'xl'} borderRadius={10} flex="1">
            <Stack direction="row" gap={14}>
                      <Box flex="1">
                          <chakra.span>Total Sales</chakra.span>
                          <Heading mb={2} fontSize="26px">$7,590</Heading>
                          <Box sx={{
                            width: '100%',
                            borderRadius: 10,
                            background: 'lightgray',
                            padding: '0.5em 0',
                          }}></Box>
                      </Box>
                      <Box flex="1">
                          <chakra.span>Active users</chakra.span>
                          <Heading mb={2} fontSize="26px">$7,590</Heading>
                          <Box sx={{
                            width: '100%',
                            borderRadius: 10,
                            background: 'lightgray',
                            padding: '0.5em 0',
                          }}></Box>
                      </Box>
                 </Stack>
            </Box>
       
             <Box bg={'#fff'} p={4} maxW={'100%'}  shadow={'xl'} flex="1" borderRadius={10}>
                 <Stack direction="row" gap={14}>
                      <Box flex="1">
                          <chakra.span mb={2}>Total Sales</chakra.span>
                          <Heading mb={2} fontSize="26px">$7,590</Heading>
                          <Box sx={{
                            width: '100%',
                            borderRadius: 10,
                            background: 'lightgray',
                            padding: '0.5em 0',
                          }}></Box>

                      </Box>
                      <Box flex="1">
                          <chakra.span mb={2}>Active users</chakra.span>
                          <Heading mb={2} fontSize="26px">$7,590</Heading>
                          <Box sx={{
                            width: '100%',
                            borderRadius: 10,
                            background: 'lightgray',
                            padding: '0.5em 0',
                          }}></Box>
                      </Box>
                 </Stack>
            </Box>
            </Stack>
          </VStack>
           
           <Box bg='#fff' shadow='xl' px={6} py={3} borderRadius={10} flex="1">
            <Heading fontSize="24px">Website audience metrics</Heading>
              <HStack mt={8}>
                <VStack flex={1} w={'100%'} alignItems="flex-start">
                  <Box>
                    <Heading fontSize="24px">523,200</Heading>
                    <Text mb={2}>Page views</Text>
                    <hr />
                  </Box>
                  <Box mb={2}>
                    <Heading fontSize="24px">753,098</Heading>
                    <Text>Bounce Rate</Text>
                  </Box>
                  <Box>
                    <HStack>
                        <Box background="orange.400" p={2} borderRadius={6}>
                        <GrStackOverflow color="#fff" size={20}/>
                        </Box>
                      <Heading alignSelf="flex-end">3,605</Heading>
                    </HStack>
                    <chakra.span sx={{
                      fontWeight: 'bold'
                    }}>Since last week</chakra.span>
                    <Text fontSize="small">0.57% (30 days)</Text>
                  </Box>
                </VStack>
                 <VStack flex={1}>
                  <TinyBarChart />
                 </VStack>
              </HStack>
                
             
           </Box>
         </Flex>
          
      </Box>
    )
}