function mostrarValoracion(){

    var valoracion = document.getElementById("valoracion").value;

    alert('Has valorado con ' + valoracion + ' puntos')

   
}


function mostrarCuenta(){
    var pais = document.getElementById("pais").value;
    var iban = document.getElementById("iban").value;
    var entidad = document.getElementById("entidad").value;
    var sucursal = document.getElementById("sucursal").value;
    var dc = document.getElementById("dc").value;
    var cuenta = document.getElementById("cuenta").value;

    var cuentaBancaria = pais.concat(iban +"-"+ entidad + "-" +sucursal + "-" +dc + "-" + cuenta);
    
    alert("Le informamos que su cuenta bancaria es: "+ cuentaBancaria)
  
}

function mostrarFecha(){
   
    var fechaFormulario = document.getElementById("fechaFormulario").value;
      
    var d = new Date(fechaFormulario);
      
    var diaSemana = new Array (7);
    diaSemana[0]="Domingo";
    diaSemana[1]="Lunes";
    diaSemana[2]="Martes";
    diaSemana[3]="Miércoles"; 
    diaSemana[4]="Jueves";
    diaSemana[5]="Viernes";
    diaSemana[6]="Sábado";

    var dia = diaSemana[d.getDay()];
    
    alert("La fecha seleccionada en el elemento de fecha es un "+ dia)

}

