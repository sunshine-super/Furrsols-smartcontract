import * as React from 'react'
import { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Progress from '../Progress2'
import Table from '../MyTable'
import Table2 from '../MyTable2'
import Table3 from '../MyTable3'
import Levelbar from '../Levelbar'
import Selector from '../Selector'

import './tokencard.css'
import {
  Button,
  styled,
  Box,
  Typography
} from '@mui/material'

const Button1 = styled(Button)(() => ({
  padding: '10px 20px !important',
  backgroundColor: '#133730 !important',
  border: '1px solid #00FFCE !important',
  borderRadius: '5px !important',
  color: '#00FFCE !important',
  marginRight: '5px !important',
  lineHeight: '10px !important',
  textTransform: 'capitalize'
}))
const Button2 = styled(Button)(() => ({
  padding: '10px 20px !important',
  backgroundColor: '#0D3C46 !important',
  border: '1px solid #0023FF !important',
  borderRadius: '5px !important',
  color: '#00FFCE !important',
  lineHeight: '10px !important',
  textTransform: 'capitalize'
}))
const Button3 = styled(Button)(() => ({
  padding: '10px 20px !important',
  border: '1px solid #FFFFFF !important',
  borderRadius: '5px !important',
  color: '#FFFFFF !important',
  lineHeight: '10px !important',
  textTransform: 'capitalize'
}))
const UpgradeBtn = styled(Button)(() => ({
  backgroundColor: '#00FFCE !important',
  padding: '10px !important',
  color: '#0F4339 !important',
  fontSize: '12px !important',
  fontWeight: 'bold !important',
}))

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

interface Props {
  nft_type: string,
  fluff_count: number,
  pic: any
}
const TokenCard = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isupgrade, SetIsUpgrade] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    SetIsUpgrade(false);
  };

  return (
    <div>
      <div className='tokencard_body'>
        <div className='top'>
          <div style={{ marginRight: '15px', cursor: 'pointer' }} onClick={handleOpen}><img src={props.pic} /></div>
          <div style={{ textAlign: 'left' }}>
            <div className="space_8"><span style={{ color: 'white' }}>{props.nft_type}</span></div>
            <div className="space_8"><p style={{ color: '#00FFCE' }}>FLUFF: {props.fluff_count}</p></div>
            <div className="space_8"><Progress value={90} btnName="feed" /></div>
            <div className="space_8"><Progress value={80} btnName="rest" /></div>
            <div className="space_8"><Progress value={98} btnName="groom" /></div>
            <Progress value={90} btnName="play" />
          </div>
        </div>
        <div className='down'>
          <Box sx={{ display: 'flex' }}>
            <Button1>Collect FLUFF</Button1>
            <Button3>Despawn</Button3>
          </Box>
        </div>
      </div >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={isupgrade ? "modal_body temp" : "modal_body"}>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <img src={props.pic} />
                {
                  isupgrade
                    ? ''
                    : <Box sx={{ maxWidth: '460px', width: '100%' }}>
                      <div style={{ marginBottom: '11px' }}><Typography>{props.nft_type}</Typography></div>
                      <div style={{ marginBottom: '20px' }}>
                        <Table fluff_count={props.fluff_count} weather="☀ Summer" />
                      </div>
                      <UpgradeBtn onClick={() => { SetIsUpgrade(!isupgrade) }}>UPGRADE FURRSOLS</UpgradeBtn>
                    </Box>
                }
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box sx={{ maxWidth: '200px', width: '100%' }}>
                  <div style={{ marginBottom: '11px', marginTop: '22px' }}><Typography>Attributes</Typography></div>
                  <div style={{ marginBottom: '12px' }}><Table2 isupgrade={isupgrade} /></div>
                  <div style={{ marginBottom: '11px', marginTop: '22px' }}><Typography>Upgrades(2 of 6)</Typography></div>
                  <Levelbar />
                </Box>
                {
                  isupgrade
                    ? ''
                    : <Box sx={{ maxWidth: '460px', width: '100%' }}>
                      <div style={{ marginBottom: '11px', marginTop: '22px' }}><Typography>Traits</Typography></div>
                      <Table3 />
                    </Box>
                }
              </Box>
            </Box>
            {
              isupgrade
                ?
                <Box sx={{ textAlign: 'center', justifyContent: 'center', padding: '100px 0px' }}>
                  <Typography sx={{ color: 'white', lineHeight: '26px', fontSize: '16px' }}>Select a FurrSol to Devour</Typography>
                  <Box sx={{ mb: '30px' }}><Selector /></Box>
                  <Box sx={{ mb: '30px' }}>
                    <Typography sx={{ fontSize: '12px', color: '#007B64' }}>
                      Attributes Increase: <span style={{ fontWeight: '700' }}>9%</span>
                      of attributes from FurrSol selected<br />
                      Required FLUFF: <span style={{ fontWeight: '700' }}>3000</span>
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '12px', color: '#007B64' }}>WARNING: FurrSol selected will be burned.</Typography>
                  <Box sx={{ mt: '20px' }}><UpgradeBtn>CONFIRM UPGRADE</UpgradeBtn></Box>
                </Box>
                : ''
            }
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default TokenCard;