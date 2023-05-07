import React, { useState, useEffect } from "react";
import Data from "./data/data.json";

const Main = () => {
  const [data, setData] = useState([]);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  const handleClick = ({ target }) => {
    if (!queries.includes(target.id)) {
      setQueries([...queries, target.id]);
    }
  };

  const removeQuery = ({ target }) => {
    const queryIndex = queries.indexOf(target.id);
    if (queryIndex !== -1) {
      const newFilterArr = [...queries];
      newFilterArr.splice(queryIndex, 1);
      setQueries(newFilterArr);
    }
  };
  return (
    <section>
      {Boolean(queries.length) && (
        <div className="filter-bar">
          {queries.map((q, index) => {
            return (
              <div key={index}>
                <button>{q}</button>
                <button className="black" id={q} onClick={removeQuery}>
                  <i className="fas fa-times" id={q} onClick={removeQuery}></i>
                </button>
              </div>
            );
          })}
        </div>
      )}
      {data
        .filter(({ role, level, languages, tools }) => {
          const allValues = [role, level, ...languages, ...tools];
          return queries.every((query) => allValues.includes(query));
        })
        .map(
          ({
            id,
            company,
            logo,
            featured,
            isNew,
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
              <div key={id} className="card">
                <div className="card__wrap">
                  <div>
                    <img src={logo} alt={position} width="88px" height="88px" />
                  </div>
                  <div className="wrap__left">
                    <div className="wrap__p">
                      <b>{company}</b>
                      {isNew ? <p className="p-new">NEW!</p> : null}
                      {featured ? <p className="p-feat">FEATURED</p> : null}
                    </div>
                    <h3>{position}</h3>
                    <ul>
                      <li>{postedAt}</li>&middot;<li>{contract}</li>&middot;
                      <li>{location}</li>
                    </ul>
                  </div>
                </div>
                <div className="card__right">
                  <button id={role} onClick={handleClick}>
                    {role}
                  </button>
                  <button id={level} onClick={handleClick}>
                    {level}
                  </button>
                  {languages &&
                    languages.map((l, index) => (
                      <button key={index} id={l} onClick={handleClick}>
                        {l}
                      </button>
                    ))}
                  {tools &&
                    tools.map((t, index) => (
                      <button key={index} id={t} onClick={handleClick}>
                        {t}
                      </button>
                    ))}
                </div>
              </div>
            );
          }
        )}
    </section>
  );
};

export default Main;
