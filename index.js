let soruhavuzu = {
    "Türkiye'nin başkenti neresidir?": "Ankara",
    "Periyodik tabloda 'Au' sembolü hangi elementi temsil eder?": "Altın",
    "Türkiye'nin en yüksek dağı hangisidir?": "Ağrı Dağı",
    "Suyun kimyasal formülü nedir?": "H2O",
    "Güneş sistemindeki en büyük gezegen hangisidir?": "Jüpiter",
    "Türkiye'nin en büyük gölü hangisidir?": "Van Gölü",
    "Türkiye'nin yüzölçümü en büyük ili hangisidir?": "Konya",
    "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?": "Mars",
    "Dünyanın en soğuk kıtası hangisidir?": "Antarktika",
    "İnsan vücudundaki en büyük organ hangisidir?": "Deri" 
};

let sorular = Object.keys(soruhavuzu);
let rastgele = Math.floor(Math.random() * sorular.length);
let seciliSoru = sorular[rastgele];
let cevap = soruhavuzu[seciliSoru];

document.getElementById("soruAlani").innerText = seciliSoru;

document.getElementById("gonderBtn").addEventListener("click", function() {
    let kullaniciCevabi = document.getElementById("cevapInput").value;
    
    if (kullaniciCevabi.toLowerCase() === cevap.toLowerCase()) {
        alert("Tebrikler! Doğru cevap.");
    } else {
        alert("Maalesef yanlış cevap. Doğru cevap: " + cevap);
    }
});