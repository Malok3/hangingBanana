const finnishWords = [
    "aamu", "aika", "aina", "ainoa", "ajatella", "alkaa", "aloittaa", "antaa", "arvostaa", "asia", "aurinko", "auto", "avata", "ei", "elää",
    "enemmän", "ensimmäinen", "esimerkki", "esittää", "eteen", "halu", "hän", "he", "hetki", "hyvä", "ihminen", "ilo", "iso", "itse", "ja", "jalka",
    "joka", "joka päivä", "jotain", "jälkeen", "kaikki", "kaksi", "kaunis", "kevät", "kiitos", "kirja", "koira", "kolme", "koulu", "kuinka", "kuka",
    "kukka", "käsi", "käydä", "lähteä", "laulu", "leipä", "lue", "lämpö", "maailma", "mennä", "mies", "miksi", "minä", "monta", "muu", "mutta",
    "nainen", "nukkua", "nähdä", "näin", "olla", "onnellinen", "opettaa", "perhe", "pieni", "pitää", "rakkaus", "sade", "sairaala", "sanoa", "sata",
    "suuri", "sydän", "syödä", "talo", "tanssi", "tehdä", "tie", "tietää", "tulla", "tähti", "tänään", "uskoa", "vesi", "vuosi", "yksi", "ystävä",
    "yö", "aalto", "aina", "ajatus", "avoin", "elämä", "enkeli", "esiin", "etu", "hetki", "hiljainen", "ilta", "istua", "itse", "jatkaa", "järvi",
    "kaipuu", "kaukana", "kevät", "kiire", "kohta", "kulkea", "kuolema", "kuulla", "laiva", "lapsi", "leikki", "lintu", "lumi", "luonto", "lämpö", "maa",
    "meri", "metsä", "muisto", "nähdä", "olla", "onni", "pelko", "puu", "rakas", "sade", "suru", "sydän", "syksy", "tähti", "unelma", "uskaltaa",
    "vaara", "valo", "yö", "ystävä", "ääni", "energia", "hymy", "ilta", "jää", "kauas", "kiitollinen", "kirkko", "kuva", "lasi", "lempi", "lumihiutale",
    "lumisade", "lähellä", "mieli", "muisto", "näyttämö", "ovi", "peili", "rakkaus", "sadepisara", "suru", "sydänsuru", "tähti", "usva", "vaeltaa",
    "yötaivas", "äärettömyys", "autuas", "enkeli", "harmonia", "huomenna", "iloita", "jännitys", "kaipaus", "kesäyö", "kukoistus", "kuunvalo", "lempeys",
    "lohduttaa", "lumihanki", "luottamus", "nuoruus", "onnellisuus", "pilvet", "rauha", "sateenkaari", "suudelma", "sydän", "taika", "täydellisyys",
    "unelma", "ystävä", "yötaivas", "ääni", "aurinkoinen", "enkeleitä", "hymyillä", "iloinen", "järjestys", "kauneus", "kevättuuli", "kirkkaus",
    "kuiskaus", "kukkiva", "lempeä", "loistaa", "lumous", "lähellä", "merenranta", "neiti", "onni", "päivänsäde", "rakkaus", "sateenpisara", "sininen",
    "sydänyö", "taivas", "tähti", "uni", "valo"
  ];


let sana = finnishWords[generateRandomInteger(209)]
let wordArray = [...sana]

console.log(sana)
console.log(wordArray)

//sanan pituuden laskeminen silmukkaa varten
let pituus = sana.length;


//let underscoreChar = '_'

for (i=0;i<sana.length;i++){
    const underscore = document.createElement("span");
    underscore.innerText = '_'
    document.getElementById('answer').appendChild(underscore)
}



//tarkistusta varten. Oikeaan tulee aikaa myöten koko sana, kun kaikki arvattu
let oikea = new Array("?","?","?","?","?");

//piilotetaan valittu kirjain ja kutsutaan tarkistamisfuntiota
function valinta(i){
    document.getElementById(i).style.display = "none";
    tarkista(i);
}


//jos löytyy valittu kirjain alkuperäisestä sanasta, sijoitetaan se oikea-muuttujataulukkoon
function tarkista(kirjain){
    
    for (i=0; i<pituus;i++){
        if(sana[i] == kirjain){
            console.log('ss')
            document.querySelector('#answer :nth-child(3)').innerHTML=kirjain
        }
    }
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

