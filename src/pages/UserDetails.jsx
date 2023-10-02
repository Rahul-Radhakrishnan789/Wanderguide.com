import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from '../utils/AxiosInstance'
import './UserDetails.css'

export const UserDetails = () => {

    const [age, setAge] = useState('');
    const [user,setUser] = useState('')

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const fetchUser = async() => {
      try{
       const userId = localStorage.getItem('authUserId')

       const response = await axios.get(`/api/users/displayuser/${userId}`)

       console.log(response.data.data)
       setUser(response.data.data)
      }
      catch(error){
        console.log('something went wrong',error)
      }
    }

    useEffect(() => {
      fetchUser()
    },[])
  return (
 <div className='main-details'>

<Box
component="form"
      sx={{
        '& .MuiTextField-root': { m: 2.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
   <TextField
          id="outlined-read-only-input"
          label="Username"
          defaultValue={user?.userName}
          inputProps={{
            readOnly: true,
          }}
        />
           <TextField
          id="outlined-read-only-input"
          label="Email"
          defaultValue={user?.email}
          inputProps={{
            readOnly: true,
          }}
        />

        <FormControl  sx={{ m: 3, minWidth: 120 , marginTop: '20px'}}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Gender"
          inputProps={{
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
          defaultValue={user?.phoneNumber}
          inputProps={{
            readOnly: true,
          }}
        />

<TextField
          id="outlined-read-only-input"
          label="Maritial Status"
          defaultValue={user?.mariatialStatus}
          inputProps={{
            readOnly: true,
          }}
        />

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
         label="Date of Birth"
         defaultValue={''} />
      </DemoContainer>
    </LocalizationProvider>
  
    
<TextField
          id="outlined-read-only-input"
          label="City"
          defaultValue={user?.city}
          inputProps={{
            readOnly: true,
          }}
        />

<TextField
          id="outlined-read-only-input"
          label="Pincode"
          defaultValue={user?.pinCode}
          inputProps={{
            readOnly: true,
          }}
        />

        
<TextField
          id="outlined-read-only-input"
          label="State"
          defaultValue={user?.state}
          inputProps={{
            readOnly: true,
          }}
        />
      
</Box>

    </div>
  )
}
