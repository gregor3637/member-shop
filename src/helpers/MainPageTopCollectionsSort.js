const methods = {
  daily: (a, b) => {
    const valA = Math.abs(+a.change.daily.percentage);
    const valB = Math.abs(+b.change.daily.percentage);

    return valB - valA;
  },
  weekly: (a, b) => {
    return (
      Math.abs(+b.change.weekly.percentage) -
      Math.abs(+a.change.weekly.percentage)
    );
  },
  monthly: (a, b) => {
    return (
      Math.abs(+b.change.monthly.percentage) -
      Math.abs(+a.change.monthly.percentage)
    );
  },
};

export default methods;
