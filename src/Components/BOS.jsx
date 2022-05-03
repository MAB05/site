import React from "react";
import { Carousel, Card, Container, Button } from "react-bootstrap";

export default function BOS() {
    return (
        <>
            <Carousel>
                <Carousel.Item className="">
                    <img
                        className="d-block w-100"
                        src="https://www.teahub.io/photos/full/40-405997_1920x1080-cute-animal-wallpaper-hd-desktop-animals-hd.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Первая картина</h3>
                        <p>Милые щеночки</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/5a/cc/3b/5acc3b25a35b142aa533121a8f43850f.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Котик</h3>
                        <p>Какой взгляд)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/f1/c3/55/f1c355a67b8794588692b91726f1703f.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Попуг</h3>
                        <p>Хотел бы также летать</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

    
            <Container className="row" >
                <Card className="m-4" bg="secondary" style={{ width: '19rem' }}>
                    <Card.Img className="m-1" variant="top" src="https://www.inspection.gc.ca/DAM/DAM-animals-animaux/STAGING/images-images/dog_import_banner_twitter_1614708260378_eng.jpg" />
                    <Card.Body>
                        <Card.Title>Dogs</Card.Title>
                        <Card.Text>
                            Best Friend
                        </Card.Text>
                        <Button variant="success">View more</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" bg="secondary" style={{ width: '19rem' }}>
                    <Card.Img className="m-1" variant="top" src="https://i.pinimg.com/564x/e2/84/66/e2846690095ebff59ac1599bf5192288--raw-food-food-networktrisha.jpg" />
                    <Card.Body>
                        <Card.Title>Cats</Card.Title>
                        <Card.Text>
                            World King
                        </Card.Text>
                        <Button variant="success">View more</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" bg="secondary" style={{ width: '19rem' }}>
                    <Card.Img className="m-1" variant="top" src="https://i.pinimg.com/200x/a0/6d/5d/a06d5dca58ba22f6b4843c1e9e129476.jpg" />
                    <Card.Body>
                        <Card.Title>Parrots</Card.Title>
                        <Card.Text>
                            Flyyyy
                        </Card.Text>
                        <Button variant="success">View more</Button>
                    </Card.Body>
                </Card>
            </Container>
         
        </>
    );
}