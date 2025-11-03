import { collection, getDocs } from "firebase/firestore";
import {db} from "../../api/configuration/firebase_config.ts";

const useHouseQuery = () => {
    const loadHousesDatas = async () => {
        try {
            const housesCol = collection(db, "houses");
            const housesSnapshot = await getDocs(housesCol);
            const housesList = housesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log(housesList);
            return housesList;
        } catch (error) {
            console.error("Error fetching houses: ", error);
        }
    }

    return {
        loadHousesDatas,
    }
}

export {useHouseQuery};