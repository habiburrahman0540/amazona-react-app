import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'; 
import CartScreen from './Screens/cartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;
  return (
      <Router>
    <div className="grid-container">
    <header className="row">
        <div className="header-brand">
            <Link to="/">Amazon</Link>
        </div>
        <div className="">
            <Link to="/cart">Cart
            {cartItems.length > 0 &&(
                <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/signin">Sign in</Link>
        </div>
    </header>
    <main>
    <Routes>
        <Route path="/" element={<HomeScreen/>} exact/>
        <Route path="/product/:id" element={<ProductScreen/>}/>
        <Route path="/cart/:id" element={<CartScreen/>}/>
    </Routes>
 
    </main>
    <footer className="row center">All right reserved.</footer>
</div>
</Router>
  );
}

export default App;
