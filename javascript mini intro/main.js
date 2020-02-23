//galioja tik tam paciame lygije ir zemesniame, o kitose funkcijose ir kitose failuose situ nepasieks

//skaiciai - number
const pi = 3.141592654;

//isvedimas i console
console.log( pi );

const nulis = 0;

//tekstai - string
const vardas = 'Mindaugas';
const suniukas = "Aviganis";

//kintamasis - variable
let suo = "Aviganis"
suo = 'Coli';

//logines reiksmes - boolean
const tiesa = true;
const melas = false;

//sarasas - array
const skaiciai = [1, 2, 3, 4];
const abc = ['a', 'b', 'c', 'd', 'e'];

//kintamasis artimas let, yra bijomas nes bus pasiekiamas visu, galioja visur
var kintamasis = 'as kintu';


const mixList = [1, 'antras', 3, 'forth', [6, 'seven']];
console.log( mixList );

//objektai - object
const zmogus = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    age: 99
}
console.log( zmogus );









console.log('----------------------------');
console.log('----------------------------');
console.log('----------------------------');
console.log('VEIKSMAI SU KINTAMAISIAIS');

const s1 = 5;
const s2 = 10;

const suma = s1 + s2;
console.log( suma );

const skirtumas = s1 - s2;
console.log( skirtumas );

const dalmuo = s1 / s2;
console.log( dalmuo );

const sandauga = s1 * s2;
console.log( sandauga );

const vidurkis = ( s1 + s2 ) / 2;
console.log( vidurkis );

const vidurkioSaknis = Math.sqrt( vidurkis );
console.log( vidurkioSaknis );

const t1 = 'Labas';
const t2 = 'rytas';
const pasisveikinimas = t1 + t2;
console.log( pasisveikinimas );

const gerasPasisveikinimas = t1 + ' ' + t2;
console.log( gerasPasisveikinimas );

const numbers = [10, 7, -3, 4, 55, [1, 87]];
console.log( numbers );
console.log( numbers[0] );
console.log( numbers[5] );
console.log( numbers[5][1] );

const alter = numbers[0] - numbers[1] + numbers[2];
console.log( alter );

const sar1 = ['a', 'b', 'c'];
const sar2 = ['d', 'e', 'f',];
const sujungtasTextas = sar1[0] + ',' + ' ' + sar1[1] + ',' + ' ' + sar1[2] + ',' + ' ' + sar2[0] + ',' + ' ' + sar2[1] + ',' + ' ' + sar2[2];
console.log( sujungtasTextas );









console.log('----------------------------');
console.log('----------------------------');
console.log('----------------------------');
console.log('KINTAMUJU PALYGINIMAS');

console.log('----------------------------');
console.log('----------1---------');

const sk1 = 10;
const sk2 = 5;
let didesnis = sk1 > sk2;
console.log( didesnis );
if (didesnis == true) {
    console.log( 'Pomidoras' );
} 
else {
    console.log( 'Bandykite kitą kartą' );
}

if (sk1 < sk2) {
    console.log( 'Pomidoras' );
} 
else {
    console.log( 'Bandykite kitą kartą' );
}

if (sk1 == sk2) {
    console.log( 'Pomidoras' );
} 
else {
    console.log( 'Bandykite kitą kartą' );
}

if (sk1 != sk2) {
    console.log( 'Pomidoras' );
} 
else {
    console.log( 'Bandykite kitą kartą' );
}


if (sk1 >= sk2) {
    console.log( 'Pomidoras' );
} 
else {
    console.log( 'Bandykite kitą kartą' );
}

if (sk1 <= sk2) {
    console.log( 'Pomidoras' );
} 
else {
    console.log( 'Bandykite kitą kartą' );
}












console.log('----------------------------');
console.log('----------2---------');

const pirmasIlgis = 'labas'.length;
console.log( pirmasIlgis );

const text = 'Laikas';
const antrasIlgis = text.length;
console.log( antrasIlgis );











console.log('----------------------------');
console.log('----------3---------');

if (pirmasIlgis > antrasIlgis) {
    console.log( 'Pirmas zodis didesnis' );
} 
else {
    console.log( 'Antras zodis didesnis' );
}

if (pirmasIlgis < antrasIlgis) {
    console.log( 'Pirmas zodis mazesnis' );
} 
else {
    console.log( 'Antras zodis mazesnis' );
}

// == nevartotina (taip rekomenduojama)

