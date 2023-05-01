import { useNavigate } from "react-router-dom";
import useCatch from "../api/PostList";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

const CachePage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  const { loading, data, error } = useCatch(
    "https://jsonplaceholder.typicode.com/posts",
    []
  );

  return (
    <>
      <Button onClick={handleClick}>Go Back ⏪</Button>
      <Box>
        <Center>
          <Heading>ทดสอบการดึงข้อมูลเก็บในCatchแล้วเรียกใช้</Heading>
        </Center>
        <Center>
          <Box mt="5">
            {error ? (
              <Box>Failed to fetch data</Box>
            ) : loading ? (
              <Box>Loading data...</Box>
            ) : (
              data.map((post) => (
                <Box key={post.id}>
                  <Text fontSize="2xl">{post.title}</Text>
                  <Text>{post.body}</Text>
                </Box>
              ))
            )}
          </Box>
        </Center>
      </Box>
    </>
  );
};
export default CachePage;
