import React from "react";
import { Carousel } from "react-bootstrap";

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
                        <h3>Первая картинка</h3>
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
        </>
    );
}