if (pirmasIlgis === antrasIlgis) {
    console.log( 'lygus' );
} 
else {
    console.log( 'nelygus' );
}

// nevartotinas !=
if (pirmasIlgis !== antrasIlgis) {
    console.log( 'nelygus' );
} 
else {
    console.log( 'lygus' );
}

if (pirmasIlgis >= antrasIlgis) {
    console.log( 'Pirmas zodis didesnis arba lygus' );
} 
else {
    console.log( 'Antras zodis didesnis arba lygus' );
}
if (pirmasIlgis <= antrasIlgis) {
    console.log( 'Pirmas zodis mazesnis arba lygus' );
} 
else {
    console.log( 'Antras zodis mazesnis arba lygus' );
}

const akys = 'rudos';

switch (akys) {
    case 'melynos':
        console.log( 'switch: melynos' );
        break;

        case 'rudos':
        console.log( 'switch: rudos' );
        break;

        default:
        console.log( 'switch: ar turi akis?' );
        break;

        break;
}














console.log('----------------------------');
console.log('----------4---------');

const no = [1, 2, 3, 4];
const skl = no.length;
console.log(skl);

const alpha = ['a', 'b', 'c', 'd', 'e'];
const all = alpha.length;
console.log(all);

















console.log('----------------------------');
console.log('----------5---------');

if (skl > all) {
    console.log( 'Pirmas didesnis' );
} 
else {
    console.log( 'Antras didesnis' );
}

if (skl < all) {
    console.log( 'Pirmas mazesnis' );
} 
else {
    console.log( 'Antras mazesnis' );
}

if (skl == all) {
    console.log( 'Lygus' );
} 
else {
    console.log( 'Nelygus' );
}

if (skl != all) {
    console.log( 'Nelygus' );
} 
else {
    console.log( 'Lygus' );
}

if (skl >= all) {
    console.log( 'Pirmas didesnis arba lygus' );
} 
else {
    console.log( 'Antras didesnis arba lygus' );
}
if (skl <= all) {
    console.log( 'Pirmas mazesnis arba lygus' );
} 
else {
    console.log( 'Antras mazesnis arba lygus' );
}











console.log('----------------------------');
console.log('----------------------------');
console.log('----------------------------');
console.log('CIKLO for PANAUDOJIMAS');

console.log('----------------------------');
console.log('----------1---------');

let sum = 0;
for (let i = 0; i <= 0; i++) {
    sum = sum + i;
}
console.log(sum);

let summ = 0;
for (let i = 0; i < 5; i++) {
    summ = summ + i;
}
console.log(summ);

let sum1 = 0;
for (let i = 0; i <= 100; i++) {
    sum1 = sum1 + i;
}
console.log(sum1);

let sumd =0;
for (let i = 574; i <= 815; i++) {
    sumd = sumd + i;
}
console.log(sumd);

let sumdd =574;
for (let i = 575; i < 816; i++) {
    sumdd = sumdd + i;
}
console.log(sumdd);

let sume =0;
for (let i = -50; i <= 50; i++) {
    sume = sume + i;
}
console.log(sume);

let sumf =0;
for (let i = -70; i <= -30; i++) {
    sumf = sumf + i;
}
console.log(sumf);














console.log('---------------------------------l----------');
console.log('----------2---------');

const marks = [10, 8, 2, 4, 7, 5, 9]


for (let i = 0; i < marks.length; i++) {
    console.log(i, marks[i]);
       
}

console.log('----------------------------');

const zodis = 'Labas rytas';

for (let i = 0; i < zodis.length; i++) {
    if (zodis[i] !== ' ') {
        console.log(zodis[i]);
    }
    
    
}












console.log('------------atbulas tekstas----------------');

const atbulas = 'Atbuliaiva';

for (let i = atbulas.length - 1; i >= 0; i-- ) {
    console.log( atbulas[i] );
       
}
console.log('------------atbulas tekstas----------------');

for (let i = 0; i < atbulas.length; i++) {
        console.log( atbulas[atbulas.length - i -1] );
      
    
}

console.log('----------------------------');
console.log('----------3---------');



let nuo = 0;
let iki = 11;
let daliklis = 3;
let kartai = 0;

for (let i = nuo; i <= iki; i++) {
    console.log(i, daliklis, i/daliklis);
    if (i % daliklis === 0) {
        kartai++
    }
       
}

console.log( 'Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.' );

nuo = 0;
iki = 11;
daliklis = 5;
kartai = 0;

