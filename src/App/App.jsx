import CartContext from '../Context/CartContext';
import Routes from '../Routes/Index';

const App = () => {

  return (
    <CartContext>
      <Routes />
    </CartContext>
  );
}

export default App;
