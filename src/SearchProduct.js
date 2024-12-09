import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";

function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    console.log(key);
    //let result = await fetch("http://localhost:8000/api/search/" + key);
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    console.warn(result);
    setData(result);
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Search Product"
        />
        <Table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Username</td>
            <td>Image</td>
            <td>Phone</td>
          </tr>
          {data.map((item,i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>
                <img
                  style={{ width: 100 }}
                  src={"http://localhost:8000/" + item.file_path}
                />
              </td>
              <td>{item.phone}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default SearchProduct;