for (let i = nuo; i <= iki; i++) {
    console.log(i, daliklis, i/daliklis);
    if (i % daliklis === 0) {
        kartai++
    }
       
}

console.log( 'Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.' );

nuo = 0;
iki = 11;
daliklis = 7;
kartai = 0;

for (let i = nuo; i <= iki; i++) {
    console.log(i, daliklis, i/daliklis);
    if (i % daliklis === 0) {
        kartai++
    }
       
}

console.log( 'Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.' );













console.log('----------------------------');
console.log('----------------------------');
console.log('----------------------------');
console.log('Funkcijos');

console.log('----------------------------');
console.log('----------1---------');

function tusciaFunkcija () {
    

   return false;
}
console.log( tusciaFunkcija() );
















console.log('----------------------------');
console.log('----------DAUGYBA---------');

function daugyba(ska1, ska2) {
    console.log(ska1);
    console.log(ska2);
    if (typeof ska1 !== 'number' &&  typeof ska2 !== 'number') {
        return 'Abi duotos reiksmes netinkamo tipo, iveskite skaicius';
    }
    if (typeof ska1 !== 'number' ) {
        return 'Pirma reiksme netinkamo tipo, iveskite skaiciu';
    }
    if (typeof ska2 !== 'number') {
        return 'Antra reiksme netinkamo tipo, iveskite skaiciu';
    }  
    if ('' + ska1 === 'NaN') {
        return 'Pirma reiksme yra netikras skaicius';
    }      
    if ('' + ska2 === 'NaN') {
        return 'Antra reiksme yra netikras skaicius';
    }  
    if (ska1 === Infinity) {
        return 'Pirma reiksme negali buti begalybe';
    }      
    if (ska2 === Infinity) {
        return 'Antra reiksme negali buti begalabybe';
    } 
    
    //isFinite klausiame ar tai baigtinis skaicius

    // if (isFinite(ska1) === false || isFinite(ska2) === false){
    //     return 'Viena is reiskmiu ne tikras skaicius';
    // }

    let sandauga = ska1 * ska2;

    return 'Atsakymas:' + ' ' + sandauga;
}
console.log( daugyba(3, Infinity) );

//  or zymejimas ||


//tirkinti NaN, infinity, array, string, boolen















console.log('----------------------------');
console.log('----------3---------');
console.log('------------SKAITMENU KIEKIS----------------');

function skaitmenuKiekisSkaiciuje(skaic) {
    if (isNaN(skaic)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    else if (typeof skaic === 'number') {
        let ilgis = Math.ceil(Math.log(skaic + 1) / Math.LN10);
        return 'rezultatas:' + ' ' + ilgis;
    }
   return 'Pateikta netinkamo tipo reikšmė.';
      
}
//Klaidingi
console.log( skaitmenuKiekisSkaiciuje( true) );
console.log( skaitmenuKiekisSkaiciuje( 'asdf') );
console.log( skaitmenuKiekisSkaiciuje( NaN) );

//Tinkami
console.log( skaitmenuKiekisSkaiciuje( 5) );
console.log( skaitmenuKiekisSkaiciuje( 781) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456) );
console.log( skaitmenuKiekisSkaiciuje( 3.1415) );
console.log( skaitmenuKiekisSkaiciuje( -3.1415) );
console.log( skaitmenuKiekisSkaiciuje( 315, 4587) );

console.log( skaitmenuKiekisSkaiciuje( 0.000000001) );
console.log( skaitmenuKiekisSkaiciuje( 100000000000000000000001) );
console.log( skaitmenuKiekisSkaiciuje( 1e6) );




