import * as React from 'react'
import {
  Button,
  styled
} from '@mui/material'
import Arrow from '@material-ui/icons/ArrowRightAlt';

const Readbtn = styled(Button)(() => ({
  maxWidth: '345px',
  padding: '15px 20px !important',
  background: 'rgba(0, 0, 0, 0.3) !important',
  borderRadius: '5px',
  color: 'white !important',
  fontFamily: 'Quicksand !important',
  fontSize: '16px !important',
  fontWeight: '700 !important',
  display: 'flex',
  marginBottom: '10px'
}))

interface Props {
  token_type: string
}
const ReadBtn = (props: Props) => {
  return (
    <Readbtn>
      <div><span style={{ textTransform: 'capitalize' }}>Read more about the {props.token_type} Token</span></div>
      <Arrow />
    </Readbtn >
  )
}

export default ReadBtn