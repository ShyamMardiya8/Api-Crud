import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Get() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = () => {
        axios.get('https://66fcc334c3a184a84d17e4c4.mockapi.io/c1/users')
        .then((res) => setData(res.data))
    }
    const handleDelete = (id) => { 
        console.log("deleteID", id);
        axios.delete(`https://66fcc334c3a184a84d17e4c4.mockapi.io/c1/users/${id}`)
        .then((res) => {
            console.log("Deleted successfully", res);
            fetchData()
            
        })
        .catch((err) => console.log(err));
    }
    
  return (
    <>
    <table className='table table-striped table-hover'>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>Created At</th>
                <th>Validation</th>
            </tr>
        </thead>
  
    {
        data.map((item, index) => (
         <tbody key={index}>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.avatar}</td>
                <td>{item.createdAt}</td>
                <td><Link className='btn btn-outline-success' to={`/Update/${item.id}`}>Update Data</Link></td>
                <td><button className='btn btn-outline-success' onClick={() => handleDelete(item.id)}>Delete Data</button></td>
            </tr>
         </tbody>
        ))
    }
      </table>
    </>
  )
}

export default Get