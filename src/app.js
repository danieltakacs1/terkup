/*
* File: app.js
* Author: Takács Dániel
* Copyright: 2023, Takács Dániel
* Group: Szoft I-2 N
* Date: 2023-02-24
* Github: https://github.com/danieltakacs1/
* Licenc: GNU GPL
*/

const radiusInput = document.querySelector('#radius');
const heightInput = document.querySelector('#height');
const areaInput = document.querySelector('#area');
const calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {
    console.log('Terület:')
    const radius = Number(radiusInput.value);
    const height = Number(heightInput.value);
    let area = (1.0/3) * Math.pow(radius, 2) * Math.PI * height;
    areaInput.value = area;
    console.log(area)
});