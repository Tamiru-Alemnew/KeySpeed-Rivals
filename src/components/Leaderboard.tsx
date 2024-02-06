"use client"
import React, { useState } from "react";

const data = [
  { User: "User1", Rank: 1, "Typing Speed": 100, Time: "10:00" },
  { User: "User2", Rank: 2, "Typing Speed": 90, Time: "10:05" },
    { User: "User3", Rank: 3, "Typing Speed": 80, Time: "10:10" },
    { User: "User4", Rank: 4, "Typing Speed": 70, Time: "10:15" },
    { User: "User5", Rank: 5, "Typing Speed": 60, Time: "10:20" },
    { User: "User6", Rank: 6, "Typing Speed": 50, Time: "10:25" },
    { User: "User7", Rank: 7, "Typing Speed": 40, Time: "10:30" },
    { User: "User8", Rank: 8, "Typing Speed": 30, Time: "10:35" },
    { User: "User9", Rank: 9, "Typing Speed": 20, Time: "10:40" },
    { User: "User10", Rank: 10, "Typing Speed": 10, Time: "10:45" },
];

function Table() {
  const [filter, setFilter] = useState("");



  return (
    <div className="text-white flex justify-center">
      <table className="w-[80vw] table-fixed bg-gray-800 rounded-lg shadow-lg">
        <thead className="border-b-[1px] border-b-white bg-gray-700 text-lg font-medium text-left">
          <tr>
            <th className="w-1/4 p-4">User</th>
            <th className="w-1/4 p-4">Rank</th>
            <th className="w-1/4 p-4">Typing Speed</th>
            <th className="w-1/4 p-4">Time</th>
          </tr>
        </thead>
        <tbody className="text-lg font-light">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-700">
              <td className="w-1/4 p-4">{row.User}</td>
              <td className="w-1/4 p-4">{row.Rank}</td>
              <td className="w-1/4 p-4">{row["Typing Speed"]}</td>
              <td className="w-1/4 p-4">{row.Time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
