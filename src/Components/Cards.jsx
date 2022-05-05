import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';

export default function Cards() {
    return (
        <><CardP
            img="https://www.inspection.gc.ca/DAM/DAM-animals-animaux/STAGING/images-images/dog_import_banner_twitter_1614708260378_eng.jpg"
            img1="https://i.pinimg.com/564x/e2/84/66/e2846690095ebff59ac1599bf5192288--raw-food-food-networktrisha.jpg"
            img2="https://i.pinimg.com/200x/a0/6d/5d/a06d5dca58ba22f6b4843c1e9e129476.jpg"
            img3="https://i.pinimg.com/originals/1a/59/56/1a5956f69e436bbf42c167121faece8e.jpg"
            title="Dogs"
            title1="Cats"
            title2="Parrots"
            title3="Hamster"
            description="Best Friend"
            description1="King"
            description2="Flyyyyy"
            description3="Cute"
            button="View more"
        /></>
    )
}
class CardP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img2:"https://i.pinimg.com/200x/a0/6d/5d/a06d5dca58ba22f6b4843c1e9e129476.jpg",
            img3:"https://i.pinimg.com/originals/1a/59/56/1a5956f69e436bbf42c167121faece8e.jpg",
            title2:"Parrots",
            title3:"Hamster",
            description2:"Flyyyyy",
            description3:"Cute",
            button:"View more"
        };
    }


    render() {
        return (
            <Container className='row'>
                <Card className='m-4' bg="secondary" style={{ width: '14rem' }}>
                    <Card.Img className="m-1" variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Button variant="success">{this.props.button}</Button>
                    </Card.Body>
                </Card>

                <Card className='m-4' bg="secondary" style={{ width: '14rem' }}>
                    <Card.Img className="m-1" variant="top" src={this.props.img1} />
                    <Card.Body>
                        <Card.Title>{this.props.title1}</Card.Title>
                        <Card.Text>{this.props.description1}</Card.Text>
                        <Button variant="success">{this.props.button}</Button>
                    </Card.Body>
                </Card>

                <Card className='m-4' bg="secondary" style={{ width: '14rem' }}>
                    <Card.Img className="m-1" variant="top" src={this.state.img2} />
                    <Card.Body>
                        <Card.Title>{this.state.title2}</Card.Title>
                        <Card.Text>{this.state.description2}</Card.Text>
                        <Button variant="success">{this.state.button}</Button>
                    </Card.Body>
                </Card>

                <Card className='m-4' bg="secondary" style={{ width: '14rem' }}>
                    <Card.Img className="m-1" variant="top" src={this.state.img3} />
                    <Card.Body>
                        <Card.Title>{this.state.title3}</Card.Title>
                        <Card.Text>{this.state.description3}</Card.Text>
                        <Button variant="success" onClick={alert = "Error"}>{this.state.button}</Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}