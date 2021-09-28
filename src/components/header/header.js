import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import {showCart} from '../../store/actions'
function Header(props) {
  const state = useSelector((state) => state);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Store Front
            </Typography>
            <Button color="inherit" onClick={()=>props.showCart(!props.cart.show)}>Cart ({state.cart.count})</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}


const mapStateToprops = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = { showCart };
export default connect(mapStateToprops,mapDispatchToProps)(Header);