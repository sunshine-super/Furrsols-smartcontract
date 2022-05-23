import * as React from 'react';
import {
  Divider,
  Typography
} from '@mui/material'
import './inventory.css'
import InventoryCard from '../../component/InventoryCard'
import LeftBtn from '../../component/LeftBtn'
import Item from '../../component/Item'
import pic1 from '../../assets/imgs/item1.png'
import pic2 from '../../assets/imgs/item2.png'
import pic3 from '../../assets/imgs/item3.png'
import pic4 from '../../assets/imgs/item4.png'

const Inventory = () => {
  return (
    <div className="gameguide_body">
      <div className="gameguide_leftside">
        <div className="down">
          <Typography sx={{ fontSize: '14px', color: 'white' }}>Filters</Typography>
          <div>
            <LeftBtn btnName="All" activated={true} disabled={false} />
            <LeftBtn btnName="Supplies" />
            <LeftBtn btnName="Powerups" />
            <LeftBtn btnName="FLUFF" />
          </div>
        </div>
      </div>
      <div className='gameguide_rightside'>
        <div className="Inventory_bag">
          <Item type="Pearl" count={0} pic3="pic1" />
          <Item type="Pillow" count={0} pic3="pic2" />
          <Item type="Soap" count={0} pic3="pic3" />
          <Item type="Ball" count={0} pic3="pic4" />
          <Item type="FLUFF" count={85000} pic3="Inventory" />
        </div>
      </div>
    </div>

  )
}
export default Inventory