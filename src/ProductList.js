import Header from './Header';
import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function ProductList()
{
    const [data,setData] = useState([]);
    useEffect( ()=>{
        getData();
    },[]);

    async function getData()
    {
        let result = await fetch("https://jsonplaceholder.typicode.com/users");
        result = await result.json();
        setData(result);
    }

    async function deleteOperation(id)
    {
       let result = await fetch("https://jsonplaceholder.typicode.com/api/delete/"+id,{
            method:'DELETE'
        });
        result=await result.json();
        console.warn(result);
        getData();
    }

    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-2">
            <Table>
                <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Image</td>
                    <td>Operations</td>
                </tr>
                {
                    data.map((item,i)=>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{/*<img style={{width:100}}  src={"http://localhost:8000/"+item.file_path}/>*/}</td>
                            <td>
                            <span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>

                            <td>                          
                                <Link to={"update/"+item.id}><span className="update">Update</span></Link>
                            </td>

                        </tr>
                    )
                }
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default ProductList;