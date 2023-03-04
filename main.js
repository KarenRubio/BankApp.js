const users = [
  { user: 'andrea', password: 'a123', balanceAccount: '990' },
  { user: 'paola', password: 'p123', balanceAccount: '990' },
  { user: 'molly', password: 'm123', balanceAccount: '990' },
];

document.getElementById('login').addEventListener("click",login)

function login() {
  var user_ = document.getElementById('user').value;
  var pass_ = document.getElementById('password').value;

  var currentUser = users.find(element => element.user === user_ && element.password === pass_);

  if (currentUser) {
    window.location = 'Account.html';
    alert('¡Correo y contraseña correctos! bienvenido '+ currentUser.user);
  } else {
    alert('Correo o contraseña incorrecta');
  }
}

document.getElementById("btnDepositar").addEventListener("click", depositar);

  

    function depositar() {
      var amount = parseFloat(prompt('Ingrese la cantidad a depositar'));
      if (!isNaN(amount)) {
        currentUser.balanceAccount += amount;
        alert('Depósito exitoso');
      } else {
        alert('Ingrese un monto válido');
      }
    }

    document.getElementById("btnRetirar").addEventListener("click", retirar);

    function retirar() {
      var amount = parseFloat(prompt('Ingrese la cantidad a retirar'));
      if (!isNaN(amount)) {
        if (amount > currentUser.balanceAccount) {
          alert('Fondos insuficientes');
        } else {
          currentUser.balanceAccount -= amount;
          alert('Retiro exitoso');
        }
      } else {
        alert('Ingrese un monto válido');
      }
    }

    document.getElementById("btnMostrarSaldo").addEventListener("click", mostrarSaldo);

    function mostrarSaldo() {
      alert('Saldo actual: ' + currentUser.balanceAccount);
    }









 