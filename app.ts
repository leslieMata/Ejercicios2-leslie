class ejercicios {
    public ejercicio1() {
        let name = prompt('Escribe tu nombre');
        console.log('Hola ' + name + ' mucho gusto!');
    }
    public ejercicio2(){
        let base : number;
        let altura : number;
        let perimetro : number = 0;
        let area : number = 0;
        base = Number(prompt('Escribe la base del rectangulo'));
        altura = Number(prompt('Escribe la altura del rectangulo'));
        area = base*altura;
        perimetro = base+altura*2;
        console.log('El area del rectangulo es ' + area);
        console.log(`El perimetro del rectangulo es ${perimetro}`);
    }
    public ejercicio3(){
        let catetoA : number;
        let catetoB : number;
        let hipotenusa : number;
        catetoA = Number(prompt('Ingresa el valor A'));
        catetoB = Number(prompt('Ingresa el valor B '));
        hipotenusa = catetoA * catetoA + catetoB * catetoB;
        hipotenusa = Math.sqrt(hipotenusa);
        console.log('La Hipotenusa es ' + hipotenusa);
    }
    public ejercicio4(){
        let cifra1 : number;
        let cifra2 : number;
        let suma : number = 0;
        let resta : number = 0;
        let multiplicacion : number = 0;
        let division : number = 0;
       cifra1 = Number(prompt('Escribe  tu primer cifra'));
       cifra2 = Number(prompt('Escribe tu segundo cifre '));
       suma = cifra1+cifra2;
       resta = cifra1-cifra2;
       multiplicacion = cifra1*cifra2;
       division = cifra1/cifra2;
       console.log('Tu resultado final es ' + suma);
       console.log('Tu resultado final es ' + resta);
       console.log('Tu resultado final es ' + multiplicacion);
       console.log('Tu resultado final es ' + division);
    }
    public ejercicio5(){
        let GradosCelsius : number;
        let total : number;
        GradosCelsius = Number(prompt('Ingresa la temperatura en F°'));
        total = (GradosCelsius-32) * 5/9;
        console.log('La temperatura en C°' + total);
        
    }
    public ejercicio6(){
        let numero : number[] = [];
        let valor : number = 0;
        let promedioFinal : number = 0;
        for (let i = 0; i < 3; i++) {
            valor = Number(prompt('Ingresa un valor') ?? "");
            numero.push(valor);
            promedioFinal += valor;

        }
        promedioFinal = promedioFinal/3;
        console.log('La media es ' + promedioFinal);
    }
    public ejercicio7(){
        let minutosIngresados : number;
        let horas : number;
        let  minutos : number;
        minutosIngresados = Number(prompt('ingresa los minutos'));
        horas = minutosIngresados/60;
        minutos = minutosIngresados%60;
        console.log('Los minutos en horas son ' + horas + ' En minutos son ' + minutos);

    }
    public ejercicio8(){
        let sueldoBase : number;
        let venta1 : number;
        let venta2 : number;
        let venta3: number;
        let comision : number;
        let sueldoTotal : number;
        sueldoBase = Number(prompt('Escribe tu sueldo'));
        venta1 = Number(prompt('Escribe el total de la venta 1'));
        venta2 = Number(prompt('Escribe el total de  la venta 2'));
        venta3 = Number(prompt('Escribe el total de la venta 3'));
        comision = venta1*0.10 + venta2*0.10 + venta3*0.10;
        sueldoTotal = sueldoBase + comision;
        console.log('Tu comision de tus 3 ventas es ' + comision + '\n Tu sueldo total es de ' + sueldoTotal);

        }
    public ejercicio9(){
        let precio : number;
        let total: number;
        precio = Number(prompt('escribe el precio del articulo'));
        total = precio * 0.15;
        total = precio - total;
        console.log('El total a pagar es ' + total);

    }
    public ejercicio10(){
        let calificacion1 : number;
        let calificacion2 :number;
        let calificacion3 : number;
        let calificacionFinal: number;
        calificacion1 = Number(prompt('Escribe tu primera calificacion'));
        calificacion2 = Number(prompt('Escribe tu segunda calificacion'));
        calificacion3 = Number (prompt('Escribe tu tercer calificacion'));
        calificacion1 = 55*calificacion1/100;
        calificacion2 = 30*calificacion2/100;
        calificacion3 = 15*calificacion3/100;
        calificacionFinal = calificacion1+calificacion2+calificacion3;
        console.log('Tu calificacion fina es ' + calificacionFinal);
    }
}
let objeto = new ejercicios();
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