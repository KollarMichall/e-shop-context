import { createContext } from "react";
import SHOP_DATA from '../collections/ShopData'

const CollectionsContext = createContext(SHOP_DATA)

export default CollectionsContext