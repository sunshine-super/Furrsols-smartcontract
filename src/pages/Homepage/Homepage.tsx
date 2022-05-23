import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../component/Header'
import Progress from '../../component/Progress'
import Card from '../../component/Card'
// import Stepper from '../../component/Stepper'
import ReadBtn from '../../component/ReadBtn'
import './homepage.css'
import mainpic from '../../assets/imgs/mainpic.png'
import Chart from '../../component/Chart'
import { Typography, Box } from '@mui/material'
const token_information = [
  {
    token: "$FURR",
    token_type: "GOVERNANCE TOKEN",
    introduction_part1: "The FurrGem (FURR) tokens live in the Solana blockchain and serves as the governance token of FurrSols.The token may be earned as seasonal rewards from the game and from contests or events to be held in the future.",
    introduction_part2: "There are currently 2 use cases of the FURR token. In order to breed a FurrSol, you will need some FURR.For more information about breeding, go to the Breeding page in our whitepaper. You may also use FURR to purchase powerups, check The FurrMart for more information."
  },
  {
    token: "$FLUFF",
    token_type: "UTILITY TOKEN",
    introduction: "The FLUFF token is what players will primarily be earning in the game Our goal is to create and maintain a balance mint and burn ratio of the token The only way to earn FLUFF(at least for now) is to keep your FurrSols alive."
  }
]

const game_introduction = {
  playing_way: " Get your very own digital pet and treat it as how you treat your fur babies in real life.Feed them, groom them, play with them, and tuck them into their beds.Only difference is,you get to earn by simply keeping them alive!",
  part1: "FurrSols are initially 8888 unique and randomly generated NFTs that live in the Solana blockchain.These digital pets get you immersed into the FurrWorld where you get to earn by taking care of them.",
  part2: "The pixel art version of FurrSols is only the beginning. In the near future, you’ll get your hands on a 3D version and play the game while on - the - go with the mobile app."
}
const token_card = [
  { token_type: "Token Name", token_content: "FurrSols Fluff" },
  { token_type: "Token Symbol", token_content: "Fluff" },
  { token_type: "Token Decimols", token_content: "18" },
  { token_type: "Token Type", token_content: "Solana Program Library(SPL)" },
  { token_type: "Token Supply", token_content: "Uncopped" },
  { token_type: "Blockchain", token_content: "Solana" }
]
const progress_info = [
  { value: 90, btnname: "feed" },
  { value: 80, btnname: "rest" },
  { value: 90, btnname: "groom" },
  { value: 97, btnname: "play" }
]
const card_info = [
  {
    firsttitle: 'Q1 2022',
    secondtitle: '8888 FURRSOLS NFT',
    content: 'It all starts with the vision of the FurrWorld.The initial supply of the collection will be 8888 pieces but may be changed depending on the market.There will be 4 classes and each NFT will have a set of traits.Each trait will have a corresponding value to an attribute of a FurrSol.You can read more about these in the Classes & Seasons and Traits sections in the whitepaper.'
  },
  {
    firsttitle: 'Q1 2022',
    secondtitle: 'GAME DEMO DEVELOPMENT',
    content: 'Simultaneous with the creation of NFTs, the game demo will be developed. This should give the audience a good idea of how the game is played and the amount of FLUFF tokens an individual can potentially earn. This will be playable in the DevNet environment of Solana.'
  },
  {
    firsttitle: 'Q1 2022',
    secondtitle: 'FURRSOLS COMMUNITY',
    content: 'Once we are in a good place to showcase the NFTs and the game demo, we will start building a community.This includes the creation of a Discord server with exclusive invites for the first 1, 000 members.This will be the primary go- to platform for any information or announcements about the project.'
  },
]


