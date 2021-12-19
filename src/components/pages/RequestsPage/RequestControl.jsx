import MyCollectionAndItems from "./Types/MyCollectionAndItems";
import TransactionError from "./Types/TransactionError";
import TrustAndSafety from "./Types/TrustAndSafety";

const RequestControl = (type) => {
  switch (type) {
    case "TrustAndSafety":
      return <TrustAndSafety />;

    case "MyCollectionAndItems":
      return <MyCollectionAndItems />;

    case "TransactionError":
      return <TransactionError />;

    default:
      return null;
  }
};

export default RequestControl;
