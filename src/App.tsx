import { Container, GlobalStyles } from "@mui/material";
import { Grid } from "@mui/material";
import { FirstHalf } from "./components/firstHalf";
import { SecondHalf } from "./components/secondHalf";

const defaultStyles = (
  <GlobalStyles
    styles={{
      body: { backgroundColor: "#F6FAFF" },
    }}
  />
);

function App() {
  return (
    <>
      {defaultStyles}
      <Container
        maxWidth={false}
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          spacing={3}
          sx={{
            width: "90%",
            height: "80%",
            mx: "auto",
            display: "flex",
            flexDirection: "rows",
          }}
        >
          <FirstHalf />
          <SecondHalf />
        </Grid>
      </Container>
    </>
  );
}

export default App;
