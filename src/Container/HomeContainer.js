import { connect } from "react-redux";
import Home from "../Components/Home";
import { addtoCart, removetoCart } from "../Services/Action/Action";

const mapStateToProps = (state) => ({
  cardData: state.cardItem,
});

const mapDispatchToProps = (dispatch) => ({
  autoToCartHandler: (data) => dispatch(addtoCart(data)),
  autoToCartRemover: (data) => dispatch(removetoCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
