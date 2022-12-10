import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';
import { Button } from '@mui/material';

import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// or

import { DataGrid } from '@mui/x-data-grid';

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


//import Divider from '@mui/material/Divider';
//import InboxIcon from '@mui/icons-material/Inbox';
//import DraftsIcon from '@mui/icons-material/Drafts';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles({
  table: {
    minWidth: 100,
   
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
      height: 35,
      width:100,
      fontSize:"16px",
      fontWeight:'bold'
    }
  }
});
function createsData(sfield1, sfield2, sfield3,sfield4) {
  return { sfield1, sfield2, sfield3,sfield4};
}
function createhp2Data(hp2field1, hp2field2, hp2field3) {
  return { hp2field1, hp2field2, hp2field3};
}
function createhp1Data(hp1field1, hp1field2, hp1field3) {
  return { hp1field1, hp1field2, hp1field3};
}
function createaData(afield1, afield2, afield3) {
  return { afield1, afield2, afield3};
}
function createiData(ifield1, ifield2, ifield3) {
  return { ifield1, ifield2, ifield3};
}
function createf1Data(f1field1, f1field2, f1field3) {
  return { f1field1, f1field2, f1field3};
}
function createf2Data(f2field1, f2field2, f2field3) {
  return { f2field1, f2field2, f2field3};
}
function createlData(lfield1, lfield2, lfield3) {
  return { lfield1, lfield2, lfield3};
}
const rows1 = [
  createsData("Guaranteed response time", "","Business days 6 AM – 5 PM PST","24x7x365"),
  createsData("Account support team", "","","Support engineer"),
  createsData("Netlify Support Forums", <DoneIcon color="primary" />,<DoneIcon color="primary" />,<DoneIcon color="primary" />),
  createsData("Contact by email", <DoneIcon color="primary" />,<DoneIcon color="primary" />,<DoneIcon color="primary" />),
  createsData("Dedicated Slack channel", "","",<DoneIcon color="primary" /> ),
  createsData("Escalate by phone", "","",<DoneIcon color="primary" />),
 


];
const rows2 = [
  createhp1Data("Response", "Standard",<DoneIcon color="primary" />),
  createhp1Data("99.99% Uptime SLA", "",<DoneIcon color="primary" />),
  createhp1Data("Proactive DDoS mitigation", "",<DoneIcon color="primary" />),
  createhp1Data("Cache hit rate", "80%","95%"),
  createhp1Data("Included bandwidth", "100GB","600GB" ),
  createhp1Data("Extra  bandwidth", "$55/month for each additional 100GB","$180/month each additional TB"),
 


];
const rows3 = [
  createhp2Data("Concurrent builds", "Up to 5", "Starts with 12 concurrent builds"),
  createhp2Data("Processor cores"," Up to 6", "10"),
  createhp2Data("Memory", "Up to 11GB", "36GB"),
  createhp2Data("Maximum execution time", "Up to 60 minutes","Custom build timeouts"),
  createhp2Data("99.9% SLA", "",<DoneIcon color="primary" />)


];
const rows4 = [
  createaData("Included pageviews /month", "250,000", "Unlimited")


];

export default function BasicGrid() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
   
         <div>
      <Grid container spacing={2}  justifyContent="center" style={{ border: "solid 0px", height: "1000px" }}>
        <Grid xs={2} >
          <Item> <Box xs={{ width: '100%', maxWidth: 360,  bgcolor: 'background.paper'}}>
          <Card sx={{ maxWidth: 345 , paddingBottom: '20px'}}>
 
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Starter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The basics for personal projects, hobby sites, or experiments.
        </Typography>
      </CardContent>
   
      <Button variant="contained" size="large" align="center">
          Start For Free
        </Button>
       
    </Card>
       
    
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText
               primary={<Box fontWeight="fontWeightBold">Deploy to global edge network</Box>} />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Live site previews with a collaboration UI for team members" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Instant rollbacks to any version" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Deploy static assets & dynamic serverless functions" />
            
          </ListItem>
        </List>
      </nav>
      </Box></Item>
        </Grid>
        <Grid xs={2}>
          <Item><Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <Card sx={{ maxWidth: 345, paddingBottom: '20px' }}>
 
 <CardContent>
   <Typography gutterBottom variant="h4" component="div">
     Pro
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Advanced features and support for private organization Git repos.
   </Typography>
 </CardContent>

 <Button variant="contained" size="large">
  Buy Pro
   </Button>

</Card>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Starter features, plus:" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Background Functions" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Password-protected sites" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="1TB bandwidth and 25k build minutes" />
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Audit logs with 7-day history" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Shared environment variables" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Slack & email notifications" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Email support" />
          
        </ListItem>
        </List>
      </nav>
      </Box></Item>
        </Grid>
        <Grid xs={2}>
        <Item><Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Card sx={{ maxWidth: 345, paddingBottom: '20px' }}>
 
 <CardContent>
   <Typography gutterBottom variant="h4" component="div">
     Business
   </Typography>
   <Typography variant="body2" color="text.secondary">
   Collaboration, security, & compliance for larger teams getting started.
   </Typography>
 </CardContent>

 <Button variant="contained" size="large">
    Buy Business
   </Button>

