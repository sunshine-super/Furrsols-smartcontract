import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  styled,
  Button,
  Box,
  Typography,
  TextField
} from '@mui/material'
import Input from '../Input'

const useStyle = makeStyles({
  card: {
    maxWidth: '320px !important',
    // maxHeight: '180px !important',
    width: '100% !important',
    height: '100% !important',
    background: 'rgba(0, 255, 206, 0.02) !important',
    border: '2px solid rgba(0, 255, 206, 0.1) !important',
    borderRadius: '5px !important',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '26px 20px',
    marginRight: '14px',
    marginBottom: '14px',
    flexWrap: 'wrap'
  },
  img_area: {
    width: '128px',
    height: '128px',
    borderRadius: '5px !important',
    background: '#283334 !important'
  },
  inventory_info: {
    textAlign: 'left',
    maxWidth: '138px'
  },
  right_line: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
    alignItems: 'center'
  }
})

const MyBtn = styled(Button)(() => ({
  background: '#00FFCE !important',
  border: '1px solid #00FFCE !important',
  borderRadius: '5px !important',
  color: '#283334 !important',
  maxHeight: '20px  !important',
  fontSize: '11px !important',
  fontWeight: 'bold !important',
  '&:hover': {
    background: '#00FFCE !important'
  }
}))

interface Props {
  type: string,
  pic2: any
}

const InventoryCard = (props: Props) => {
  const classes = useStyle()
  return (
    <Box className={classes.card}>
      <Box><img src={props.pic2} /></Box>
      <Box className={classes.inventory_info}>
        <Typography>{props.type}</Typography>
        <Box className={classes.right_line}>
          <Box><Typography>1 piece</Typography></Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MyBtn>12 FLUFF</MyBtn>
          </Box>
        </Box>
        <Box className={classes.right_line}>
          <Input />
          <MyBtn>BUY</MyBtn>
        </Box>
        <Typography sx={{ fontSize: '10px !important', color: '#007B64' }}>Minimum of 5 pieces Conversion: 500 Pearls ~ 25000 FLUFF</Typography>
      </Box>
    </Box>
  )
}

export default InventoryCard