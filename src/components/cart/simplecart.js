import React from "react";
import { If } from "react-if";
import { connect } from "react-redux";
import { deleteProduct } from "../../store/actions";
import { Button } from "@material-ui/core";
import "../../style/simplecart.scss";

const SimpleCart = (props) => {
  return (
    <>
      <section className="simplecart-conitaner">
        <If condition={() => props.cart.length !== 0}>
          <ui>
            {props.cart.show &&
              props.cart.cart.map((el, idx) => {
                return (
                  <li key={idx}>
                    <span>{el.name}</span>
                    <Button
                      color="secondary"
                      onClick={() => {
                        props.deleteProduct(el, idx);
                      }}
                    >
                      Delete
                    </Button>
                  </li>
                );
              })}
          </ui>
        </If>
      </section>
    </>
  );
};

const mapStateToprops = (state) => {
  return { cart: state.cart };
};
const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToprops, mapDispatchToProps)(SimpleCart);
