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
  console.log(data);
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
          <option selected>Selet State</option>
          <option value="AP">Andra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="BR">Bihar</option>
          <option value="CH">Chandigarh</option>
          <option value="CH">Chhattisgarh</option>
          <option value="DL">Delhi</option>
          <option value="GA">Goa</option>
          <option value="JH">Jharkhand</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="HR">Haryana</option>
          <option value="KR">Karnataka</option>
          <option value="KA">Kerla</option>
          <option value="LA">Lakshyadeep</option>
          <option value="MH">Maharatha</option>
          <option value="ML">Meghalaya</option>
          <option value="MN">Manipura</option>
          <option value="MP">Mandhya Pradesh</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Odisha</option>
          <option value="PB">Punjab</option>
          <option value="PY">Pandhyacheri</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TR">Tripura</option>
          <option value="TN">Tamil Nadu</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="GJ">Gujrat</option>
          <option value="WB">West Bengal</option>
        </select>
      </div>
      <div className="container">
        <div className="box">
          <table border="2px solid red" className="mytable">
            <thead>
              <th>S.No</th>
              <th>Title</th>
              <th>Data</th>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th scope="row">Confirmed Cases</th>
                <td>
                  {mydata?.delta?.confirmed ? mydata?.delta?.confirmed : 0}
                </td>
              </tr>
              <tr>
                <th>2</th>
                <th scope="row">Deceased Cases</th>
                <td>{mydata?.delta?.deceased ? mydata?.delta?.deceased : 0}</td>
              </tr>
              <tr>
                <th>3</th>
                <th scope="row">Recovered Cases</th>
                <td>
                  {mydata?.delta?.recovered ? mydata?.delta?.recovered : 0}
                </td>
              </tr>
              <tr>
                <th>4</th>
                <th scope="row">Tested</th>
                <td>{mydata?.delta?.tested ? mydata?.delta?.tested : 0}</td>
              </tr>
              <tr>
                <th>5</th>
                <th scope="row">Vaccinated1</th>
                <td>
                  {mydata?.delta?.vaccinated1 ? mydata?.delta?.vaccinated1 : 0}
                </td>
              </tr>
              <tr>
                <th>6</th>
                <th scope="row">Vaccinated2</th>
                <td>
                  {mydata?.delta?.vaccinated2 ? mydata?.delta?.vaccinated2 : 0}
                </td>
              </tr>
              <tr>
                <th>7</th>
                <th scope="row">Last Updated</th>
                <td>
                  {mydata?.meta?.last_updated ? mydata?.meta?.last_updated : 0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
