import { Box, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router";
import app_title from "@/constants/appTitle";
import SidebarDrawer from "./SidebarDrawer";

const NavBar = () => {
  return (
    <HStack
      py={4}
      px={6}
      gap={8}
      w={"100%"}
      h={73}
      as="header"
      bg="gray.900"
      borderBottom="1px solid"
      borderColor="gray.700"
    >
      <Box>
        <SidebarDrawer />
      </Box>

      <Box gap={6}>
        <Link to={"/"}>
          <Heading
            size="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            color="gray.100"
            _hover={{
              color: "purple.400",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {app_title}
          </Heading>
        </Link>
      </Box>
      <Link to={"/about"}>
        <Heading
          as="h2"
          size="md"
          fontWeight="medium"
          color="gray.300"
          _hover={{
            color: "white",
            transition: "color 0.15s ease-in-out",
          }}
        >
          About
        </Heading>
      </Link>
    </HStack>
  );
};

export default NavBar;
