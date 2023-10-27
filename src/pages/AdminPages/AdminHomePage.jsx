import React,{useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Logo from '../../assets/images/logo4.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HomeIcon from '@mui/icons-material/Home';
import { AdminCoupon } from './AdminCouponCreate';
import { ShowCoupons } from './ShowCoupons';
import {DisplayAllHotelOwners} from '../../components/DisplayAllHotelOwners'
import { DisplayAllUsers } from '../../components/DisplayAllUsers';
import { useNavigate } from 'react-router-dom';       
import "./adminHomepage.css";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const AdminHomePage = () => {

    const nav = useNavigate()

  const theme = useTheme();

  const [open, setOpen] = useState(true);

  const [selectedComponent, setSelectedComponent] = useState(null);
  

  const renderComponent = () => {
    switch (selectedComponent) {
      case "componentA":
        return <AdminCoupon />;
      case "componentB":
        return <ShowCoupons />;
      case 'componentC':
        return <DisplayAllHotelOwners/>
        case 'componentD':
            return <DisplayAllUsers/>
      default:
        return <div>
          <Box>
          <h1>Hey... Look what have you done!</h1>
           
          </Box>
        </div>;
    }
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='success'  >
        <div className="adminnav">
        <img src={Logo} alt="Logo" width={200} />{" "}
        </div>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
            <h6>Manage your account</h6>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding>
              <ListItemButton  onClick={() => setSelectedComponent('componentD')}>
                <ListItemIcon>
                <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary={'Manage Users'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
         
            <ListItem disablePadding>
              <ListItemButton  onClick={() => setSelectedComponent('componentC')}>
                <ListItemIcon>
                 < HomeWorkIcon />
                </ListItemIcon>
                <ListItemText primary={'Manage Hotel Owners'} />
              </ListItemButton>
            </ListItem>
     
        </List>
        <Divider />
        <List>
         
         <ListItem disablePadding>
           <ListItemButton  onClick={() => setSelectedComponent('componentB')}>
             <ListItemIcon>
              <DiscountIcon />
             </ListItemIcon>
             <ListItemText primary={'Coupons'} />
           </ListItemButton>
         </ListItem>
  
     </List>
     <Divider />
        <List>
         
         <ListItem disablePadding>
           <ListItemButton  onClick={() => setSelectedComponent('componentA')}>
             <ListItemIcon>
              <LocalOfferIcon />
             </ListItemIcon>
             <ListItemText primary={'Create Coupons'} />
           </ListItemButton>
         </ListItem>
  
     </List>
     <Divider />
        <List>
         
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon>
              <CurrencyRupeeIcon/>
             </ListItemIcon>
             <ListItemText primary={'Total Revenue'} />
           </ListItemButton>
         </ListItem>
  
     </List>
     <Divider />
        <List>
         
         <ListItem disablePadding>
           <ListItemButton onClick={() => nav('/')}>
             <ListItemIcon>
              <HomeIcon/>
             </ListItemIcon>
             <ListItemText primary={'Back to home'} />
           </ListItemButton>
         </ListItem>
  
     </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {renderComponent()}
      </Main>
    </Box>
  );
}
