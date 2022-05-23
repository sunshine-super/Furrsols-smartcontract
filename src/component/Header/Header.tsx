import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import LogoPic from '../../assets/imgs/logo.png'

const pages = ['WHITEPAPER', 'ROADMAP', 'TOKENOMICS'];
const pages2 = ['GAMEGUIDE', 'MARKETPLACE'];

const ConnectBtn = styled(Button)(() => ({
  width: '200px !important',
  backgroundColor: '#00FFCE !important',
  color: '#0F4339 !important',
  fontSize: '18px !important',
  borderRadius: '5px !important',
  '&:hover': {
    backgroundColor: '#00FFCE',
  }
}))

interface Props {
  status: boolean
  isconnected: boolean
}
const Header = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [ismenuclick, SetIsMenuClick] = useState<number>(1);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const FixedTypography = styled(Typography)(() => ({
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'white',
    fontSize: '16px',
    fontFamily: 'FFF Forward'
  }))
  const FixedTypography2 = styled(Typography)(() => ({
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '16px',
    fontFamily: 'FFF Forward'
  }))

  return (
    <AppBar position='absolute' style={{ background: 'none', boxShadow: 'none' }}>
      <Container sx={{ maxWidth: '1240px' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', bg: '#283344' }}>
          <Box sx={{ display: 'flex' }}>
            <Box><img src={LogoPic} style={{ width: '100%' }} /></Box>
            {
              props.status
                ? <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    ml: '30px'
                  }}>
                  <Button
                    onClick={() => SetIsMenuClick(1)}
                    sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
                  >
                    {
                      ismenuclick == 1
                        ? <FixedTypography>GAMEGUIDE</FixedTypography>
                        : <FixedTypography2>GAMEGUIDE</FixedTypography2>
                    }
                  </Button>
                  <Button
                    onClick={() => SetIsMenuClick(2)}
                    sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
                  >
                    {
                      ismenuclick == 2
                        ? <FixedTypography>MARKETPLACE</FixedTypography>
                        : <FixedTypography2>MARKETPLACE </FixedTypography2>
                    }
                  </Button>
                </Box>
                : ''
            }
          </Box>

          <Box sx={{ display: 'flex' }}>
            {
              props.status
                ?
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Link to="/connect_wallet/gameguide" style={{ textDecoration: 'none' }} >
                    <ConnectBtn style={{ fontFamily: 'Quicksand', fontWeight: '700' }}>{props.isconnected ? "HECE...DhJx" : "Connect Wallet"}</ConnectBtn>
                  </Link>
                </Box>
                : <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    ml: '30px'
                  }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
                    >
                      <FixedTypography>{page}</FixedTypography>
                    </Button>
                  ))}
                </Box>
            }
            <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: 'block !important',
                }}
              >
                {
                  props.status
                    ?
                    pages2.map((page) => (
                      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 10px' }}>
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          {page}
                        </MenuItem>
                      </Box>
                    ))
                    : pages.map((page) => (
                      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 10px' }}>
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          {page}
                        </MenuItem>
                      </Box>
                    ))
                }
                {
                  props.status
                    ?
                    <Link to="/connect_wallet/gameguide" style={{ textDecoration: 'none' }} >
                      <ConnectBtn style={{ fontFamily: 'Quicksand', fontWeight: '700' }}>{props.isconnected ? "HECE...DhJx" : "Connect Wallet"}</ConnectBtn>
                    </Link>
                    : ''
                }
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container >
    </AppBar >
  );
};
export default Header