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


let sana = finnishWords[generateRandomInteger(209)].toUpperCase();
let wordArray = [...sana]

console.log(sana)
console.log(wordArray)


function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}


//sanan pituuden laskeminen silmukkaa varten
let pituus = sana.length;
let attempts = 0;
let correctAttemps =0;

for (i=0;i<sana.length;i++){
    const underscore = document.createElement("span");
    underscore.innerText = '_'
    document.getElementById('answer').appendChild(underscore)
}

function valinta(i){
    tarkista(i);
}


function tarkista(kirjain){
    
    if (sana.includes(kirjain)){
        
        document.getElementById(kirjain).classList.add('right');
        for (i=0; i<pituus;i++){
            
            if(sana[i] === kirjain){
                correctAttemps++
                document.querySelectorAll('#answer span')[i].textContent = kirjain;
            }
        }

    }else{        
        document.getElementById(kirjain).classList.add('wrong');
        attempts++
    }
    document.getElementById('draw').classList.add('draw'+attempts)
    if (correctAttemps===pituus){
        win()
    }
    if(attempts===6){
        loose()
    }
}
function loose(){
    document.getElementById('endMessage').classList.remove('hidden')
    document.getElementById('looseMessage').classList.remove('hidden')
    document.getElementById('correctWord').innerHTML=sana
}

function win(){
    document.getElementById('winMessage').classList.remove('hidden')
    document.getElementById('endMessage').classList.remove('hidden')
}

function refresh(){
    location.reload();
}