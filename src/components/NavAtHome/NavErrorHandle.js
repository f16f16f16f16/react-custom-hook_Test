import { Button, } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const NavErrorHandle = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/error_handle");

    return (
        <Button onClick={handleClick}  colorScheme="green">Error Handling</Button>
    )
}
export default NavErrorHandle