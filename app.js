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


const frenchWords = ["chat", "chien", "fleur", "maison", "arbre", "soleil", "table", "livre", "école", "fille", "garçon", "voiture", "oiseau", "fenêtre",
    "porte", "fruits", "musique", "argent", "famille", "manger", "cuisine", "vêtements", "écrire", "paysage", "jardin", "plage", "montagne", "forêt", "vacances",
    "histoire", "fenêtre", "lumière", "cheval", "bateau", "avion", "train", "voyage", "soleil", "lune", "étoile", "nuit", "amour", "cœur", "joie", "triste",
    "rire", "sourire", "ami", "fête", "danse", "ville", "pays", "rue", "parc", "fête", "heure", "robe", "chemin", "maître", "espoir", "chance", "pierre",
    "église", "lettre", "santé", "couleur", "calme", "douceur", "silence", "naissance", "victoire", "bonheur", "courage", "amitié", "enfance", "vérité",
    "liberté", "courage", "paradis", "poésie", "évasion", "vitesse", "succès", "travail", "conseil", "savoir", "sagesse", "foule", "village", "génie",
    "nature", "saison", "ciel", "pluie", "vent", "neige", "éclair", "énergie", "espace", "science", "théâtre", "chanson", "histoire", "évolution", "concept",
    "communication", "langage", "artiste", "sérieux", "méditer", "penser", "voyager", "rêver", "explorer", "découvrir", "instruire", "éduquer", "animaux",
    "plante", "insecte", "océan", "rivière", "montagne", "désert", "continent", "terre", "esprit", "corps", "santé", "maladie", "cœur", "âme", "spirituel",
    "religion", "philosophie", "culture", "coutume", "tradition", "légende", "mythe", "héros", "aventure", "magie", "mystère", "fantôme", "monstre",
    "créature", "étoile", "planète", "galaxie", "univers", "temps", "espace", "matière", "énergie", "électricité", "magnétique", "atomique", "nucléaire",
    "molécule", "chimie", "physique", "biologie", "génétique", "évolution", "théorie", "expérience", "laboratoire", "invention", "technologie",
    "communication", "internet", "ordinateur", "télévision", "radio", "téléphone", "appareil", "instrument", "machine", "voiture", "moto", "vélo",
    "bateau", "avion", "train", "bus", "métro", "taxi", "billet", "argent", "banque", "économie", "commerce", "entreprise", "industrie",
    "produit", "marché", "consommateur", "client", "publicité", "marketing", "stratégie", "manageme"
];

let sana ='';
let pituus = 0;
function french(){
    sana='';
    document.getElementById('startMessage').classList.add('hidden');
    document.getElementById('flags').classList.add('fr')
    sana = frenchWords[generateRandomInteger(209)].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    pituus=sana.length
    generateEmptyAnswer()
}

function finn(){
    sana='';
    document.getElementById('startMessage').classList.add('hidden')
    document.getElementById('flags').classList.add('finn')
    sana = finnishWords[generateRandomInteger(209)].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    pituus=sana.length
    generateEmptyAnswer()
}


let wordArray = [...sana]


function generateEmptyAnswer(){
    for (i = 0; i < sana.length; i++) {
        const underscore = document.createElement("span");
        underscore.innerText = '_'
        document.getElementById('answer').appendChild(underscore)
    }

}


let attempts = 0;
let correctAttemps = 0;

/*
function valinta(i) {
    tarkista(i);
}*/
function valinta(kirjain) {
    console.log(pituus)
    if (sana.includes(kirjain)) {

        document.getElementById(kirjain).classList.add('right');
        for (i = 0; i < pituus; i++) {

            if (sana[i] === kirjain) {
                correctAttemps++
                document.querySelectorAll('#answer span')[i].textContent = kirjain;
            }
        }

    } else {
        document.getElementById(kirjain).classList.add('wrong');
        attempts++
    }
    document.getElementById('draw').classList.add('draw' + attempts)
    if (correctAttemps === pituus) {
        win()
    }
    if (attempts === 6) {
        loose()
    }
}



function loose() {
    document.getElementById('endMessage').classList.remove('hidden')
    document.getElementById('looseMessage').classList.remove('hidden')
    document.getElementById('correctWord').innerHTML = sana
}

function win() {
    document.getElementById('winMessage').classList.remove('hidden')
    document.getElementById('endMessage').classList.remove('hidden')
}

function refresh() {
    location.reload();
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
