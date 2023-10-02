import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from '@mui/material/Button';

export const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box
        sx={{
          width: 1280,
          height: 563,
          display: "flex",
          flexDirection:'column',
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
            />
          </FormControl>
        </FormControl>
        <Button variant="contained" color="success"  sx={{m:3, width: "15ch",}}>
        Login
      </Button>
      </Box>
    </div>
  );
};
