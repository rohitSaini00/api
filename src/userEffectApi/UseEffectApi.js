import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectApi = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const mydata = data[value];
  console.log(mydata);
  const districtsData = mydata?.districts;
  const [distData, setdistData] = useState([]);
  const finalData = mydata?.districts[distData];

  const extractData = (districtsData) => {
    const header = [];
    if (districtsData) {
      Object.keys(districtsData).forEach((objKeys) => {
        header.push(objKeys);
      });
    }
    return header;
  };
  const rohitdist = extractData(districtsData);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangedist = (e) => {
    setdistData(e.target.value);
  };
  const getUsers = async () => {
    const response = await axios.get(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    const fetchData = response.data;
    setData({
      ...fetchData,
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Covid 19 State Wise Case</h1>
        <div className="option-select mt-4">
          <select
            className="form-select form-select-lg mb-3 myoption"
            aria-label=".form-select-lg example"
            value={value}
            onChange={onChange}
          >
            <option selected>Select Disit</option>
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

          <select
            className="form-select form-select-lg mb-3 myoption"
            aria-label=".form-select-lg example"
            value2={value}
            onChange={onChangedist}
          >
            <option selected>Select Disit</option>
            {rohitdist.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="container">
        <div className="mybox">
          <div className="state-data">
            <h2>State Wise Case</h2>
            <div className="fetch-state-data mt-2">
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
                      {mydata?.total?.confirmed ? mydata?.total?.confirmed : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th scope="row">Deceased Cases</th>
                    <td>
                      {mydata?.total?.deceased ? mydata?.total?.deceased : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <th scope="row">Recovered Cases</th>
                    <td>
                      {mydata?.total?.recovered ? mydata?.total?.recovered : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <th scope="row">Tested</th>
                    <td>{mydata?.total?.tested ? mydata?.total?.tested : 0}</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <th scope="row">Vaccinated1</th>
                    <td>
                      {mydata?.total?.vaccinated1
                        ? mydata?.total?.vaccinated1
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <th scope="row">Vaccinated2</th>
                    <td>
                      {mydata?.total?.vaccinated2
                        ? mydata?.total?.vaccinated2
                        : 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="box mt-3">
            <h2>Districts Wise Case</h2>
            {
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
                      {finalData?.total?.confirmed
                        ? finalData?.total?.confirmed
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th scope="row">Deceased Cases</th>
                    <td>
                      {finalData?.total?.deceased
                        ? finalData?.total?.deceased
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <th scope="row">Recovered Cases</th>
                    <td>
                      {finalData?.total?.recovered
                        ? finalData?.total?.recovered
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <th scope="row">Tested</th>
                    <td>
                      {finalData?.total?.tested ? finalData?.total?.tested : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <th scope="row">Vaccinated1</th>
                    <td>
                      {finalData?.total?.vaccinated1
                        ? finalData?.total?.vaccinated1
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <th scope="row">Vaccinated2</th>
                    <td>
                      {finalData?.total?.vaccinated2
                        ? finalData?.total?.vaccinated2
                        : 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
