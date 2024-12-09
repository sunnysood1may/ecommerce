import Header from "./Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateProduct(props) {
  console.warn("props", props.router.params.id);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    let result = fetch("https://jsonplaceholder.typicode.com/users/"+props.router.params.id).then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        setData(resp);
        setName(resp.name);
        setUsername(resp.username);
        setEmail(resp.email);
        setFile(resp.file);
      });
    }); 
  },[]);

  async function editProduct(id){
    const formData = new FormData();
    //formData.append('file', file);
    formData.append('name', name);
    formData.append('username', username);
    formData.append('email', email);
    let result = await fetch("https://jsonplaceholder.typicode.com/users/api/updateproduct/"+id+"?_method=PUT", {
      method: 'POST',
      body: formData
    });
    alert("Data has been upated");
  }

  return (
    <div>
      <Header />
      <h1>Update Product</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={data.name} /> <br /> <br />
      <input type="text" onChange={(e)=>setUsername(e.target.value)} defaultValue={data.username} /> <br /> <br />
      <input type="text" onChange={(e)=>setEmail(e.target.value)} defaultValue={data.email} /> <br /> <br />
      { /*<input type="file" onChange={(e)=>setFile(e.target.files[0])} defaultValue={data.file_path} /> <br /> <br />
      <img style={{ width: 100 }} src={"http://localhost:8000/" + data.file_path} /> <br /> <br /> */ }
      <button onClick={()=>{editProduct(data.id)}}>Update Product</button>
    </div>
  );
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default withRouter(UpdateProduct);
