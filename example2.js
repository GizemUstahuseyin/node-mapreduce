const ogrenciler = [
    {
        isim: "atike dilan", soyisim:"durmuş", not: 100
    },
    {
        isim: "metin", soyisim:"durmuş", not: 92
    },
    {
        isim: "gizem",soyisim:"ustahüseyin", not: 100
    },
    {
        isim: "mehmet",soyisim:"güven", not: 92
    },
    {
        isim: "mert",soyisim:"ecevit", not: 84
    },
    {
        isim: "sermin",soyisim:"atmaca", not: 55
    },
    {
        isim: "sezgi",soyisim:"ersoy", not: 48
    },
    {
        isim: "sedef",soyisim:"ustahüseyin", not: 73
    }
]

function ogrenciBilgileriniGoster(isim) {
    const ogrenci = ogrenciler.find(function(ogrenci) {
        return ogrenci.isim === isim;
    });

    if (ogrenci) {
        console.log("İsim: " + ogrenci.isim + " - Not: " + ogrenci.not);
    } else {
        console.log(isim + " adında bir öğrenci bulunamadı.");
    }
}

console.log("Öğrenciler: ");
ogrenciler.forEach(function(ogrenci) {
    console.log("İsim: " + ogrenci.isim + "" +"Soyisim: " + ogrenci.soyisim + "");
});

const yuksekNotlar = ogrenciler.filter(function(ogrenci) {
    return ogrenci.not > 80;
});

console.log("80'den büyük notu olan öğrenciler:");
yuksekNotlar.forEach(function(ogrenci) {
    console.log("İsim: " + ogrenci.isim + " - Not: " + ogrenci.not);
});

const ortalamaNot = yuksekNotlar.reduce(function(toplam, ogrenci) {
    return toplam + ogrenci.not;
}, 0) / yuksekNotlar.length;

console.log("Not ortalaması: ", ortalamaNot);

// "atike" adlı öğrencinin bilgilerini göster
ogrenciBilgileriniGoster("merve");