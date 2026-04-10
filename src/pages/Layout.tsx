import NavBar from "@/components/layout/NavBar";
import Sidebar from "@/components/layout/Sidebar";
import { Box, Flex, Separator, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <VStack alignItems={"flex-start"} minH={"100vh"}>
      <NavBar />
      <Flex gap={4} height={"100%"} w={"full"}>
        <Box
          as="nav"
          w={{ base: "0", md: "260px" }}
          color="white"
          display={{ base: "none", lg: "block" }}
          p={3}
          flexShrink={0}
        >
          <Sidebar />
        </Box>

        <Separator
          orientation="vertical"
          display={{ base: "none", md: "block" }}
        />
        <Outlet />
      </Flex>
    </VStack>
  );
};

export default Layout;
