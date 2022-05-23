import * as React from 'react';
import { styled, Button } from '@mui/material'

const MyBtn = styled(Button)(() => ({
  border: '1px solid #00FFCE !important',
  borderRadius: '5px !important',
  color: '#00FFCE !important',
  padding: '5px 10px !important',
  fontSize: '12px !important',
  minWidth: '36px !important',
  marginRight: '5px !important',
  marginBottom: '5px !important',
  '&:active': {
    background: '#00FFCE !important',
    color: '#0F4339 !important'
  }
}))
const ActivateBtn = styled(Button)(() => ({
  border: '1px solid #00FFCE !important',
  borderRadius: '5px !important',
  color: '#0F4339 !important',
  padding: '5px 10px !important',
  fontSize: '12px !important',
  minWidth: '36px !important',
  marginRight: '5px !important',
  marginBottom: '5px !important',
  background: '#00FFCE !important',
  fotnWeight: '700',
  '&:active': {
    background: '#00FFCE !important',
    color: '#0F4339 !important'
  }
}))
const DisableBtn = styled(Button)(() => ({
  border: '1px solid rgba(0, 255, 206, 0.2) !important',
  borderRadius: '5px !important',
  color: 'rgba(0, 255, 206, 0.2) !important',
  padding: '5px 10px !important',
  fontSize: '12px !important',
  minWidth: '36px !important',
  marginRight: '5px !important',
  marginBottom: '5px !important',
  '&:active': {
    background: '#00FFCE !important',
    color: '#0F4339 !important'
  }
}))
interface Props {
  btnName: string,
  disabled?: boolean,
  activated?: boolean
}
const LeftBtn = (props: Props) => {
  return (
    <>
      {
        props.disabled
          ? <DisableBtn disabled><span style={{ textTransform: 'capitalize' }}>{props.btnName}</span></DisableBtn>
          :
          props.activated
            ? <ActivateBtn><span style={{ textTransform: 'capitalize' }}>{props.btnName}</span></ActivateBtn >
            : <MyBtn><span style={{ textTransform: 'capitalize' }}>{props.btnName}</span></MyBtn>
      }

    </>
  )
}
export default LeftBtn;