import option from "./Types/Options/Options";
import collections from "./Types/Collection/Collection";
import blockchain from "./Types/Blockchain/Blockchain";
import category from "./Types/Category/Category";
import assetType from "./Types/AssetType/AssetType";
import saleType from "./Types/SaleType/SaleType";
import price from "./Types/Price/Price";

const filtersData = {
  options: option,
  collections: collections,
  blockchain: blockchain,
  category: category,
  assetType: assetType,
  saleType: saleType,
  price: price,
};

console.log('111 filtersData ', filtersData);
console.log('111 option ', option);

export default filtersData;
