import * as React from 'react';
import {
  Divider,
  Typography
} from '@mui/material'
import InventoryCard from '../../component/InventoryCard'
import LeftBtn from '../../component/LeftBtn'
import pic1 from '../../assets/imgs/item1.png'
import pic2 from '../../assets/imgs/item2.png'
import pic3 from '../../assets/imgs/item3.png'
import pic4 from '../../assets/imgs/item4.png'
const Furrmart = () => {
  return (
    <div className="gameguide_body">
      <div className="gameguide_leftside">
        <div className="down">
          <Typography sx={{ fontSize: '14px', color: 'white' }}>Filters</Typography>
          <div>
            <LeftBtn btnName="All" activated={true} disabled={false} />
            <LeftBtn btnName="Supplies" />
            <LeftBtn btnName="Powerups" />
          </div>
        </div>
      </div>
      <div className='gameguide_rightside'>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <InventoryCard type="Pearl" pic2={pic1} />
          <InventoryCard type="Pillow" pic2={pic2} />
          <InventoryCard type="Ball" pic2={pic3} />
        </div>
      </div>
    </div>

  )
}
export default Furrmart