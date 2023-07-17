import { Stack, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WavingHandIcon from "@mui/icons-material/WavingHand";

import { Form } from "../form";

export const Registration = () => {
  return (
    <Stack
      sx={{
        width: "80%",
        height: "100%",
        mx: "auto",
        py: 4,
      }}
    >
      <AlternateEmailIcon
        sx={{
          fontSize: "2.5rem",
          color: "rgb(22,20,72)",
        }}
      />
      <Typography
        component="p"
        variant="h6"
        sx={{ color: "black", fontWeight: "bold", py: 1 }}
      >
        Hey, hello <WavingHandIcon sx={{ color: "rgb(254,207,75)" }} />
      </Typography>
      <Typography
        component="p"
        variant="body2"
        sx={{ color: "black", fontWeight: "bold" }}
      >
        Enter the information you entered while registering.
      </Typography>

      <Form />
    </Stack>
  );
};
