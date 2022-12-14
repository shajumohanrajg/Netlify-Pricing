import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PublicIcon from "@mui/icons-material/Public";
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
//import Carousel from 'react-grid-carousel'
import ListItem from "@mui/material/ListItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MailIcon from "@mui/icons-material/Mail";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Typography from "@mui/material/Typography";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import FunctionsIcon from "@mui/icons-material/Functions";
// import CardMedia from '@mui/material/CardMedia';
import Card from "@mui/material/Card";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BuildIcon from "@mui/icons-material/Build";
import LanIcon from "@mui/icons-material/Lan";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
// or
import CardActions from "@mui/material/CardActions";
//import CardMedia from "@mui/material/CardMedia";
//import { DataGrid } from "@mui/x-data-grid";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import { lime } from "@mui/material/colors";

import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
//import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//import ListItemButton from "@mui/material/ListItemButton";
//import Divider from '@mui/material/Divider';
//import InboxIcon from '@mui/icons-material/Inbox';
//import DraftsIcon from '@mui/icons-material/Drafts';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
  customTableContainer: {
    overflowX: "initial",
  },
  head: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
  },
  table: {
    minWidth: 100,
    width: "100%",
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
      height: 35,
      width: 100,
      fontSize: "16px",
      fontWeight: "bold",
      Color: "#fff",
    },
  },
  table1: {
    marginLeft: "320px",
    background: "white",
    width: "1250px",
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
      height: 35,
      width: 60,
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  table2: {
    boxShadow: "none",
    border: "none",
    justifyContent: "center",
  },
  item: {
    justifyContent: "center",
    display: "flex",
  },
});
function createsData(sfield1, sfield2, sfield3, sfield4) {
  return { sfield1, sfield2, sfield3, sfield4 };
}
function createhp2Data(hp2field1, hp2field2, hp2field3) {
  return { hp2field1, hp2field2, hp2field3 };
}
function createhp1Data(hp1field1, hp1field2, hp1field3) {
  return { hp1field1, hp1field2, hp1field3 };
}
function createaData(afield1, afield2, afield3) {
  return { afield1, afield2, afield3 };
}
function createiData(ifield1, ifield2, ifield3) {
  return { ifield1, ifield2, ifield3 };
}
function createf1Data(f1field1, f1field2, f1field3) {
  return { f1field1, f1field2, f1field3 };
}
function createf2Data(f2field1, f2field2, f2field3) {
  return { f2field1, f2field2, f2field3 };
}
function createlData(lfield1, lfield2, lfield3, lfield4) {
  return { lfield1, lfield2, lfield3, lfield4 };
}
function createtData(tfield1, tfield2, tfield3, tfield4) {
  return { tfield1, tfield2, tfield3, tfield4 };
}
const rows1 = [
  createsData(
    "Guaranteed response time",
    "",
    "Business days 6 AM – 5 PM PST",
    "24x7x365"
  ),
  createsData("Account support team", "", "", "Support engineer"),
  createsData(
    "Netlify Support Forums",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createsData(
    "Contact by email",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createsData("Dedicated Slack channel", "", "", <DoneIcon color="primary" />),
  createsData("Escalate by phone", "", "", <DoneIcon color="primary" />),
];
const rows0 = [
  createtData(
    "One-click rollbacks",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Build plugins",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Set environment variables per deploy context",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Scope environment variables per feature",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Shared environment variables",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Lighthouse scores on deploys list",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Password-protected websites",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Basic authentication headers",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Custom deployment options for functions",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Background Functions",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Slack & email deploy notifications",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Support for private organization repo connections",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Priority build environment",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Support for GitHub Enterprise Server or self-managed GitLab",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Support for GitHub Enterprise Server or self-managed GitLab",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Support for GitHub Enterprise Server or self-managed GitLab",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createtData(
    "Support for GitHub Enterprise Server or self-managed GitLab",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
];
const rows2 = [
  createhp1Data("Response", "Standard", <DoneIcon color="primary" />),
  createhp1Data("99.99% Uptime SLA", "", <DoneIcon color="primary" />),
  createhp1Data("Proactive DDoS mitigation", "", <DoneIcon color="primary" />),
  createhp1Data("Cache hit rate", "80%", "95%"),
  createhp1Data("Included bandwidth", "100GB", "600GB"),
  createhp1Data(
    "Extra  bandwidth",
    "$55/month for each additional 100GB",
    "$180/month each additional TB"
  ),
];
const rows3 = [
  createhp2Data(
    "Concurrent builds",
    "Up to 5",
    "Starts with 12 concurrent builds"
  ),
  createhp2Data("Processor cores", " Up to 6", "10"),
  createhp2Data("Memory", "Up to 11GB", "36GB"),
  createhp2Data(
    "Maximum execution time",
    "Up to 60 minutes",
    "Custom build timeouts"
  ),
  createhp2Data("99.9% SLA", "", <DoneIcon color="primary" />),
];
const rows4 = [
  createaData("Included pageviews /month", "250,000", "Unlimited"),
];
const rows5 = [
  createiData("Active user limit", "1,000", "5,000", "Unlimited"),
  createiData("Invite only users", "5", "100", "Unlimited"),
  createiData(
    "Custom branded login",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createiData(
    "Custom reply-to addresses",
    "",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createiData(
    "Customizable email templates",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createiData("Audit logs", "", "7-day retention", "Full history"),
  createiData("SAML - SSO", "", "", <DoneIcon color="primary" />),
  createiData("SLA", "", "", <DoneIcon color="primary" />),
];
const rows6 = [
  createf1Data("Submissions /month", "100", "1,000", "Unlimited"),
  createf1Data("Size of uploads /month", "10MB", "1GB", "Unlimited"),
  createf1Data(
    "Functions integration",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createf1Data("Delivery SLA", "", "", <DoneIcon color="primary" />),
  createf1Data(
    "Extras",
    <DoneIcon color="primary" />,
    "Add packs of 500 submissions and 500MB upload allowance",
    ""
  ),
];
const rows7 = [
  createf2Data("Requests /month", "125,000", "2 million", "Unlimited"),
  createf2Data("Run time /month", "100 hours", "1,000 hours", "Unlimited"),
  createf2Data("Persistent pages or assets", "10,000", "10,000", "10,000"),
  createf2Data(
    "Background Functions",
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />,
    <DoneIcon color="primary" />
  ),
  createf2Data("Extras", "", "$19/each", <DoneIcon color="primary" />),
  createf2Data("Edge Functions", "3m", "15m", "150m"),
];
const rows8 = [
  createlData("Transformations  /month", "2,500", "100,000", "Unlimited"),
  createlData("Extras", "", "$10/each", "Unlimited"),
];

export default function BasicGrid() {
  const classes = useStyles();
  return (
    <Box sx={{ background: "white" }}>
      <div sx={{ padding: "70px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            padding: "25px",
            paddingTop: "80px",
          }}
        >
          Netlify Pricing
        </Typography>
      </div>
      <br></br>
      <div>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          direction={{ xs: "column", md: "row" }}
        >
          <Grid xs={2}>
            <Item
              className={classes.item}
              sx={{
                height: "750px",

                borderRadius: 2,
                padding: "20px",
                borderTop: 3,
                borderTopLeftRadius: 50,
              }}
            >
              {" "}
              <Box
                xs={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    paddingBottom: "20px",
                    height: "190px",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Starter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The basics for personal projects, hobby sites, or
                      experiments.
                    </Typography>
                  </CardContent>

                  <Button
                    variant="contained"
                    size="large"
                    align="center"
                    sx={{
                      backgroundColor: "#2250F4",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Start For Free
                  </Button>
                </Card>
                <CardContent className="crdbgclr">
                  <Typography className="txtcnt">
                    <h2 className="algncnt fntname">
                      Free <span className="smltxt"> to get started</span>
                    </h2>
                  </Typography>
                </CardContent>
                <nav aria-label="main mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <DoneIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box fontWeight="fontWeightBold">
                            Deploy to global edge network
                          </Box>
                        }
                      />
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
              </Box>
            </Item>
          </Grid>
          <Grid xs={2}>
            <Item
              sx={{
                height: "750px",

                borderRadius: 2,
                padding: "20px",
                border: 4,
                borderColor: "#30c8c9",
                borderTopLeftRadius: 50,
              }}
            >
              <Box
                sx={{
                  width: "100%",

                  bgcolor: "background.paper",
                }}
              >
                <Card
                  sx={{
                    paddingBottom: "20px",
                    border: "none",
                    boxShadow: "none",

                    height: "190px",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Pro
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Advanced features and support for private organization Git
                      repos.
                    </Typography>
                  </CardContent>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#2250F4",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Buy Pro
                  </Button>
                  <br></br>
                </Card>
                <CardContent className="crdbgclr">
                  <Typography className="txtcnt">
                    <h2 className="algncnt fntname">
                      $19 <span className="smltxt">/Month</span>
                    </h2>
                  </Typography>
                </CardContent>
                <div className="mrg"></div>
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
              </Box>
            </Item>
          </Grid>
          <Grid xs={2}>
            <Item
              sx={{
                height: "750px",

                borderRadius: 2,
                padding: "20px",
                borderTop: 3,
                borderTopLeftRadius: 50,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    paddingBottom: "20px",
                    border: "none",
                    boxShadow: "none",
                    height: "190px",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Business
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Collaboration, security, & compliance for larger teams
                      getting started.
                    </Typography>
                  </CardContent>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#2250F4",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Buy Business
                  </Button>
                </Card>
                <div className="mrg">
                  <CardContent className="crdbgclr">
                    <Typography className="txtcnt">
                      <h2 className="algncnt fntname">
                        $99 <span className="smltxt">/Month</span>
                      </h2>
                    </Typography>
                  </CardContent>
                </div>
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
              </Box>
            </Item>
          </Grid>
          <Grid xs={2}>
            <Item
              sx={{
                height: "750px",

                borderRadius: 2,
                padding: "20px",
                borderTop: 3,
                borderTopLeftRadius: 50,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    paddingBottom: "20px",
                    border: "none",
                    boxShadow: "none",
                    height: "190px",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Enterprise
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A custom plan with services tailored to team and
                      performance requirements.
                    </Typography>
                  </CardContent>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#2250F4",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Contact Us
                  </Button>
                </Card>
                <div className="mrg">
                  <CardContent className="crdbgclr">
                    <Typography className="txtcnt">
                      <h2 className="algncnt fntname">Contact Us </h2>
                    </Typography>
                  </CardContent>
                </div>
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
                      <ListItemText primary="Security & compliance review" />
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
              </Box>
            </Item>
          </Grid>
        </Grid>
      </div>
      <br></br>

      <Box sx={{ padding: "50px" }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Fast, dynamic web experiences powered by Netlify
        </Typography>
      </Box>
      <div>
        <TableContainer
          sx={{ justifyContent: "center" }}
          className={classes.head}
        >
          <Table
            className={classes.table1}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead sx={{ border: 1 }}>
              <TableRow>
                <TableCell align="center" variant="">
                  {" "}
                  <Typography variant="h4">Full Feature List</Typography>
                </TableCell>
                <TableCell align="center">
                  <Card
                    sx={{
                      paddingBottom: "20px",
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5">Starter</Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        Free to get started
                      </Typography>
                    </CardContent>

                    <Button
                      variant="contained"
                      size="medium"
                      align="center"
                      sx={{
                        backgroundColor: "#2250F4",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      Start For Free
                    </Button>
                  </Card>
                </TableCell>
                <TableCell align="center">
                  <Card
                    sx={{
                      paddingBottom: "20px",
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5">Pro</Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        $19/month per member
                      </Typography>
                    </CardContent>

                    <Button
                      variant="contained"
                      size="medium"
                      align="center"
                      sx={{
                        backgroundColor: "#2250F4",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      Buy Pro
                    </Button>
                  </Card>
                </TableCell>

                <TableCell align="center">
                  <Card
                    sx={{
                      paddingBottom: "20px",
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5">Business</Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        $99/month per member
                      </Typography>
                    </CardContent>

                    <Button
                      variant="contained"
                      size="medium"
                      align="center"
                      sx={{
                        backgroundColor: "#2250F4",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      Buy Business
                    </Button>
                  </Card>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="" colSpan={4}>
                  <Typography variant="h5">
                    Only pay for the capacity you use
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ background: "white" }}>
              {rows0.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center">{row.tfield1}</TableCell>
                  <TableCell align="center">{row.tfield2}</TableCell>
                  <TableCell align="center">{row.tfield3}</TableCell>
                  <TableCell align="center">{row.tfield4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <br></br>
      <div>
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <item>
              <Card
                sx={{
                  width: "900px",
                  justifyContent: "center",
                  background: "black",
                  padding: "20px",
                }}
              >
                <CardActions>
                  <FlashOnIcon
                    sx={{ fontSize: 50, color: lime[500] }}
                  ></FlashOnIcon>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white", paddingRight: "20px", pl: "20px" }}
                  >
                    Take advantage of all of our pro developer resources
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5CEBDF",
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Try Pro For Free
                  </Button>
                </CardActions>
              </Card>
            </item>
          </Grid>
        </Box>
        <div>
          <Box sx={{ padding: 8 }}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Enterprise Products
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Upgrade to Enterprise for premium support and our fastest, most
              reliable infrastructure.
            </Typography>
          </Box>
        </div>
        <br></br>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <SupportAgentIcon
                        color="primary"
                        sx={{ fontWeight: "fontWeightbold", fontSize: 45 }}
                      />{" "}
                      Support
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      Email support is available for customers on Pro plans and
                      above. Upgrade to an Enterprise plan for guaranteed
                      response times and support via Slack or phone.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Email Support</TableCell>
                          <TableCell align="center">
                            Business Day Support
                          </TableCell>
                          <TableCell align="center">
                            24×7×365 Premium Support
                          </TableCell>
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
              </Accordion>
            </Item>
          </Grid>

          <br></br>

          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <LanIcon
                        color="primary"
                        sx={{ fontWeight: "fontWeightbold", fontSize: 45 }}
                      />{" "}
                      High-Performance Edge
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      The premium network for mission-critical applications.
                      Experience 30-50% faster response time and more global
                      POPs, backed by a 99.99% uptime SLA.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Standard</TableCell>
                          <TableCell align="center">High-Performance</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows2.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="center">
                              {row.hp1field1}
                            </TableCell>
                            <TableCell align="center">
                              {row.hp1field2}
                            </TableCell>
                            <TableCell align="center">
                              {row.hp1field3}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>

          <br></br>

          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <BuildIcon
                        color="primary"
                        sx={{ fontWeight: "fontWeightbold", fontSize: 45 }}
                      />{" "}
                      High-Performance Build{" "}
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      The premium build environment with more concurrency and
                      processing power.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Standard</TableCell>
                          <TableCell align="center">High-Performance</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows3.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="center">
                              {row.hp2field1}
                            </TableCell>
                            <TableCell align="center">
                              {row.hp2field2}
                            </TableCell>
                            <TableCell align="center">
                              {row.hp2field3}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <br></br>
          <div>
            <Box
              sx={{
                padding: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Per-site add-ons
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                Extend your site for free with basic access to add-ons.
                Automatically upgrade tiers as your usage grows, paying only for
                what you use.
              </Typography>
            </Box>
          </div>
          <br></br>
          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <AnalyticsIcon
                        sx={{
                          fontWeight: "fontWeightbold",
                          fontSize: 45,
                          color: "#30c8c9",
                        }}
                      />{" "}
                      Analytics{" "}
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      Netlify Analytics uses data captured directly from our
                      servers, presented simply and beautifully. Find better
                      accuracy, performance and privacy for your users.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Level 1</TableCell>
                          <TableCell align="center">Level 2</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows4.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="center">{row.afield1}</TableCell>
                            <TableCell align="center">{row.afield2}</TableCell>
                            <TableCell align="center">{row.afield3}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <br></br>
          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <PermIdentityIcon
                        sx={{
                          fontWeight: "fontWeightbold",
                          fontSize: 45,
                          color: "#30c8c9",
                        }}
                      />{" "}
                      Identity{" "}
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      Create and authenticate users on your site or app without
                      requiring them to use a separate service. Perfect for
                      gated content, site administration, and more.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Level 1</TableCell>
                          <TableCell align="center">Level 2</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows5.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="center">{row.ifield1}</TableCell>
                            <TableCell align="center">{row.ifield2}</TableCell>
                            <TableCell align="center">{row.ifield3}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <br></br>
          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <DesignServicesIcon
                        sx={{
                          fontWeight: "fontWeightbold",
                          fontSize: 45,
                          color: "#30c8c9",
                        }}
                      />{" "}
                      Forms{" "}
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      Add a simple attribute to any HTML form to start receiving
                      submissions in your Netlify site admin panel, without
                      JavaScript or any backend coding.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Level 1</TableCell>
                          <TableCell align="center">Level 2</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows6.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="center">{row.f1field1}</TableCell>
                            <TableCell align="center">{row.f1field2}</TableCell>
                            <TableCell align="center">{row.f1field3}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <br></br>
          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <FunctionsIcon
                        sx={{
                          fontWeight: "fontWeightbold",
                          fontSize: 45,
                          color: "#30c8c9",
                        }}
                      />{" "}
                      Functions{" "}
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      Add a simple attribute to any HTML form to start receiving
                      submissions in your Netlify site admin panel, without
                      JavaScript or any backend coding.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Level 1</TableCell>
                          <TableCell align="center">Level 2</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows7.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="center">{row.f2field1}</TableCell>
                            <TableCell align="center">{row.f2field2}</TableCell>
                            <TableCell align="center">{row.f2field3}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <br></br>
          <Grid xs={7.5}>
            <Item
              sx={{
                borderRadius: 5,
                boxShadow: "10px 10px 10px black",
              }}
            >
              <Accordion
                sx={{
                  padding: "20px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="" sx={{ textAlign: "left" }}>
                    <Box
                      variant="Body2"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {" "}
                      <PermMediaIcon
                        sx={{
                          fontWeight: "fontWeightbold",
                          fontSize: 45,
                          color: "#30c8c9",
                        }}
                      />{" "}
                      Large Media{" "}
                    </Box>
                    <Box sx={{ fontSize: "25px", pl: 8 }}>
                      Manage binary files of any size right in your repo, just
                      like code.
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="simple table"
                      sx={{ width: "100%" }}
                    >
                      <TableHead sx={{ border: 1 }}>
                        <TableRow>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">Level 0</TableCell>
                          <TableCell align="center">Level 1</TableCell>
                          <TableCell align="center">Level 2</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows8.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell align="center">{row.lfield1}</TableCell>
                            <TableCell align="center">{row.lfield2}</TableCell>
                            <TableCell align="center">{row.lfield3}</TableCell>
                            <TableCell align="center">{row.lfield4}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
        </Grid>
        <br></br>
      </div>
      <br></br>
      <div>
        <div>
          <Grid container spacing={3} justifyContent="center">
            <Grid xs={3}>
              <Item sx={{ height: "170px", boxShadow: 20 }}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardHeader
                    sx={{ textAlign: "left" }}
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        E
                      </Avatar>
                    }
                    title="Evan You"
                    subheader="@youyuxi"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Vuejs.org is now powered by @Netlify with a free open
                      source team plan. Really really impressive and smooth
                      deployment experience.
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid xs={3}>
              <Item sx={{ height: "170px", boxShadow: 20 }}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardHeader
                    sx={{ textAlign: "left" }}
                    avatar={
                      <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                        J
                      </Avatar>
                    }
                    title="
                    Jared Truscott"
                    subheader="@TruJared"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Just migrated a few SPAs to @Netlify. Literally impossible
                      to make the process any easier. Super impressive 👍🏻
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid xs={3}>
              <Item sx={{ height: "170px", boxShadow: 20 }}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardHeader
                    sx={{ textAlign: "left" }}
                    avatar={
                      <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        H
                      </Avatar>
                    }
                    title="
                    Henrik Joreteg"
                    subheader="@HenrikJoreteg"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Gotta say, @Netlify has gotten really good. Great for
                      hosting PWAs/static sites. So many powerful free features!
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>

      <br></br>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "40px" }}
      >
        <Grid xs={2.5}>
          <Item sx={{ height: "170px", background: "black", color: "white" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Upgrade To Pro
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <TaskAltIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="More bandwidth" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <TaskAltIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Background Functions" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <TaskAltIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Password-protected sites" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <TaskAltIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Slack & email notifications" />
              </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid xs={2.5}>
          <Item sx={{ height: "170px" }}>
            <Card
              sx={{
                maxWidth: 345,
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Typography variant="body1">$19 per member /month</Typography>
              </CardContent>

              <Button
                sx={{
                  backgroundColor: "#5CEBDF",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
                variant="contained"
                size="large"
                align="center"
                endIcon={<ArrowForwardIcon />}
              >
                Try Pro For Free
              </Button>
            </Card>
          </Item>
        </Grid>
      </Grid>
      <br></br>
      <Box sx={{ padding: "20px" }}>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              border: "none",
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Box sx={{ paddingLeft: "170px" }}>
                <PublicIcon sx={{ fontSize: 40, color: "grey" }}></PublicIcon>
              </Box>
              <br></br>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Stay up to date with all Jamstack & Netlify news
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ paddingRight: "20px" }}>
                <TextField
                  id="Email Address"
                  size="small"
                  label="Email Address"
                  variant="outlined"
                />
              </Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#5CEBDF",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Box>
      <br></br>
      <Divider></Divider>
      <div></div>

      <br></br>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ background: "transparent" }}
          justifyContent="center"
        >
          <Grid xs={1.6}>
            <Item sx={{ background: "transparent", boxShadow: "none" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                  Why Netlify
                </Typography>
              </Box>
              <List>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Customers
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Enterprise
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Resources
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Agency Partner Program
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Technology Partner Program
                  </Button>
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={1}>
            <Item sx={{ background: "transparent", boxShadow: "none" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                  Products
                </Typography>
              </Box>
              <List>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Platform
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Netlify Build
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Netlify Edge
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Netlify CLI
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Pricing
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Add-ons
                  </Button>
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={1}>
            <Item sx={{ background: "transparent", boxShadow: "none" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                  Learn
                </Typography>
              </Box>
              <List>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Docs
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Open Source
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Jamstack book
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Community
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Security
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Site Speed Test
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Technologies
                  </Button>
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={1}>
            <Item sx={{ background: "transparent", boxShadow: "none" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                  Contact us
                </Typography>
              </Box>
              <List>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Sales
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Support
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Status
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Forums
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Hire an expert
                  </Button>
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={1}>
            <Item sx={{ background: "transparent", boxShadow: "none" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                  Company
                </Typography>
              </Box>
              <List>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Blog
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    About
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Careers
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Press
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Jamstack Fund
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Netlify Store
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Sustainability
                  </Button>
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={1}>
            <Item sx={{ background: "transparent", boxShadow: "none" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                  Trust
                </Typography>
              </Box>
              <List>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Trust Center
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Privacy
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Security
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    GDPR/CCPA
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={{ textTransform: "none", color: "black" }}>
                    Abuse
                  </Button>
                </ListItem>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Divider></Divider>
      <Box sx={{ padding: "50px" }}>
        <Typography
          variant="body1"
          sx={{
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          @2022 Netlify
        </Typography>
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <IconButton>
            <MailIcon color="primary" />
          </IconButton>
          <IconButton>
            <GitHubIcon sx={{ color: grey[500] }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: blue[500] }} />
          </IconButton>
          <IconButton>
            <YouTubeIcon sx={{ color: red[500] }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
