import React from 'react';
import {
    Card, CardTitle, CardText, Col
} from 'reactstrap'

const StarCard = props => {
    // const [data, setData] = useState(props);
    console.log(props)
 return (
     <div>
         <Col sm="12" md={{ size: 6, offset: 3 }}
>
            <Card style = {{margin:"10px", opacity:"0.9", backgroundColor:"Tan", color:"white"
}}>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.height}</CardText>
                <CardText>{props.eye}</CardText>
                <CardText>{props.hair}</CardText>
            </Card>
        </Col>
     </div>
 )
};

export default StarCard;

