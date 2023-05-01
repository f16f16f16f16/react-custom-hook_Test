import { Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const NavCache = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/cache");

  return (
    <Button onClick={handleClick} colorScheme="orange">
      Caching
    </Button>
  );
};
export default NavCache;
