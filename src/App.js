import {useState,useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [myData,setMyData]=useState([]);
  const [isError,setIsError]=useState("");


  // using PROMISE
  // useEffect(()=>{
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res)=> setMyData(res.data))
  //   .catch((err) => setIsError(err.message));
  // },[]);


  // using ASYNC AWAIT
  const getApiData = async()=>{
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    }
    catch(err){
      setIsError(err.message);
    }
  }
  useEffect(()=>{
    getApiData();
},[]);

  return (
  <>
  <h1>Axios Practise</h1>
  {isError!== "" && <h2>{isError}</h2> }
  <div className="grid">
    {myData.slice(0,12).map((post)=>{
      const{id, title, body}=post;
      return (
      <div className="card" key={id}>
        <h2>{title.slice(0,15).toUpperCase()}</h2>
        <p>{body.slice(0,100)}</p>
      </div>
    );
    })}
</div>
  </>
  );
}

export default App;
