import React, { useState, useEffect } from "react";
import Data from "./data/data.json";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  return (
    <section>
      {data.map(
        ({
          id,
          company,
          logo,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
        }) => {
          return (
            <div className="card">
              <div className="card__wrap">
                <img src={logo} alt={position} />
                <div className="wrap__left">
                  <p>{company}</p>
                  <p>{position}</p>
                  <ul>
                    <li>{postedAt}</li>
                    <li>{contract}</li>
                    <li>{location}</li>
                  </ul>
                </div>
              </div>
              <div className="card__right">
                <button>{role}</button>
                <button>{level}</button>
                {languages && languages.map((l) => <button>{l}</button>)}
                {tools && tools.map((t) => <button>{t}</button>)}
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default Main;
