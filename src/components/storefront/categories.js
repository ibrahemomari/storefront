import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

import { connect } from "react-redux";
import { activatedCategory, reset } from "../../store/categories";

const Categories = (props) => {
  return (
    <section>
      <Breadcrumbs>
        {/* <Link color="inherit" onClick={props.reset()}>
          ALL
        </Link> */}
        <Link color="inherit" onClick={()=>props.activatedCategory("FOOD")}>
          FOOD
        </Link>
        <Link color="inherit" onClick={()=>props.activatedCategory("ELECTRONICS")}>
          ELECTRONICS
        </Link>
      </Breadcrumbs>
    </section>
  );
};
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  active: state.categories.activeCategory,
});

const mapDispatchToProps = { activatedCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
