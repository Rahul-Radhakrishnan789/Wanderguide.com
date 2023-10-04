import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

export const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [loginValues, setLoginValues] = useState({
    userName: "",
    password: "",
  });

  const nav = useNavigate();

  console.log(loginValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    const envUserName = process.env.REACT_APP_ADMIN_USERNAME;
    const envPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    console.log(envPassword, envUserName);

    if (loginValues.userName === "rahul" && loginValues.password === "12345") {
      nav("/adminhome");
      setLoginValues("");
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: 1280,
          height: 563,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#b9f6ca",
        }}
      >
        <FormControl sx={{ m: 1, width: 300 }}>
          <TextField
            required
            id="outlined-required"
            label="Enter your name"
            name="userName"
            value={loginValues.userName}
            onChange={handleChange}
          />
          <br />

          <FormControl sx={{ width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              name="password"
              value={loginValues.password}
              onChange={handleChange}
            />
          </FormControl>
        </FormControl>
        <Button
          variant="contained"
          color="success"
          sx={{ m: 3, width: "15ch" }}
          onClick={handleClick}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};
