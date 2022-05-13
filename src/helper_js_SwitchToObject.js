//https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals

function getDrink(type, data) {
  var drinks = {
    coke: function () {
      return "Coke";
    },
    pepsi: function () {
      return "Pepsi";
    },
    lemonade: function (data) {
      return "Lemonade";
    },
    default: function () {
      return "Default item";
    },
  };
  return (drinks[type] || drinks["default"])(data);
}

function getFilter(type) {
  var filters = {
    Trending: (x) => true,
    default: (x, type) => {
      //
      return x.details?.category.includes(type);
    },
  };
  return filters[type] || filters["default"];
}
