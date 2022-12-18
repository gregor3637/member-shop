export async function getAllOffers() {
  await new Promise((res) => setTimeout(res, 500));

  // return [];
  return [
    {
      id: 0,
      itemName: "MBAI 111",
      isVerified: true,
      itemImg:
        "https://lh3.googleusercontent.com/64MJCwg01yhleDbs4vFCf4WYJh819v42aOwNnMo-0F7FFI2amD14qexFcEd9r7lSqsT2c40X8JeiJG7cHrEiLE8UtE5Ib7qyOYh2=w184",
      itemsCount: 6,
      floorBid: { unit: "ETH", amount: 0.005 },
      activeBids: 5,
    },
    {
      id: 1,
      itemName: "MBAI 222",
      isVerified: false,
      itemImg:
        "https://lh3.googleusercontent.com/64MJCwg01yhleDbs4vFCf4WYJh819v42aOwNnMo-0F7FFI2amD14qexFcEd9r7lSqsT2c40X8JeiJG7cHrEiLE8UtE5Ib7qyOYh2=w184",
      itemsCount: 6,
      floorBid: { unit: "ETH", amount: 0.005 },
      activeBids: 5,
    },
    {
      id: 2,
      itemName: "MBAI 333",
      isVerified: false,
      itemImg:
        "https://lh3.googleusercontent.com/64MJCwg01yhleDbs4vFCf4WYJh819v42aOwNnMo-0F7FFI2amD14qexFcEd9r7lSqsT2c40X8JeiJG7cHrEiLE8UtE5Ib7qyOYh2=w184",
      itemsCount: 6,
      floorBid: { unit: "ETH", amount: 0.005 },
      activeBids: 5,
    },
    {
      id: 3,
      itemName: "MBAI 444",
      isVerified: false,
      itemImg:
        "https://lh3.googleusercontent.com/64MJCwg01yhleDbs4vFCf4WYJh819v42aOwNnMo-0F7FFI2amD14qexFcEd9r7lSqsT2c40X8JeiJG7cHrEiLE8UtE5Ib7qyOYh2=w184",
      itemsCount: 6,
      floorBid: { unit: "ETH", amount: 0.005 },
      activeBids: 5,
    },
  ];
}

export async function updateSingleOffer(itemName, itemInputValue) {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ title: itemName, value: itemInputValue }),
  // };

  // try {
  //   const fetchResponse = await fetch(
  //     `http://${location}:9000/api/sensors/`,
  //     requestOptions
  //   );
  //   const data = await fetchResponse.json();
  //   return data;

  // } catch (e) {
  //   return e;
  // }

  await new Promise((res) => setTimeout(res, 500));
  return { status: 200, message: `Updated ${itemName} offer data` };
}

export async function updateAllOffer(offersValue) {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ title: itemName, value: itemInputValue }),
  // };

  // try {
  //   const fetchResponse = await fetch(
  //     `http://${location}:9000/api/sensors/`,
  //     requestOptions
  //   );
  //   const data = await fetchResponse.json();
  //   return data;

  // } catch (e) {
  //   return e;
  // }

  await new Promise((res) => setTimeout(res, 500));
  return { status: 200, message: "Updated All Offers" };
}