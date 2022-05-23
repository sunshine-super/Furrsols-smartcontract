import * as React from 'react'
import Header from '../../component/Header'
import './conwallet.css'

const ConWallet = () => {
  return (
    <div className="con_body">
      <Header status={true} isconnected={false} />
      <div className='con_body_main'>
        <p className="advice">Please connect your Solana wallet to start.</p>
      </div>
    </div>
  )
}
export default ConWallet;