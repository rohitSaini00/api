import { connect } from "react-redux";
import Home from "../Components/Home";
import { addtoCart } from "../Services/Action/Action";

// export default Home;
const mapStateToProps = (state) => ({
  cardData: state.cardItem,
});

const mapDispatchToProps = (dispatch) => ({
  autoToCartHandler: (data) => dispatch(addtoCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
