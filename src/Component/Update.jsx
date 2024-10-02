import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://66fcc334c3a184a84d17e4c4.mockapi.io/c1/users/${id}`)
      .then((res) => {
        setData(res.data);  
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateData = () => {
    if (id !== null && data) {
      axios
        .put(`https://66fcc334c3a184a84d17e4c4.mockapi.io/c1/users/${id}`, data)  
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("No ID selected for update or data is empty");
    }
  };

  return (
    <>
      {data ? (
        <div>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <button onClick={updateData}>Update Data</button>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
}

export default Update;
