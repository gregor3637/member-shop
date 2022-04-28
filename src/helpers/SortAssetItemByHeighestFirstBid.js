const sortAssetItemByHeighestFirstBid = (a, b) => {
  return b.bids?.active?.[0]?.amount - a.bids?.active?.[0]?.amount;
};

export default sortAssetItemByHeighestFirstBid;
