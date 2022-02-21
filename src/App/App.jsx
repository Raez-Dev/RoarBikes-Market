// import Navbar from "./components/Navbar";
// import ItemListContainer from '../Components/ItemListContainer';
import Store from '../Pages/Store/Store';
import Layout from "../Layouts/Layout";

const App = () => {
  // const [store, setStore] = useState({});

  // useEffect(() => {
  //   //console.log("Cambio Store");

  // }, [store])

  // const onStoreChange = (nStore) => {
  //   setStore(nStore);
  // }

  return (
    <>
      {/* <Layout itemcount={store.itemcount}> */}
      <Layout>
        {/* <ItemListContainer greeting="Listado de Bicicletas" onStoreChange={onStoreChange} /> */}
        <Store />
      </Layout>
    </>
  );
}

export default App;
