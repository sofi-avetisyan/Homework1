import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { 
  Box,
  Text,
  Link
} from '@chakra-ui/react'
import Images from "./Images";

function App() {
  return (
   <>
    <BrowserRouter>
      <ChakraProvider>
        <Box
        display={"flex"}
        >
          <Sidebar/>

          
          <Router/>
          {/* <Images/> */}
        </Box>
            
      </ChakraProvider>
    </BrowserRouter>
   </>
  );
}

export default App;
