import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blue.900"}>
      <Button variant={"ghost"} color={"white"}  sx={{ _hover: { backgroundColor: 'white', color: 'black' } }}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}  sx={{ _hover: { backgroundColor: 'white', color: 'black' } }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}  sx={{ _hover: { backgroundColor: 'white', color: 'black' } }}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
