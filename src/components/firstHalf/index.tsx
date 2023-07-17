import { Grid, createTheme, ThemeProvider } from "@mui/material";

import { TextBox } from "../text-box";

const theme = createTheme({
  typography: {
    fontWeightRegular: 600,
  },
  palette: {
    text: {
      primary: "#ffffff",
    },
  },
});

export const FirstHalf = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        xs={6}
        sx={{
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(to left, rgb(115,183,255), rgb(223,200,253))",
          alignItems: "center",
          display: "flex",
          color: "white",
        }}
      >
        <TextBox />
      </Grid>
    </ThemeProvider>
  );
};
