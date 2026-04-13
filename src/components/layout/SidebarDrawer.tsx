import app_title from "@/constants/appTitle";
import {
  AbsoluteCenter,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useState } from "react";

const SidebarDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const display = { base: "block", lg: "none" };

  return (
    <Drawer.Root
      open={open}
      onOpenChange={({ open }) => setOpen(open)}
      placement={"start"}
    >
      <Drawer.Trigger asChild>
        <IconButton
          aria-label="Open genres menu"
          variant={"plain"}
          size={"md"}
          color="white"
          _hover={{ bg: "gray.700" }}
          display={display}
        >
          <AbsoluteCenter>
            <GiHamburgerMenu />
          </AbsoluteCenter>
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Positioner>
          <Drawer.Content display={display}>
            <Drawer.Header borderBottomWidth="1px" borderColor="gray.700">
              <Drawer.Title>{app_title}</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body p={4}>
              <Sidebar onClose={handleClose} />
            </Drawer.Body>

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
