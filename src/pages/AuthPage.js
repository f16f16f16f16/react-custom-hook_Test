import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";
const AuthPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <>
      <Button onClick={handleClick}>Go Back ⏪</Button>
      <Center>
        <Login/>
      </Center>
    </>
  );
};
export default AuthPage;