export default function Homepage() {
  const [header_status, SetHeaderStatus] = useState<boolean>(false);

  return (
    <div style={{ height: '100vh' }}>
      <div className="body">
        <Header status={header_status} isconnected={false} />
        <div className="body_main">
          <img src={mainpic} style={{ width: '100%' }} />
          <div className="align_center">
            <p className="title">THE FIRST EVER L2E GAME IN THE SOLANA BLOCKCHAIN</p>
            <div className="space_1" />
            <p className="content align_center">
              {game_introduction.playing_way}
            </p>
          </div>
          <div className="space_2" />
          <div className="set">
            <div className="setting_div">
              <div style={{ maxWidth: '336px', width: '100%' }} className="align_left">
                <p>FURRSOLS #23</p>
                <div className="space_7" />
                {progress_info.map((info) => (
                  <div className="space_7"><Progress value={info.value} btnName={info.btnname} /></div>
                ))}

                <p>FULLFF EARNED: 0</p>
              </div>
            </div>
            <div className="content_div align_left">
              <p className="content">
                {game_introduction.part1}
                <div className="space_3"></div>
                {game_introduction.part2}
              </p>
            </div>
          </div>
          <div className="space_2" />
        </div>
        <div className='card_body'>
          <span style={{ fontSize: '24px', color: '#00FFCE', fontFamily: 'FFF Forward' }}>ROADMAP</span>
          <div className='space_4' />
          <div className='card_body_main'>
            {
              card_info.map((card) => (
                <Card firsttitle={card.firsttitle} secondtitle={card.secondtitle} content={card.content} />
              ))
            }
          </div>
          <div className='space_4' />
          {/* <Stepper /> */}
        </div>
        <div className='token_body'>
          <p style={{ fontSize: '24px', color: '#00FFCE', fontFamily: 'FFF Forward' }}>TOKENOMICS</p>
          <div className='space_5' />
          <div className='token_body_main1'>
            <div className="chart_text align_left">
              <p style={{ fontSize: '18px', color: '#00FFCE', fontFamily: 'FFF Forward' }}>{token_information[0].token}</p>
              <p style={{ fontSize: '14px', color: 'white', fontFamily: 'FFF Forward' }}>{token_information[0].token_type}</p>
              <div className="space_3"></div>
              <p className='content'>
                {token_information[0].introduction_part1}
                <div className="space_1"></div>
                {token_information[0].introduction_part2}
              </p>
              <div className="space_3"></div>
              <Link to="/connect_wallet/" style={{ textDecoration: 'none' }}>
                <div onClick={() => SetHeaderStatus(true)} style={{ marginBottom: '10px' }}><ReadBtn token_type="FURR" /></div>
              </Link>
            </div>
            <div className="chart_div">
              <Chart />
              <Box sx={{ textAlign: 'center', marginTop: '34px' }}>
                <Typography sx={{ fontSize: '18px', color: 'white', fontFamily: 'FFF Forward' }}>TOTAL SUPPLY: 50 000 000 FURR</Typography>
                <Typography sx={{ fontSize: '14px', color: 'white', fontFamily: 'Quicksand' }}>Each allocation of the governance token has its own vesting period.</Typography>
              </Box>
            </div>
          </div>
          <div className="space_6"></div>
          <div className='token_body_main2'>
            <div className="info_div">
              <div style={{ width: '50%' }} className="align_left">
                {
                  token_card.map((info, index) => (
                    <p key={index}>{info.token_type}</p>
                  ))
                }
              </div>
              <div style={{ width: '50%' }} className="align_left">
                {
                  token_card.map((info, index) => (
                    <p key={index}>{info.token_content}</p>
                  ))
                }
              </div>
            </div>
            <div className="chart_text align_left">
              <p style={{ fontSize: '18px', color: '#00FFCE', fontFamily: 'FFF Forward' }}>{token_information[1].token}</p>
              <p style={{ fontSize: '14px', color: 'white', fontFamily: 'FFF Forward' }}>{token_information[1].token_type}</p>
              <div className="space_3"></div>
              <p className='content'>
                {token_information[1].introduction}
              </p>
              <div className="space_3"></div>
              <Link to="/connect_wallet/" style={{ textDecoration: 'none' }}>
                <div onClick={() => SetHeaderStatus(true)} style={{ marginBottom: '10px' }}> <ReadBtn token_type="FLUFF" /></div>
              </Link>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
