let words:string[] = [
 'COMPUTADORA',
 'BICICLETA',
 'COLORES',
 'PELUQUERIA',
 'DIBUJOS',
 'MUSICA',
 'MUEBLES',
 'MANGO',
 'ESTACIONAMIENTO',
 'VASO',
 'CIRCO',
 'PALTA',
 'PAPAYA',
 'VEHICULO',
 'ANIMAL',
 'VETERINARIO',
 'TECNOLOGIA',
 'ZOOLOGICO',
 'CELULAR',
 'CASA',
 'ESPADA',
 'CHIMENEA'
    
];


export function getRandomWord() {

    // función aleatorio
const randomIndex= Math.floor (Math.random () * words.length) ;
    return words [randomIndex];

}