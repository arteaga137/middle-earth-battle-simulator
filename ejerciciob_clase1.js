/*

Suponiendo que nuestros soldados son:

a infanteria (potencia 1)
b caballería (potencia 5)
c catapultas (potencia 20)

y que el enemigo tiene un numero indeterminado de orcos:

x orcos (potencia 1)
y trolls (potencia 10)
z nazguls (potencia 50)

1. define un bloque if - elseif para cumplir estas condiciones:

- si mi potencia es mayor, atacar.
- si hay empate, defender
- si es menor, pedir refuerzos
- cualquier otra situación, huir

2. cada ejercito vendrá representado mediante un objeto

3. haz un test del código con los siguentes datos:
    - gondor: infanteria = 1000, caballería = 200, catapultas = 5; - saruman: orcos = 1500, trolls = 20, nazguls = 5;

4. crea el bloque if-else usando una ternaria
    */

// definicion de ejercitos (objeto)
let ejercitoGondor = {
    infanteria: undefined,
    caballeria: undefined,
    catapulta: undefined
};
let ejercitoSaruman = {
    orco: undefined,
    troll: undefined,
    nazgul: undefined
};


// definicion de puntos de potencia por unidad
potenciaInfanteria = 1;
potenciaCaballeria = 5;
potenciaCatapulta = 20;
potenciaOrco = 1;
potenciaTroll = 10;
potenciaNazgul =50;

// numero unidades
unidadInfanteria = 1000;
unidadCaballeria = 200;
unidadCatapulta = 5;
unidadOrco = 1500;
unidadTroll = 20;
unidadNazgul = 5;

// asignacion de unidades a cada ejercito multiplicada por potencia
ejercitoGondor.infanteria = unidadInfanteria * potenciaInfanteria;
ejercitoGondor.caballeria = unidadCaballeria * potenciaCaballeria;
ejercitoGondor.catapulta = unidadCatapulta * potenciaCatapulta;
ejercitoSaruman.orco = unidadOrco * potenciaOrco;
ejercitoSaruman.troll = unidadTroll * potenciaTroll;
ejercitoSaruman.nazgul = unidadNazgul * potenciaNazgul;

// calculo puntos cada ejercito
let gondor = ejercitoGondor.infanteria + ejercitoGondor.caballeria + ejercitoGondor.catapulta;
let saruman = ejercitoSaruman.orco + ejercitoSaruman.troll + ejercitoSaruman.nazgul;

// imprimir cantidad de puntos
console.log(gondor)
console.log(saruman)

// creacion de bloque if-else
if (gondor > saruman) {
    console.log("atacar")
} else if ( gondor == saruman) {
    console.log("defender")
} else if (gondor < saruman) {
    console.log("pedir refuerzos")
}else {
    console.log("huir")
};

// Ternaria
let ternaria = (gondor >= saruman) ? "atacar" : "huir";

console.log("ternaria resulta en ", ternaria)