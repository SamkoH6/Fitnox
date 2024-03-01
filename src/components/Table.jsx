import React from "react";
import { FaCheck } from "react-icons/fa6";

const Table = () => {
  const data = [
    {
      category: "Cena",
      col1: "19.99€ mes.",
      col2: "29.99€ mes.",
      col3: "49.99€ mes.",
    },
    {
      category: "Trvanie",
      col1: "12 mesiacov",
      col2: "12 mesiacov",
      col3: "12 mesiacov",
    },
    {
      category: "Otváracie hodiny",
      col1: "6:00 až 24:00",
      col2: "6:00 až 24:00",
      col3: "6:00 až 24:00",
    },
    {
      category: "Fitká",
      col1: "Jedno fitko",
      col2: "Jedno fitko",
      col3: "Všetky Fitnox fitká",
    },
    {
      category: "Zóna pre dámy",
      col1: <FaCheck />,
      col2: <FaCheck />,
      col3: <FaCheck />,
    },
    {
      category: "Bezplatná Wi-Fi",
      col1: <FaCheck />,
      col2: <FaCheck />,
      col3: <FaCheck />,
    },
    {
      category: "Sprchy",
      col2: <FaCheck />,
      col3: <FaCheck />,
    },
    {
      category: "Fitnox Bar",
      col2: <FaCheck />,
      col3: <FaCheck />,
    },
    {
      category: "Pozastavenie členstva",
      col3: <FaCheck />,
    },
    // Add more data as needed
  ];

  const tableData = data.map(({ category, col1, col2, col3 }) => (
    <tr key={category}>
      <td>{category}</td>
      <td>{col1}</td>
      <td>{col2}</td>
      <td>{col3}</td>
    </tr>
  ));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Pro Turbo</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