</Card>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Pro features, plus:" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="SAML single sign-on" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Role-based access control" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="1.5TB bandwidth and 35k build minutes" />
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Audit logs with full history" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Unlimited Analytics for all sites" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Unlimited Forms and Identity" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Billing administrator role" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Support for GitHub Enterprise Server or self-managed GitLab" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Build Prioritization" />
          
        </ListItem>
        </List>
      </nav>
      </Box></Item>
        </Grid>
        <Grid xs={2}>
        <Item><Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Card sx={{ maxWidth: 345, paddingBottom: '20px' }}>
 
 <CardContent>
   <Typography gutterBottom variant="h4" component="div">
   Enterprise
   </Typography>
   <Typography variant="body2" color="text.secondary">
   A custom plan with services tailored to team and performance requirements.
   </Typography>
 </CardContent>

 <Button variant="contained" size="large">
    Contact Us
   </Button>

</Card>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="99.99% uptime SLA" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="24×7×365 premium support" />
           
          </ListItem>
          <ListItem disablePadding>
           
              <ListItemIcon>
               <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Unlimited teams with org-level controls" />
           
          </ListItem>
          <ListItem disablePadding>
            
              <ListItemIcon>
              <DoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Enterprise-grade global edge network" />
            
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="High-Performance Build with SLAs" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Custom contracts & invoicing" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Security & compliance review" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Pentesting and load testing" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Support for GitHub Enterprise Server or self-managed GitLab" />
          
        </ListItem>
        <ListItem disablePadding>
            
            <ListItemIcon>
            <DoneIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Log Drains" />
          
        </ListItem>
        </List>
      </nav>
      </Box></Item>
        </Grid>
      </Grid>
      </div>
      <div>
      <Accordion sx={{m:50}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant=''> 
         
         <Box variant="Body2" sx={{ fontSize:'40px', fontWeight:'bold'}}> <SupportAgentIcon color="primary"  sx={{ fontWeight:'fontWeightbold',fontSize: 45 }}/> Support</Box >
         <Box sx={{fontSize:'25px' ,pl:8}}>Email support is available for customers on Pro plans and above. Upgrade to an Enterprise plan for guaranteed response times and support via Slack or phone.</Box></Typography>
         
         
        </AccordionSummary> 
        <AccordionDetails>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead sx={{border:1}}>
    
          <TableRow>
          
            <TableCell align="center"></TableCell>
            <TableCell align="center">Email Support</TableCell>
            <TableCell align="center">Business Day Support</TableCell>
            <TableCell align="center">24×7×365 Premium Support</TableCell>  
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.name}>
             
              <TableCell align="center">{row.sfield1}</TableCell>
              <TableCell align="center">{row.sfield2}</TableCell>
              <TableCell align="center">{row.sfield3}</TableCell>
              <TableCell align="center">{row.sfield4}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion><br></br>
      <Accordion  sx={{ml:50,mr:50}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography variant=''> 
         
         <Box variant="Body2" sx={{ fontSize:'40px', fontWeight:'bold'}}> <SupportAgentIcon color="primary"  sx={{ fontWeight:'fontWeightbold',fontSize: 45 }}/> High-Performance Edge</Box >
         <Box sx={{fontSize:'25px' ,pl:8}}>The premium network for mission-critical applications. Experience 30-50% faster response time and more global POPs, backed by a 99.99% uptime SLA.</Box></Typography>
         
         
       
         
        </AccordionSummary> 
        <AccordionDetails >
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead sx={{border:1}}>
    
          <TableRow>
          
            <TableCell align="center"></TableCell>
            <TableCell align="center">Standard</TableCell>
            <TableCell align="center">High-Performance</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow key={row.name}>
             
              <TableCell align="center">{row.hp1field1}</TableCell>
              <TableCell align="center">{row.hp1field2}</TableCell>
              <TableCell align="center">{row.hp1field3}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Accordion  sx={{ml:50,mr:50}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" 
        >
        
          <Typography variant='' > 
         
           <Box variant="Body2" sx={{ fontSize:'40px', fontWeight:'bold'}}> <SupportAgentIcon color="primary"  sx={{ fontWeight:'fontWeightbold',fontSize: 45 }}/> High-Performance Build </Box >
           <Box sx={{fontSize:'25px' ,pl:8}}>The premium build environment with more concurrency and processing power.</Box></Typography>
         
         
        </AccordionSummary>  
        <AccordionDetails sx={{ml:50,mr:50}}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead sx={{border:1}}>
    
          <TableRow>
          
            <TableCell align="center"></TableCell>
            <TableCell align="center">Standard</TableCell>
            <TableCell align="center">High-Performance</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows3.map((row) => (
            <TableRow key={row.name}>
             
              <TableCell align="center">{row.hp2field1}</TableCell>
              <TableCell align="center">{row.hp2field2}</TableCell>
              <TableCell align="center">{row.hp2field3}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>

    </Box>
  );
}