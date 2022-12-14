import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
//import { makeStyles} from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';



import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';





const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
function ResponsiveAppBar() {
    
    //menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  




  
  
  
  return (
    
    <AppBar position="fixed" maxWidth="xl" sx={{backgroundColor:'white',boxShadow:'none'}}>
      <Container maxWidth="xl"  sx={{}}>
        <Toolbar  sx={{color:'black',}}>
     
   
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Netlify
          </Typography>
          <div>
      <Button
        id="demo-customized-button2"
        aria-controls={open ? 'demo-customized-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        color="action"
        sx={{textTransform:'none', fontWeight: "bold",}}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Platform
      </Button>
     
      <StyledMenu
        id="demo-customized-menu2"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button2',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edge Function
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
         Deploy Previews

        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          E-Commerce
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          Web Apps
        </MenuItem>
      </StyledMenu>
    </div>
    
          <Button variant="text" size="large" color="inherit" sx={{ 
                  fontWeight: "bold",
                  textTransform: "none",color:"black"}}>
           Integrations
         </Button>
         <Button variant="text" size="large" color="inherit" sx={{ 
                  fontWeight: "bold",
                  textTransform: "none",}}>
          Docs
         </Button>
         <Button variant="text" size="large" color="inherit" sx={{ 
                  fontWeight: "bold",
                  textTransform: "none",}}>
          Pricing
         </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },color:'black' }}>
            
        
         
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      
          </Box>

          <Box sx={{ flexGrow: 1 }}>
          <IconButton aria-label="delete">
        <SearchIcon color="black" />
      </IconButton>
          <Button variant="text" color="inherit" size="large" sx={{ 
                  fontWeight: "bold",
                  textTransform: "none",}}>
           Contact
         </Button>
         <Button variant="text" color="inherit" size="large" sx={{ 
                  fontWeight: "bold",
                  textTransform: "none",}}>
           log in
         </Button>
         <Button variant="text" color="inherit" size="large" sx={{backgroundColor:"#2250F4", color: "white",
                  fontWeight: "bold",
                  textTransform: "none",}}>
           Sign Up
         </Button>
         
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
             
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            
              
            >
              {settings.map((setting) => (
                <MenuItem key={setting} >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;