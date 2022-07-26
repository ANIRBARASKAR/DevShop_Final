import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom'
import { Badge, Box } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import WidgetsIcon from '@mui/icons-material/Widgets';
import GroupIcon from '@mui/icons-material/Group';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../store/actions/userAction'


export default function Navbar() {
  const dispatch = useDispatch()
  const { cartItem } = useSelector(state => state.cart)
  const { login } = useSelector(state => state.user)
  return (
    <>
      <Box sx={{ mb: "75px" }}>
        <AppBar fullwidth position="fixed">
          <Toolbar fullwidth>
            <Typography variant="h6">
              <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
                <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Home
                </Button>
              </Link>
              {
                login?.name
                  ? <>
                    <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        color='inherit'
                        variant="text"
                        startIcon={<AccountCircleIcon />}>

                        {login.name}
                      </Button>
                    </Link>

                  </>
                  :
                  <>
                    <Link to={'/login'} style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        color='inherit'
                        variant="text"
                        startIcon={<AccountCircleIcon />}>
                        Login
                      </Button>
                    </Link>
                    <Link to={'/register'} style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        variant="text"
                        color='inherit'
                        startIcon={<AppRegistrationIcon />}>
                        Register
                      </Button>
                    </Link>
                  </>
              }


              {
                login?.isAdmin
                  ? <>
                    <Link to={'/admin/add-product'} style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        variant="text"
                        color='inherit'
                        startIcon={<ComputerIcon />}>
                        Add-Product
                      </Button>
                    </Link>
                    <Link to={'/admin/dashboard'} style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        variant="text"
                        color='inherit'
                        startIcon={<DashboardIcon />}>
                        Dashboard
                      </Button>
                    </Link>
                    <Link to={'/admin/users'} style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        variant="text"
                        color='inherit'
                        startIcon={<GroupIcon />}>
                        Users
                      </Button>
                    </Link>
                    <Link to={'admin/orders'} style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        color='inherit'
                        variant="text"
                        startIcon={<WidgetsIcon />}>
                        Orders
                      </Button>
                    </Link>
                  </>
                  : <>
                    <Link to={'/orders'} style={{ textDecoration: "none", color: "white" }}>
                      <Button
                        color='inherit'
                        variant="text"
                        startIcon={<WidgetsIcon />}>
                        Orders
                      </Button>
                    </Link>
                  </>
              }


              <Link to={'/cart'}>
                {/* <Badge badgeContent={cartItem.length} color="primary"> */}
                <Badge badgeContent={cartItem.reduce((total, item) => total + item.qty, 0)} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </Link>
              <Link to={'/login'} style={{ textDecoration: "none", color: "white" }}>
                <Button
                  onClick={e => dispatch(logoutAction())}
                  variant="text"
                  color='inherit'
                  startIcon={<LogoutIcon />}>
                  Logout

                </Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  )
}
