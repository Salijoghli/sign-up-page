import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (myEmail: string) => {
    setEmail(myEmail);
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email !== "") {
      if (regex.test(email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    }
  };

  const handlePasswordChange = (myPassword: string) => {
    setPassword(myPassword);
    if (password.length < 8) setPasswordError(true);
    else setPasswordError(false);
  };

  const handleLoginButton = () => {
    if (email.trim() === "") {
      setEmailError(true);
      return;
    }
    if (password.trim() === "") {
      setPasswordError(true);
      return;
    }
    if (passwordError === false && emailError === false) alert("login success");
    else alert("try again");
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        py: 3,
      }}
    >
      <FormLabel>Email</FormLabel>
      <TextField
        variant="outlined"
        error={emailError}
        required
        helperText={emailError ? "Please input correct email" : ""}
        id="email"
        autoComplete="email"
        onChange={(e) => handleEmailChange(e.target.value)}
        inputProps={{
          style: {
            height: "10px",
          },
        }}
      />
      <FormLabel
        sx={{
          marginTop: 1,
        }}
      >
        Password
      </FormLabel>
      <TextField
        inputProps={{
          style: {
            height: "10px",
          },
        }}
        required
        error={passwordError}
        variant="outlined"
        id="password"
        type="password"
        onChange={(e) => handlePasswordChange(e.target.value)}
        helperText={passwordError ? "Please input correct password" : ""}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 1,
        }}
      >
        <FormControlLabel control={<Checkbox checked />} label="Remember me" />

        <Button
          variant="text"
          onClick={() => {
            alert("you forgot password");
          }}
        >
          Forgot password?
        </Button>
      </Box>
      <Button
        sx={{
          borderRadius: 4,
          py: 1,
          my: 1,
        }}
        type="submit"
        disableElevation
        variant="contained"
        onClick={() => handleLoginButton()}
      >
        Login
      </Button>
      <Divider sx={{ my: 3 }}>or</Divider>
      <Button
        sx={{
          borderRadius: 4,
          py: 1,
          my: 1,
          color: "black",
          backgroundColor: "white",
          borderColor: "#1A1110 !important",
        }}
        disableElevation
        variant="outlined"
        onClick={() => {
          alert("you tried to login with google");
        }}
        startIcon={
          <GoogleIcon
            sx={{
              color: "rgb(55,166,84)",
            }}
          />
        }
      >
        Sign in with Google
      </Button>
    </Box>
  );
};
