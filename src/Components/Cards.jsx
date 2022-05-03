import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';

export default function Cards() {
    return (
        <><CardP
            img="https://i.pinimg.com/originals/1a/59/56/1a5956f69e436bbf42c167121faece8e.jpg"
            title="Hamster"
            description="Cute"
            button="View more"
        /></>
    )
}
class CardP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }


    render() {
        return (
            <Container>
                <Card className="m-2" bg="success" style={{ width: '19rem', left: '282px' }}>
                    <Card.Img className="m-0" variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <p>You clicked {this.state.count} times</p>
                        <Button variant="primary" onClick={() => this.setState({ count: this.state.count + 1 })}>{this.props.button}</Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}