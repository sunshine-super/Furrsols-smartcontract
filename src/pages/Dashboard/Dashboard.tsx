import * as React from 'react';
import { Divider, Typography } from '@mui/material'
import './dashboard.css'
import TokenCard from '../../component/Token_card'
import LeftBtn from '../../component/LeftBtn'
import pic1 from '../../assets/imgs/pic1.png'
import pic2 from '../../assets/imgs/pic2.png'
import pic3 from '../../assets/imgs/pic3.png'
import pic4 from '../../assets/imgs/pic4.png'

const Dashboard = () => {
  return (
    <div className="gameguide_body">
      <div className="gameguide_leftside">
        <div className="top">
          <div style={{ marginRight: '28px' }}>
            <p className="token_info">Current Season</p>
            <p className="token_info">Your FurrSols</p>
          </div>
          <div>
            <p className="token_info">: ❄ Winter</p>
            <p className="token_info">: 5</p>
          </div>
        </div>
        <Divider />
        <div className="down">
          <Typography sx={{ fontSize: '14px', color: 'white' }}>Filters</Typography>
          <div>
            <LeftBtn btnName="All" activated={true} disabled={false} />
            <LeftBtn btnName="Spawned" />
            <LeftBtn btnName="Not Spawned" />
          </div>
          <Typography sx={{ fontSize: '14px', color: 'white' }}>Classes</Typography>
          <div>
            <LeftBtn btnName="All" activated={true} disabled={false} />
            <LeftBtn btnName="Winter" />
            <LeftBtn btnName="Spring" disabled={true} />
            <LeftBtn btnName="Summer" />
            <LeftBtn btnName="Autumn" />
          </div>
          <Typography sx={{ fontSize: '14px', color: 'white' }}>Status</Typography>
          <div>
            <LeftBtn btnName="All" activated={true} disabled={false} />
            <LeftBtn btnName="Alive" />
            <LeftBtn btnName="Dead" />
          </div>
        </div>
      </div>
      <div className='gameguide_rightside'>
        <div style={{ flexWrap: 'wrap', width: '100%', display: 'flex' }}>
          <TokenCard nft_type='️☀ FurrSols #23' fluff_count={5000} pic={pic1} />
          <TokenCard nft_type='️❄ FurrSols #315' fluff_count={3500} pic={pic2} />
          <TokenCard nft_type='️❄ FurrSols #50' fluff_count={0} pic={pic3} />
          <TokenCard nft_type='️🍂 FurrSols #11' fluff_count={0} pic={pic4} />
        </div>
      </div>
    </div>

  )
}
export default Dashboard