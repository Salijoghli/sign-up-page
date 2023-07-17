import { Grid } from "@mui/material";
import { Registration } from "../registration";
export const SecondHalf = () => {
  return (
    <Grid
      item
      xs={6}
      sx={{
        width: "50%",
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Registration />
    </Grid>
  );
};
