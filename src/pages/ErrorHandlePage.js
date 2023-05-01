import { useRef } from "react";
import useErrorHandling from "../api/UserList";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorHandlePage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useErrorHandling(
    "https://jsonplaceholder.typicode.com/users",
    isComponentMounted,
    []
  );

  return (
    <>
      <Button onClick={handleClick}>Go Back ⏪</Button>
      <Box>
        <Center>
          <Heading>ทดสอบการดึงข้อมูลและจัดการerror</Heading>
        </Center>
        <Center>
          <Box mt="5">
            {error ? (
              <Box>Failed to fetch data</Box>
            ) : loading ? (
              <Box>Loading data...</Box>
            ) : (
              data.map((user) => (
                <Box key={user.id}>
                  <Text fontSize="2xl">{user.name}</Text>
                  <Text>{user.email}</Text>
                </Box>
              ))
            )}
          </Box>
        </Center>
      </Box>
    </>
  );
};
export default ErrorHandlePage;
