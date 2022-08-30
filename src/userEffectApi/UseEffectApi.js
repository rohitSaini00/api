import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectApi = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUser(data);
    console.log();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Hello GitHub Users</h1>
      <div className="container">
        <div className="row">
          {user.map((element, index) => {
            return (
              <div key={index} className="col-4 mt-4 mb-4">
                <div className="mycard">
                  <div className="mydata-img">
                    <img src={element.avatar_url} alt="" width="170px" />
                  </div>
                  <div className="card-data">
                    <div className="haiding-data">
                      <h3>{element.login.toUpperCase()}</h3>
                      <span>{element.node_id}</span>
                      <button>
                        <a href={element.html_url}>Follow on GitHub</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseEffectApi;
