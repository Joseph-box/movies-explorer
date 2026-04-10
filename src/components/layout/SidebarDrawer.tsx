import app_title from "@/constants/appTitle";
import {
  AbsoluteCenter,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarDrawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Drawer.Root placement={"start"}>
      <Drawer.Trigger asChild>
        <IconButton
          aria-label="Open genres menu"
          variant={"plain"}
          size={"md"}
          color="white"
          _hover={{ bg: "gray.700" }}
        >
          <AbsoluteCenter>
            <GiHamburgerMenu />
          </AbsoluteCenter>
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header borderBottomWidth="1px" borderColor="gray.700">
              <Drawer.Title>{app_title}</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body p={4}>{children}</Drawer.Body>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default SidebarDrawer;
