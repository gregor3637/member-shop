export const sortMethods = {
  Newest: (a, b) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  },
  Oldest: (a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  },
  "Price: Low to High": (a, b) => {
    return a.amount - b.amount;
  },
  "Price: High to Low": (a, b) => {
    return b.amount - a.amount;
  },
};