function skaitmenuKiekisSkaiciuje1(skaic1) {
    console.log(skaic1);
    if (isNaN(skaic1)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    else if (typeof skaic1 === 'number') {
        let ilgis = Math.ceil(Math.log(skaic1 + 1) / Math.LN10);
        return 'rezultatas:' + ' ' + ilgis;
    }
   return 'Pateikta netinkamo tipo reikšmė.';
      
}

// //paskaitos metu
// const skaiciusTekstu = '' +skaiciusTekstu;
// let ilgis = skaiciustekstu.lenght;


// //jei skaicisu su kableliu
// if (skaiciustekstu.indexOf('.') >= 0) {
//     ilgis--;
// }

// //jei skaicius su minusu

// if (skaicius > 0) {
//     ilgis--;
    
// }


//su leikana kitas variantas
// if (skaicius % 1 !== 0) {
//     ilgis--;
// }


//Klaidingi
console.log( skaitmenuKiekisSkaiciuje1( true) );
console.log( skaitmenuKiekisSkaiciuje1( 'asdf') );
console.log( skaitmenuKiekisSkaiciuje1( NaN) );

//Tinkami
console.log( skaitmenuKiekisSkaiciuje1( 5) );
console.log( skaitmenuKiekisSkaiciuje1( 781) );
console.log( skaitmenuKiekisSkaiciuje1( 37060123456) );
console.log( skaitmenuKiekisSkaiciuje1( 3.1415) );
console.log( skaitmenuKiekisSkaiciuje1( -3.1415) );
console.log( skaitmenuKiekisSkaiciuje1( 315, 4587) );

console.log( skaitmenuKiekisSkaiciuje1( 0.000000001) );
console.log( skaitmenuKiekisSkaiciuje1( 100000000000000000000001) );
console.log( skaitmenuKiekisSkaiciuje1( 1e6) );






















console.log('----------------------------');
console.log('----------4---------');
console.log('------------DIDZIAUSIAS SKAICIUS----------------');

function didziausiasSkaiciusSarase (kint) {
    // console.log(kint);
    
    if (Array.isArray(kint) ) {
        if (kint.length > 0) {
            let did = Math.max(...kint);
            if (isNaN(did)) {
                return 'Pateikta netinkamo tipo reikšmė.';
            }
            else {
                return 'Didziausias skaicius yra:' + ' ' + did;
            }
            }      
        else {
            console.log( 'Pateiktas sąrašas negali būti tuščias.' );
        }
    }
    else {
        console.log( 'Pateikta netinkamo tipo reikšmė.' );
    } 
}
//Blogi
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( { } ) );
console.log( didziausiasSkaiciusSarase( [ ] ) );
console.log( didziausiasSkaiciusSarase( [ 'a', 'b', 'c'] ) );
//Geri
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );

console.log( didziausiasSkaiciusSarase( [ 1, 'a', 3] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 'a'] ) );

console.log( didziausiasSkaiciusSarase( [ 'a', 2, 3] ) );

console.log( didziausiasSkaiciusSarase( [ 'a', true, false, NaN, -Infinity, Infinity, 2, 5 ] ) );

console.log('-------------Paskaitoje---------------');

//Paskaitoje
function didziausiasSkaiciusSarase1 (kint1) {
   if (Array.isArray(kint1) === false) {
       return 'Pateikta netinkamo tipo reikšmė.';
   }
   if (kint1.length === 0) {
    return 'Pateiktas sarasas negli buti tuscias';
   }
   let didziausias = -Infinity;
    for (let i = 0; i < kint1.length; i++) {
        const skaicius = kint1[i];
    if (typeof(skaicius) !== 'number' || isFinite(skaicius) === false ) {
        //einame i sekanti cikla, nes cia nera ka veikti
        continue;
    }
      if (skaicius > didziausias) {
          didziausias = skaicius;
      }
    }
   if (didziausias === -Infinity) {
       return 'Sarase nebuvo skaiciu';
   }
    return didziausias;
}

