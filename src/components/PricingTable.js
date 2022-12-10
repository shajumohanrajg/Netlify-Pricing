

import { BiCheckboxSquare } from "react-icons/bi";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
function PricingTable() {
  return (
    <div className="App">
      <header className="App-header"></header>



    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
 

      <div className="table centered">
        <div className="row">
          <div className="column">
            <ul className="price">
              <li className="header">
                <br />
                <br />
                Features
              </li>
              <li> Teams</li>
              <li>Version History</li>
              <li>Plugin Administrator</li>
              <li>Facebook & Instagram Ads</li>
              <li>Design System Analytics</li>
              <li>Unlimited cloud storage</li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Starter
                <br />
                <span className="dollar">0</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Go Starter
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Professional
                <br />
                <span className="dollar">25</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Go Professional
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Organization
                <br />
                <span className="dollar">50</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Go Organization
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
