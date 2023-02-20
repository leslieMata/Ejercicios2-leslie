var ejercicios = /** @class */ (function () {
    function ejercicios() {
    }
    ejercicios.prototype.ejercicio1 = function () {
        var name = prompt('Escribe tu nombre');
        console.log('Hola ' + name + ' mucho gusto!');
    };
    ejercicios.prototype.ejercicio2 = function () {
        var base;
        var altura;
        var perimetro = 0;
        var area = 0;
        base = Number(prompt('Escribe la base del rectangulo'));
        altura = Number(prompt('Escribe la altura del rectangulo'));
        area = base * altura;
        perimetro = base + altura * 2;
        console.log('El area del rectangulo es ' + area);
        console.log("El perimetro del rectangulo es ".concat(perimetro));
    };
    ejercicios.prototype.ejercicio3 = function () {
        var catetoA;
        var catetoB;
        var hipotenusa;
        catetoA = Number(prompt('Ingresa el valor A'));
        catetoB = Number(prompt('Ingresa el valor B '));
        hipotenusa = catetoA * catetoA + catetoB * catetoB;
        hipotenusa = Math.sqrt(hipotenusa);
        console.log('La Hipotenusa es ' + hipotenusa);
    };
    ejercicios.prototype.ejercicio4 = function () {
        var cifra1;
        var cifra2;
        var suma = 0;
        var resta = 0;
        var multiplicacion = 0;
        var division = 0;
        cifra1 = Number(prompt('Escribe  tu primer cifra'));
        cifra2 = Number(prompt('Escribe tu segundo cifre '));
        suma = cifra1 + cifra2;
        resta = cifra1 - cifra2;
        multiplicacion = cifra1 * cifra2;
        division = cifra1 / cifra2;
        console.log('Tu resultado final es ' + suma);
        console.log('Tu resultado final es ' + resta);
        console.log('Tu resultado final es ' + multiplicacion);
        console.log('Tu resultado final es ' + division);
    };
    ejercicios.prototype.ejercicio5 = function () {
        var GradosCelsius;
        var total;
        GradosCelsius = Number(prompt('Ingresa la temperatura en F°'));
        total = (GradosCelsius - 32) * 5 / 9;
        console.log('La temperatura en C°' + total);
    };
    ejercicios.prototype.ejercicio6 = function () {
        var _a;
        var numero = [];
        var valor = 0;
        var promedioFinal = 0;
        for (var i = 0; i < 3; i++) {
            valor = Number((_a = prompt('Ingresa un valor')) !== null && _a !== void 0 ? _a : "");
            numero.push(valor);
            promedioFinal += valor;
        }
        promedioFinal = promedioFinal / 3;
        console.log('La media es ' + promedioFinal);
    };
    ejercicios.prototype.ejercicio7 = function () {
        var minutosIngresados;
        var horas;
        var minutos;
        minutosIngresados = Number(prompt('ingresa los minutos'));
        horas = minutosIngresados / 60;
        minutos = minutosIngresados % 60;
        console.log('Los minutos en horas son ' + horas + ' En minutos son ' + minutos);
    };
    ejercicios.prototype.ejercicio8 = function () {
        var sueldoBase;
        var venta1;
        var venta2;
        var venta3;
        var comision;
        var sueldoTotal;
        sueldoBase = Number(prompt('Escribe tu sueldo'));
        venta1 = Number(prompt('Escribe el total de la venta 1'));
        venta2 = Number(prompt('Escribe el total de  la venta 2'));
        venta3 = Number(prompt('Escribe el total de la venta 3'));
        comision = venta1 * 0.10 + venta2 * 0.10 + venta3 * 0.10;
        sueldoTotal = sueldoBase + comision;
        console.log('Tu comision de tus 3 ventas es ' + comision + '\n Tu sueldo total es de ' + sueldoTotal);
    };
    ejercicios.prototype.ejercicio9 = function () {
        var precio;
        var total;
        precio = Number(prompt('escribe el precio del articulo'));
        total = precio * 0.15;
        total = precio - total;
        console.log('El total a pagar es ' + total);
    };
    ejercicios.prototype.ejercicio10 = function () {
        var calificacion1;
        var calificacion2;
        var calificacion3;
        var calificacionFinal;
        calificacion1 = Number(prompt('Escribe tu primera calificacion'));
        calificacion2 = Number(prompt('Escribe tu segunda calificacion'));
        calificacion3 = Number(prompt('Escribe tu tercer calificacion'));
        calificacion1 = 55 * calificacion1 / 100;
        calificacion2 = 30 * calificacion2 / 100;
        calificacion3 = 15 * calificacion3 / 100;
        calificacionFinal = calificacion1 + calificacion2 + calificacion3;
        console.log('Tu calificacion fina es ' + calificacionFinal);
    };
    return ejercicios;
}());
var objeto = new ejercicios();
//objeto.ejercicio1();
//objeto.ejercicio2();
//objeto.ejercicio3();
//objeto.ejercicio4();
//objeto.ejercicio5();
//objeto.ejercicio6();
//objeto.ejercicio7();
//objeto.ejercicio8();
//objeto.ejercicio9();
objeto.ejercicio10();
