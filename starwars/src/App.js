import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import StarCard from './components/StarCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // useEffect(() => {
  //   let linksArr = ['https://swapi.co/api/people/1/', 'https://swapi.co/api/people/2/', 'https://swapi.co/api/people/3/', 'https://swapi.co/api/people/4/', 'https://swapi.co/api/people/5/', 'https://swapi.co/api/people/6/', 'https://swapi.co/api/people/7/', 'https://swapi.co/api/people/8/', 'https://swapi.co/api/people/9/', 'https://swapi.co/api/people/10/'];

  //   let promiseArr = linksArr.map(l => fetch(l).then(res => res.json())); 
  //     axios.all(promiseArr).then(response => {
  //       response.map((item) => {
  //         setCharcter(item)
          
  //       })
  //       console.log(response);
  //     })
    
    
  // }, [])
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        setData(response.data.results)
      })
      .catch(error => {
        console.log('The data was not returned', error)
      })
    
    
  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map((item, i) => {
        return (
          <StarCard name = {item.name}  height = {item.height} eye = {item.eye_color} hair = {item.hair_color} key = {i}/>
        )
      })}
      
    </div>
  );


}
export default App;
