import React from "react";
import {input} from "react-bootstrap"

export default function Animal() {
    const animals =
        [
            { id: 1, name: "Cat", description: "King" },
            { id: 2, name: "Dog", description: "Best Friend" },
            { id: 3, name: "Parrot", description: "Fly" },
            { id: 4, name: "Hamster", description: "Cute" },
            { id: 5, name: "MAP", description: "Этот список был сделан с помощью MAP" },
        ];
    let list = animals.map((animal) => (
        <li key={animal.id}>
            {animal.name} {animal.description}
        </li>
    ));
    return <ul>{list}</ul>
}