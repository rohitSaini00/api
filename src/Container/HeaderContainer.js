import { connect } from "react-redux";
import Header from "../Components/Header";
import { addtoCart } from "../Services/Action/Action";

// export default Home;
const mapStateToProps = (state) => ({
  cardData: state.cardItem,
});

const mapDispatchToProps = (dispatch) => ({
  autoToCartHandler: (data) => dispatch(addtoCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
