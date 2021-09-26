import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

import { connect } from "react-redux";
import { choosenCat, reset } from "../../store/categories";

const Categories = (props) => {
  return (
    <section>
      <Breadcrumbs>
        <Link color="inherit" onClick={props.reset()}>
          ALL
        </Link>
        <Link color="inherit" onClick={props.choosenCat("FOOD")}>
          FOOD
        </Link>
        <Link color="inherit" onClick={props.choosenCat("ELECTRONICS")}>
          ELECTRONICS
        </Link>
      </Breadcrumbs>
    </section>
  );
};
const mapStateToProps = (state) => ({
  categories:state.categories,
});

const mapDispatchToProps = { choosenCat, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
