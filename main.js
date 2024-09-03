const cuentas = [
{nombre: "Mali", saldo: 290, password: "456"},
{nombre: "Maui", saldo: 200, password: "123"},
{nombre: "Gera", saldo: 67, password:"789"},

];

const selectCuentas = document.getElementById("cuentas");
const inputPassword = document.getElementById("password");
const resultado = document.getElementById("resultado");

cuentas.forEach(cuentas => {
    const option = document.createElement("option");
    option.value = cuentas.nombre;
    option.text = cuentas.nombre;
    selectCuentas.appendChild(option);
    
});

function iniciarOperacion () {
const cuentaSeleccionada = selectCuentas.value;
const passwordIngresado = inputPassword.value;

const cuentaEncontrada = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada);
     if (cuentaEncontrada && cuentaEncontrada.password === passwordIngresado) {
        const accion = prompt("¿Qué acción deseas realizar?(saldo/retiro/deposito)").toLowerCase();

        switch (accion) {
            case "saldo": 
                resultado.textContent = `Saldo disponible: $${cuentaEncontrada.saldo}`;
                break;
            case "retiro":
                resultado.textContent = "Funcionalidad de retiro en construcción";
                break;
            case "deposito":
                resultado.textContent = "Funcionalidad de depósito en construcción";
                break;
            default:
                resultado.textContent = "Acción no reconocida. Inténtalo nuevamente.";
        }

    } else {

        resultado.textContent = "Contraseña incorrecta o cuenta no encontrada.";
     }

     
     
        }
     

     
     




    


 

