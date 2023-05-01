import { Button, } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
const NavAuth = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/auth");

    return (
        <Button onClick={handleClick}  colorScheme="yellow">Authentication</Button>
    )
}
export default NavAuth