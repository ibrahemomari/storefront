import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";

const Products = (props) => {
  const useStyle = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyle();

  return (
    <section>
      {props.products.map((el) => {
        return (
          <Card className={classes.root} key={el.name}>
            <CardActionArea>
              <CardMedi
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title={el.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.discription}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                ADD TO CARD
              </Button>
              <Button size="small" color="primary">
                VIEW DETAILS
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.category.products,
  activeCategory: state.category.activeCategory,
});

export default connect(mapStateToProps)(Products);
