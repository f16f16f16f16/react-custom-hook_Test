import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import usePhotoPagination from "../api/PhotoList";

const PaginationPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  const { photos, currentPage, totalPages, nextPage, prevPage } =
    usePhotoPagination();

  return (
    <>
      <Button onClick={handleClick}>Go Back ⏪</Button>
      <Center>
        <Box>
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} />
          ))}
          <Center>
            <HStack>
              <Button onClick={prevPage} disabled={currentPage === 1}>
                Prev
              </Button>
              <Text>
                Page {currentPage} of {totalPages}
              </Text>
              <Button onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </Button>
            </HStack>
          </Center>
        </Box>
      </Center>
    </>
  );
};
export default PaginationPage;
