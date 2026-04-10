import { Link, List } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const SidebarLinkItem = ({
  title,
  link = "/",
  onClick,
  isCurrent = false,
}: {
  title: string;
  link?: string;
  onClick?: () => void;
  isCurrent?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <List.Item>
      <Link
        onClick={() => {
          if (onClick) onClick();
          navigate(link);
        }}
        style={{ width: "100%" }}
        whiteSpace={"nowrap"}
        px={4}
        py={1}
        color={"gray.400"}
        borderRadius="md"
        fontSize={"sm"}
        aria-current={isCurrent ? "page" : undefined}
        _hover={{
          bg: "whiteAlpha.300",
          color: "white",
          textDecoration: "none",
        }}
        _currentPage={{
          color: "gray.200",
          fontWeight: "semibold",
          bg: "whiteAlpha.100",
        }}
      >
        {title}
      </Link>
    </List.Item>
  );
};

export default SidebarLinkItem;