//Blogi
console.log( didziausiasSkaiciusSarase1( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase1( { } ) );
console.log( didziausiasSkaiciusSarase1( [ ] ) );
console.log( didziausiasSkaiciusSarase1( [ 'a', 'b', 'c'] ) );
//Geri
console.log( didziausiasSkaiciusSarase1( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase1( [ 1, 2, 3] ) );
console.log( didziausiasSkaiciusSarase1( [ -5, 78, 14, 0, 18] ) );
console.log( didziausiasSkaiciusSarase1( [ 69, 69, 69, 69, 66] ) );
console.log( didziausiasSkaiciusSarase1( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );

console.log( didziausiasSkaiciusSarase1( [ 1, 'a', 3] ) );
console.log( didziausiasSkaiciusSarase1( [ 1, 2, 'a'] ) );

console.log( didziausiasSkaiciusSarase1( [ 'a', 2, 3] ) );

console.log( didziausiasSkaiciusSarase1( [ 'a', true, false, NaN, -Infinity, Infinity, 2, 5 ] ) );
















console.log('----------------------------');
console.log('----------5---------');
console.log('------------ISRINKTI RAIDES----------------');

function isrinktiRaides( text, step ) {
    if ( typeof(text) !== 'string') {
        return 'Pirmas parametras turi buti tekstas';
    }
    if ( text < 100 && text > 0) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (typeof(step) !== 'number') {
        return 'Antras parametras turi buti skaicius';
    }
    if (step === 0 && text.length === 1) {
        return text;
    }
    if (step === 0) {
        return 'Zingsnis negali buti nulis';
    }
        if (step < 0) {
        step = step * -1;
    }
    if (step % 1 !== 0) {
        return 'Zingsnis negali buti su kableliu';
    }
    if (Math.abs(step) > text.length) {
        return 'Tekstas per trumpas, kad isrinkti raides';
    }

    // let ats = '';


    // if (step < 0) {
    //     for (let i = step -1 ; i < text.length; i= i + step) {
    //         // console.log(text[i]);
        
    //         ats += text[i];
    //     }
    // } else {
    //     for (let i = text.length + step ; i >=0; i= i + step) {
    //         // console.log(text[i]);
        
    //         ats += text[i];
    //     }
    // }


    return ats;
}


console.log( isrinktiRaides( 'abcdefg', 3.2  ) );
console.log( isrinktiRaides(  'abc', 0  ) );
console.log( isrinktiRaides(  'abc', 4  ) );
console.log( isrinktiRaides(  '', 4  ) );
console.log( isrinktiRaides(  1561, 2  ) );


console.log( isrinktiRaides(  'a', 0  ) );
console.log( isrinktiRaides( 'abcdefg', 2  ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abcdevhewiugviuervgvriuegcieurcieurgfghijkl', 3 ) );
console.log( isrinktiRaides(  'abcd', -2  ) );
console.log( isrinktiRaides(  'abc', -6  ) );

















console.log('----------------------------');
console.log('----------6---------');
console.log('------------DALYBA----------------');


function dalyba(pirm, antr) {

    let errors = [];

    if ( typeof(pirm) !== 'number' && typeof(antr) !== 'number' ||
     '' + pirm === 'NaN' && '' + antr === 'NaN' ) {
         errors.push('Ivestos reiksmes nera skaiciai');
        // return 'Ivestos reiksmes nera skaiciai';
    }
    if ( typeof(pirm) !== 'number' || '' + pirm === 'NaN') {
        errors.push('Pirma reiksme nera skaicius');
        // return 'Pirma reiksme nera skaicius';
    }
    if ( typeof(antr) !== 'number' || '' + antr === 'NaN') {
        errors.push('Antra reiksme nera skaicius');
        // return 'Antra reiksme nera skaicius';
    }
    if ( antr === 0) {
        errors.push('Dalyba is nulio negalima');
        // return 'Dalyba is nulio negalima';
    }
    if ( isFinite(pirm) !== true ) {
        errors.push('Pirma reiksme negali buti begalybe');
        // return 'Pirma reiksme negali buti begalybe';
    }
    // let rezultatas = pirm / antr;
    // return 'Atsakymas lygus: ' + rezultatas;
     
    if ( isFinite(antr) !== true ) {
        errors.push('Antra reiksme negali buti begalybe');
        // return 'Pirma reiksme negali buti begalybe';}
    }
    if (errors.length > 0) {
        return errors;
    }
    let rezultatas = pirm / antr;
    return 'Atsakymas lygus: ' + rezultatas;
}


//Blogi
console.log( dalyba( 'a', 3 ) );
console.log( dalyba( 'a', 'b' ) );
console.log( dalyba( NaN, 3 ) );
console.log( dalyba( -NaN, 3 ) );
console.log( dalyba( 6, NaN ) );
console.log( dalyba( NaN, -NaN ) );
console.log( dalyba( true, 3 ) );
console.log( dalyba( 6, false ) );
console.log( dalyba( [], 3 ) );
console.log( dalyba( [6], 3 ) );
console.log( dalyba( [6, 9], 3 ) );
console.log( dalyba( ['s'], 3 ) );
console.log( dalyba( 6, ['s'] ) );
console.log( dalyba( Infinity, 3 ) );
console.log( dalyba( 6, 0 ) );
console.log( dalyba( 6, Infinity ) );
console.log( dalyba( 6, null ) );
console.log( dalyba( 6, undefined ) );

console.log('-----------------');


//Geri
console.log( dalyba( 0, 3 ) );
console.log( dalyba( 6, 3 ) );
console.log( dalyba( -6, 3 ) );
console.log( dalyba( -6, -3 ) );
console.log( dalyba( 6, 2.9 ) );
console.log( dalyba( 6, 0.0001 ) );
console.log( dalyba( 6, 1e3 ) );

