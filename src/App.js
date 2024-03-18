import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([]) 
  const [searchInput, setSearchInput] =useState('')
  const [dataToRender, setDataToRender]= useState([])

  const fetchData= ()=>{
  
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res =>res.json())
     .then(res =>setData(res))
    
  }
  const resetList=()=> {

     setDataToRender([])
     setSearchInput('')
  }

  const filterInputData =(e) =>{
    setSearchInput(e.target.value)
    
  const filtered = data.filter(user => user.username.includes(searchInput));
    
  if (filtered.length > 0){
    setDataToRender(filtered)
  }
}

  useEffect(() =>{
    fetchData()
  },[])
  return (
    <div className="App">
<label>Search
        <input type="text" onChange={filterInputData} value={searchInput}/> 
      </label>
    

      <table>
        <thead> 
        <tr>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
        </tr>
        </thead>
        <tbody> 
          {dataToRender.length > 0  ? dataToRender.map((x) =>{
            return(
              <tr >
                <td key={x.name}>{x.name}</td>
                <td key={x.username}>{x.username}</td>
                <td key={x.email}>{x.email}</td>
              </tr>
            )
          }) :
          data.map((item) =>{
            return(
              <tr >
                <td key={item.name}>{item.name}</td>
                <td key={item.username}>{item.username}</td>
                <td key={item.email}>{item.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <button onClick={resetList}>Reset List</button>
    </div>
  );
}

export default App;
