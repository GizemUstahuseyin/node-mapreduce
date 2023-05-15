const ogrenciler = [
    {
        isim: "atike", not: 100
    },
    {
        isim: "metin", not: 92
    },
    {
        isim: "gizem", not: 100
    },
    {
        isim: "mehmet", not: 92
    },
    {
        isim: "mert", not: 84
    },
    {
        isim: "sermin", not: 55
    },
    {
        isim: "sezgi", not: 48
    },
    {
        isim: "sedef", not: 73
    }
]

const yuksekNotlar = ogrenciler.filter(function(ogrenci) {
    return ogrenci.not > 70;
});

const ortalamaNot = yuksekNotlar.reduce(function(toplam, ogrenci) {
    return toplam + ogrenci.not;
}, 0) / yuksekNotlar.length;

const isimler = ogrenciler.map(function(ogrenci) {
    return {
        isim: ogrenci.isim.charAt(0).toUpperCase() + ogrenci.isim.slice(1),
        not: ogrenci.not
    };
});

console.log("70'ten büyük notu olan öğrenciler: ", yuksekNotlar);
console.log("Not ortalaması: ", ortalamaNot);
console.log("Baş harfleri büyük harf yapılmış öğrenci isimleri: ", isimler);
