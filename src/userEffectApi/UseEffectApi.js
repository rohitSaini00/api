import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectApi = () => {
  const getInitialState = () => {
    const value1 = "AP";
    return value1;
  };
  const [data, setData] = useState([]);
  const [value, setValue] = useState(getInitialState);
  const mydata = data[value];
  console.log(mydata);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const getUsers = async () => {
    const response = await axios.get(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    setData(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        <h1>Covid 19 State Wise Case</h1>
        <select
          className="form-select form-select-lg mb-3 myoption"
          aria-label=".form-select-lg example"
          value={value}
          onChange={onChange}
        >
          <option value="AP">Andra Pradesh</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="MP">Mandhya Pradesh</option>
        </select>
      </div>
      <div className="container">
        <div className="box">
          <table border="2px solid red" class="mytable">
            <thead>
              <th>S.No</th>
              <th>Title</th>
              <th>Data</th>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th scope="row">Confirmed Cases</th>
                <td>{mydata?.delta?.confirmed}</td>
              </tr>
              <tr>
                <th>2</th>
                <th scope="row">Deceased Cases</th>
                <td>{mydata?.delta?.deceased}</td>
              </tr>
              <tr>
                <th>3</th>
                <th scope="row">Recovered Cases</th>
                <td>{mydata?.delta?.recovered}</td>
              </tr>
              <tr>
                <th>4</th>
                <th scope="row">Tested</th>
                <td>{mydata?.delta?.tested}</td>
              </tr>
              <tr>
                <th>5</th>
                <th scope="row">Vaccinated1</th>
                <td>{mydata?.delta?.vaccinated1}</td>
              </tr>
              <tr>
                <th>6</th>
                <th scope="row">Vaccinated2</th>
                <td>{mydata?.delta?.vaccinated2}</td>
              </tr>
              <tr>
                <th>7</th>
                <th scope="row">Last Updated</th>
                <td>{mydata?.meta?.last_updated}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
