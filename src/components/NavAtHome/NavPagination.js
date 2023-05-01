import { Button, } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const NavPagination = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/pageination");

  return (
    <Button onClick={handleClick} colorScheme="red">
      Pagination
    </Button>
  );
};
export default NavPagination;
