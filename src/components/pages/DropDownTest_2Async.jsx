import React, { Component } from "react";

import AsyncSelect from "react-select/async";

const loadOptions = (inputValue, callback) => {
  console.log("inputValue = " + inputValue);
  fetch(`https://api.github.com/search/users?q=${inputValue}`)
    .then((response) => response.json())
    .then((json) => {
      //   callback(null, { options: json.items });
      console.log("json = ");
      console.log(json);
      const finItems = json.items.slice(0, 5).map((x) => x.login);
      console.log(finItems);
      console.log("json = ");
      //   callback(finItems);
      callback([
        { value: "forest", label: "Forest", color: "#00875A" },
        { value: "slate", label: "Slate", color: "#253858" },
        { value: "silver", label: "Silver", color: "#666666" },
      ]);
    })
    .catch((err) => {
      console.log("error " + err);
    });
};

export default class DropDownTest_2Async extends Component {
  state = { inputValue: "" };
  handleInputChange = (newValue) => {
    console.log("handleInputChange");
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <div>
        <pre>inputValue: "{this.state.inputValue}"</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
