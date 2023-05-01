import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../api/Firebase";
import { Button, Input, Text } from "@chakra-ui/react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text>
        Email:
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Text>
      <Text>
        Password:
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Text>
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default useLogin;
