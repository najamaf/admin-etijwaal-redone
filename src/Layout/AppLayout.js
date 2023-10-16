  import { Box,  Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
  import Sidebar from "../components/Sidebar";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import '../css/styles.css'

  const AppLayout = ({ children }) => {
      const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 1024px)")
    return (
      <>
            <Grid gap={0} 
            templateColumns={isMobile[0] === true ? "1fr" : "250px 1fr"}
            templateAreas={
              isMobile[0] === true ? `"header"` : 
            `"sidebar header"`
            } minH="100vh">
              <GridItem area={'sidebar'} colSpan={1}>
                <Sidebar />
              </GridItem>
              <GridItem bg={'dark'} minHeight={'100vh'} colSpan={1000} position={'relative'} area={'header'}>
                <Header />
                <Box>
                {children}  
                </Box>
                <Footer />
              </GridItem>
            </Grid> 
      </>
    );
  };

  export default AppLayout;
