
import './App.css';
import React, { useEffect } from 'react';
import useStore from './store';


function App() {
  
  
  const { data, fetchData } = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
       
      <h1 className="Title">Prueba Tecnica React</h1>
      <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        
       
        {data.map(item => (
          <tr key={item.id}> 
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            
          </tr>
        ))}
        
      </table>
      
    </div>
  );
}

export default App;
