import * as React from 'react'
import './index.css'
import pic from '../../assets/imgs/pic1.png'
interface Props {
  type: string,
  count: number,
  pic3?: string
}
const Item = (props: Props) => {
  return (
    <div className={`Inventory ${props.pic3}`}>
      <div className='type'>
        <span>{props.type}</span>
      </div>
      <div className='count'>
        <div><span style={{ color: 'white', fontSize: '12px' }}>{props.count}</span></div>
      </div>
    </div>
  )
}
export default Item;