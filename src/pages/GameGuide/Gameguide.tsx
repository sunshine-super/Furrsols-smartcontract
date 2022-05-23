import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Dashboard from '../Dashboard'
import FurrMart from '../FurrMart'
import Inventory from '../Inventory'
import Header from '../../component/Header'
import { styled, Button, Typography } from '@mui/material'
import './index.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1A2828',
    textTransform: 'capitalize'
  },
  menuclick: {
    margin: '0px 2px',
    backgroundColor: '#1A2828',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    color: '#00FFCE',
    textTransform: 'capitalize',
    fontFamily: 'Quicksand'
  },
  menunotclick: {
    margin: '0px 2px',
    backgroundColor: '#1A2121',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'capitalize',
    fontFamily: 'Quicksand'
  },
  space: {
    marginLeft: '20px'
  }
}));

const MenuBar = styled(AppBar)(() => ({
  backgroundColor: '#283334 !important',
  boxShadow: 'none !important',
}))
export default function Gameguide() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [status, SetStatus] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Header status={true} isconnected={true} />
      <div style={{ backgroundColor: '#283334', height: '100px' }} />
      <div className={classes.root}>
        <MenuBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {/* <Box sx={{ display: 'flex' }}> */}
            <Tab label="Dashboard" {...a11yProps(0)} onClick={() => { SetStatus(1) }} className={status == 1 ? classes.menuclick : classes.menunotclick} />
            <Tab label="FurrMart" {...a11yProps(1)} onClick={() => { SetStatus(2) }} className={status == 2 ? classes.menuclick : classes.menunotclick} />
            <Tab label="Inventory" {...a11yProps(2)} onClick={() => { SetStatus(3) }} className={status == 3 ? classes.menuclick : classes.menunotclick} />
            <Tab label="Breeding" {...a11yProps(3)} onClick={() => { SetStatus(4) }} className={status == 4 ? classes.menuclick : classes.menunotclick} />
            {/* </Box> */}
            <Box sx={{ maxWidth: '535px', minWidth: '10px', width: '100%' }}></Box>
            <div className='tabmenu_right'>
              <div><Typography sx={{ fontFamily: 'Quicksand' }}>FLUFF Collected:  86500</Typography></div>
              <Button
                sx={{
                  backgroundColor: '#7D3CCF !important',
                  color: 'white !important',
                  fontWeight: '600 !important',
                  fontFamily: 'Quicksand !important',
                  marginLeft: '10px !important',
                  textTransform: 'capitalize !important'
                }}>Claim FLUFF</Button>
            </div>
          </Tabs>
        </MenuBar>
        <TabPanel value={value} index={0}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FurrMart />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Inventory />
        </TabPanel>
        <TabPanel value={value} index={3} />
      </div>
      <div style={{ backgroundColor: '#283334', height: '100px' }} />
    </>
  );
}
