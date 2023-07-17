import { Stack, Typography } from "@mui/material";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

export const TextBox = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        width: "90%",
        height: "70%",
        minHeight: "70%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        opacity: "0.9",
        mx: "auto",
        py: { xs: 2, sm: 4, md: 5 },
        px: { xs: 3, sm: 5, md: 10 },
      }}
    >
      <Typography variant="h4" component="p">
        <ChangeHistoryIcon
          sx={{
            fontSize: "2.5rem",
            transform: "rotate(90deg)",
            verticalAlign: "middle",
          }}
        />{" "}
        Digital
      </Typography>
      <Typography variant="h4" component="p">
        platform
      </Typography>
      <Typography variant="h4" component="p">
        for distance
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{
          color: "rgb(23,23,80)",
        }}
      >
        learning.
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{
          fontSize: ".7rem",
          paddingTop: 2,
        }}
      >
        You will never know everything.
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{
          fontSize: ".7rem",
        }}
      >
        But you will know more.
      </Typography>
    </Stack>
  );
};
