import React, { useState } from "react";
import { response } from "../response";
import { Link } from "react-router-dom";

function LeaderBoard({ sortItem }) {
  const responseList = response.list;
  const [list, setList] = useState(() => {
    let sortedList;
    sortedList =
      sortItem === "name"
        ? responseList.sort((a, b) => (a.name > b.name ? 1 : -1))
        : responseList.sort((a, b) => a[sortItem] - b[sortItem]);
    return sortedList;
  });

  const sortHandler = (e, sort) => {
    let sortedList;

    sortedList =
      sort === "name"
        ? responseList.sort((a, b) => (a.name > b.name ? 1 : -1))
        : responseList.sort((a, b) => a[sort] - b[sort]);
    setList(sortedList);
  };

  return (
    <div className="text-center mt-50">
      <div>
        <div>
          <Link to="/rank">
            <button
              data-testid="route-rank"
              className={`outlined`}
              type="button"
              onClick={(e) => {
                sortHandler(e, "rank");
              }}
            >
              Rank
            </button>
          </Link>
          <Link to="/name">
            <button
              data-testid="route-name"
              className="outlined"
              type="button"
              onClick={(e) => {
                sortHandler(e, "name");
              }}
            >
              Name
            </button>
          </Link>
          <Link to="/points">
            <button
              data-testid="route-points"
              className="outlined"
              type="button"
              onClick={(e) => {
                sortHandler(e, "points");
              }}
            >
              Points
            </button>
          </Link>
          <Link to="/age">
            <button
              data-testid="route-age"
              className="outlined"
              type="button"
              onClick={(e) => {
                sortHandler(e, "age");
              }}
            >
              Age
            </button>
          </Link>
        </div>
      </div>
      <div className="card mx-auto pb-20 mb-30" style={{ width: "50%" }}>
        <table className="mt-50" data-testid="app-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="numeric">Points</th>
              <th className="numeric">Age</th>
            </tr>
          </thead>
          <tbody data-testid="app-tbody">
            {list.map((item, index) => {
              return (
                <tr key={item.rank}>
                  <td data-testid={`rank-${index}`}>{item.rank}</td>
                  <td data-testid={`name-${index}`}>{item.name}</td>
                  <td data-testid={`points-${index}`} className="numeric">
                    {item.points}
                  </td>
                  <td data-testid={`age-${index}`} className="numeric">
                    {item.age}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
