import HeaderButton from "../HeaderButton/index.js";
import Box from "@mui/material/Box";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme();
const getStoredColor = () => {
  return localStorage.getItem("_annotate_bgColor") || "#fff"; // Default to black if not found
};
const Container = styled("div")(() => ({
  width: "100%",
  display: "flex",
  backgroundColor: getStoredColor(),
  borderBottom: "1px solid #ccc",
  alignItems: "center",
  flexShrink: 1,
  boxSizing: "border-box",
}));

interface HeaderProps {
  leftSideContent?: ReactNode;
  hideHeaderText?: boolean;
  items: Array<{ name: string } | false | null | undefined>;

  onClickItem: (item: { name: string }) => void;
}

export const Header = ({
  leftSideContent = null,
  hideHeaderText = false,
  items,
  onClickItem,
}: HeaderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box flexGrow={1}>{leftSideContent}</Box>
        {items.map((item, index) =>
          item && typeof item === "object" && "name" in item ? (
            <HeaderButton
              key={`${item.name}-${index}`}
              hideText={hideHeaderText}
              onClick={() => onClickItem(item)}
              name={item.name}
            />
          ) : null
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Header;
