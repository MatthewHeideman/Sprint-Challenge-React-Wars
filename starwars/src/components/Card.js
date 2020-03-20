import React,{useState} from 'react';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription'

const Card = props => {
    // const [data, setData] = useState(props);
    console.log(props)
 return (
     <div className = 'cardContainer'>
         <CardTitle data = {props.data} />
         <CardDescription data = {props.data} />
     </div>
 )
};

export default Card;

