export const sortByType = {
  "Recently sold": (a, b) => {
    let first = a.boughtPrices?.[a.boughtPrices.length - 1];
    let second = b.boughtPrices?.[b.boughtPrices.length - 1];

    if (first === undefined && second === undefined) return 0;
    if (first !== undefined && second === undefined) return -1;
    if (first === undefined && second !== undefined) return 1;

    // return new Date(first.date).getTime() - new Date(second.date).getTime();
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  },

  "Recently added": (a, b) => {
    let first = a.listings?.[a.listings.length - 1];
    let second = b.listings?.[b.listings.length - 1];

    if (first === undefined && second === undefined) return 0;
    if (first !== undefined && second === undefined) return -1;
    if (first === undefined && second !== undefined) return 1;

    return (
      new Date(second.addDate).getTime() - new Date(first.addDate).getTime()
    );
  },

  //done
  "Recently created": (a, b) => {
    let first = a.itemActivity?.find((x) => x.type === "mint");
    let second = b.itemActivity?.find((x) => x.type === "mint");

    if (first === undefined && second === undefined) return 0;
    if (first !== undefined && second === undefined) return -1;
    if (first === undefined && second !== undefined) return 1;

    return new Date(second.date).getTime() - new Date(first.date).getTime();
  },

  //done
  Oldest: (a, b) => {
    let first = a.itemActivity?.find((x) => x.type === "mint");
    let second = b.itemActivity?.find((x) => x.type === "mint");

    if (first === undefined && second === undefined) return 0;
    if (first !== undefined && second === undefined) return -1;
    if (first === undefined && second !== undefined) return 1;

    return new Date(first.date).getTime() - new Date(second.date).getTime();
  },

  //done
  "Auction ending soon": (a, b) => {
    let first = a.auction ?? undefined;
    let second = b.auction ?? undefined;

    if (first === undefined && second === undefined) return 0;
    if (first !== undefined && second === undefined) return -1;
    if (first === undefined && second !== undefined) return 1;

    return new Date(a.auction).getTime() - new Date(b.auction).getTime();
  },

  //done
  "Price: High to Low": (a, b) => {
    let first = a.price?.amount;
    let second = b.price?.amount;

    if (first === undefined && second === undefined) return 0;
    if (first !== undefined && second === undefined) return -1;
    if (first === undefined && second !== undefined) return 1;

    return second - first;
  },

  //done
  "Price: Low to High": (a, b) => {
    let first = a.price?.amount;
    let second = b.price?.amount;

    if (first === undefined && second === undefined) return 0;
    if (first !== undefined && second === undefined) return -1;
    if (first === undefined && second !== undefined) return 1;

    return first - second;
  },

  //done
  "Highest last sale": (a, b) => {
    let first = a.boughtPrices?.[a.boughtPrices.length - 1]?.amount || 0;
    let second = b.boughtPrices?.[b.boughtPrices.length - 1]?.amount || 0;

    return second - first;
  },
};
