import React from "react";
// import { MenuList } from "../components/data";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector,useDispatch} from "react-redux";
import { addToCart,calculatePrice} from "../features/CartSlice";


const Menu = () => {
  const items=useSelector((state)=>state.allCart.items)

  const dispatch=useDispatch();

  return (
      <Box className="menu"sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        { items.map((item) => (
          <Card className="card" key={item.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia className="cardImg"
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={item.image}
                alt={item.name}
              />
              <CardContent className="cardcontent">
                <Typography className="itemname" variant="h5" gutterBottom component={"div"}>
                  {item.name}
                </Typography>
                <Typography className="itembody" variant="body2">{item.description}</Typography>
                <Typography className="itemprice" variant="body2" mt={1.5} fontWeight='bold'> ${item.price}</Typography>
              </CardContent>
              <Button className="btn"  onClick={()=>{dispatch(addToCart(item));dispatch(calculatePrice())}} variant="outlined" sx={{margin:'4px 17px',
               backgroundColor:'black'
              }}>Add to Cart</Button>
            </CardActionArea>
          </Card>
        ))}
      </Box>
  );
};

export default Menu;
