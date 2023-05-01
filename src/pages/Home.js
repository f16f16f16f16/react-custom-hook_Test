import { Box, Center, Heading, VStack } from "@chakra-ui/react";

import NavPagination from "../components/NavAtHome/NavPagination";
import NavCache from "../components/NavAtHome/NavCache";
import NavErrorHandle from "../components/NavAtHome/NavErrorHandle";
import NavAuth from "../components/NavAtHome/NavAuth";


const Home = () => {

  return (
    <Box>
      <Center>
        <Heading mt={50} mb={50}>
          กดเพื่อไปยังหน้าต่างๆ
        </Heading>
      </Center>
      <Center>
        <VStack spacing={5}>
          <NavErrorHandle/>
          <NavCache />
          <NavPagination />
          <NavAuth /> 
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;
