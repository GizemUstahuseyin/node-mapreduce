const sayilar = [1, 2, 3, 4, 5];

// const ikikati = sayilar.map(sayi => sayi * 2);

const ikikati = sayilar.map(function sayi(sayi){
    return sayi * 2;
})

console.log(ikikati);

// const ikikati = [];

// for(var i = 0; i < sayilar.length; i++){
//     ikikati[i] = sayilar[i] * 2;
// }

// console.log(ikikati);