import Config from "../../Firebase/config";
import { collection, setDoc, doc } from 'firebase/firestore';



const setCart = async(order) => {

    let dt = Config.serverTimestamp();
    let newOrder = {...order, date: dt };

    const newDocColl = doc(collection(Config.db, "Orders"));
    await setDoc(newDocColl, newOrder);
    let orderId = newDocColl._key.path.segments[newDocColl._key.path.segments.length - 1];
    return orderId;
};

export { setCart }