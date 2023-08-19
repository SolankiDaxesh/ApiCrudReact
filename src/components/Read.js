import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
export default function Read() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <p></p>
      <table border="1" color="white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.forEach((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          ))} */}
          {/* {data.map((products, index) => {
            return (
              <tr key={products.index}>
                <td>{products.id}</td>
                <td>{products.title}</td>
                <td>{products.description}</td>
              </tr>
            );
          })}
           */}

          {data.map((products, index) => {
            return (
              <tr key={index}>
                <td>{products.id}</td>
                <td>{products.title}</td>
                <td>{products.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
