import React ,{useState,useEffect} from 'react'
import axios from '../utils/AxiosInstance'
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from '@mui/material/Button';

export const DisplayAllUsers = () => {

    const [updateFlag, setUpdateFlag] = useState(false)
    const [users,setUsers] =useState([])
    

    console.log(users)
    
        const fetchUsers = async() => {
            try{
                const response = await axios.get('/api/admin/fetchallusers')
    
                if(response){
                    setUsers(response.data.data)
                }
            }
            catch(error){
                console.log('something went wrong')
            }
        }
    
        useEffect(() => {
            fetchUsers()
        },[])
        

        const blockUser = async(userId) => {
            try{
            const response = await axios.put(`/api/admin/blockuser/${userId}`)

            console.log(response.data.data)
            setUpdateFlag(!updateFlag)
            }
            catch(error){
                console.log('something went wrong',error)
            }
        }

        const unblockUser = async(userId) => {
            try{
                const response = await axios.put(`/api/admin/unblockuser/${userId}`)
    
                console.log(response.data.data)
                setUpdateFlag(!updateFlag)
                }
                catch(error){
                    console.log('something went wrong',error)
                }
            }

            useEffect(() => {
                fetchUsers();
              }, [updateFlag]);
        
  return (
    <div>
            <TableContainer component={Paper}>
      <Table aria-label="User Table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Username</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Revenue Generated</strong></TableCell>
            <TableCell><strong>Block/Unblock</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.totalRevenue}</TableCell>
              <TableCell>
                 {user.blocked === false ?
            <Button size="small" variant='contained' onClick={() => blockUser(user._id)}>Block</Button>
            :
            <Button size="small" variant='contained' onClick={() => unblockUser(user._id)}>Unblock</Button>
                 }
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}
