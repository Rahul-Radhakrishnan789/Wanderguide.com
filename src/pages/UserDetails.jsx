import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Button } from "@mui/material";
import axios from "../utils/AxiosInstance";
import "./UserDetails.css";

export const UserDetails = () => {
  const [age, setAge] = useState("");
  const [user, setUser] = useState({});


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem("authUserId");

      const response = await axios.get(`/api/users/displayuser/${userId}`);

      setUser(response.data.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="main-details">
      <Box     
        sx={{
          "& .MuiTextField-root": { m:2.5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
      
        <TextField
          id="outlined-read-only-input"
          label="Username"
          value={user.userName || '' }
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Email"
          value={user?.email || ''}
          inputProps={{
            readOnly: true,
          }}
        />

        <FormControl sx={{  minWidth: '25ch', position:'absolute',top:'283px',left:'530px' }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Gender"
            InputProps={{
              readOnly: true,
            }}
            onChange={handleChange}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-read-only-input"
          label="Contact Number"
          value={user?.phoneNumber || ''}
          inputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="outlined-read-only-input"
          label="Maritial Status"
          value={user?.mariatialStatus  || ''}
          inputProps={{
            readOnly: true,
          }}
        />
 
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Date of Birth" defaultValue={""} />
          </DemoContainer>
        </LocalizationProvider>
       
        <TextField
          id="outlined-read-only-input"
          label="City"
          value={user?.city || ''}
          inputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="outlined-read-only-input"
          label="Pincode"
          value={user?.pinCode || ''}
          inputProps={{
            readOnly: true,
          }}
        />
      
        <TextField
          id="outlined-read-only-input"
          label="State"
          value={user?.state || ''}
          inputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Box sx={{  position:'relative',top:'195px',left:'-330px' }}>
      <Button  variant="contained" color="secondary" size="large" startIcon={< ModeEditIcon/>}>EDIT</Button>
      </Box>
     
    </div>
  );
};
