import { AppBar, Box, Toolbar, css, styled } from "@mui/material";
import { CustomLink } from "./CustomLink";

const StyledCustomLink = styled(CustomLink)(
  ({ theme }) => css`
    color: ${theme.palette.common.white};
  `
);

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: 2 }}>
          <StyledCustomLink fontSize={24} to="/">
            Bingo Check
          </StyledCustomLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
