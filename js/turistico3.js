//parque la carolina
var app = new function () {
    var Ruta1 = {
      origen: "Parque Nautico",
      destino: "La carolina",
      hora: new Date(2022, 3, 09, 12),
      costobase: 500 + " $",
      reservas: []
    };
    var Ruta2 = {
      origen: "Jardin Botanico de Quito",
      destino: "Carolina",
      hora: new Date(2022, 4, 28, 7, 30),
      costobase: 450 + " $",
      reservas: []
    };
    var Ruta3 = {
      origen: "Avion Fantasma",
      destino: "Museo de Ciencias Naturales de Ecuador",
      hora: new Date(2022, 4, 21, 18),
      costobase: 600 + " $",
      reservas: []
    };
    //definir los objetos dentro de un array
    this.rutas = [Ruta1, Ruta2, Ruta3];
  
    //motrar todas las rutas disponibles con el array y obetos
    this.mostrarrutas = function () {
      var data = '<br>';
      if (this.rutas.length > 0) {
        for (i = 0; i < this.rutas.length; i++) {
          var hora = this.rutas[i].hora.getHours() < 10 ? '0' + this.rutas[i].hora.getHours() : this.rutas[i].hora.getHours();
          var minutos = this.rutas[i].hora.getMinutes() < 10 ? '0' + this.rutas[i].hora.getMinutes() : this.rutas[i].hora.getMinutes();
          data += '<tr>';
          data += '<td class = "contenedortr">Ruta # ' + (i + 1) + "<br>" + 'ORIGEN: ' + this.rutas[i].origen + "<br>" + 'DESTINO: ' + this.rutas[i].destino + "<br>" + 'SALIDA: ' + this.rutas[i].hora.toDateString() + " " + hora + ":" + minutos + "<br>" + "Costo Estimado: " + this.rutas[i].costobase + '</td>';
          data += '<td ><button class="btn" onclick="app.Reservar(' + i + ')">Reservar</button></td>';
          data += '</tr>';
        }
      }
      document.getElementById('rutas').innerHTML = data;
      document.getElementById('rutas').style.display = 'block';
    };
  
    this.Reservar = function (item) {
      var el = document.getElementById('documento');
      document.getElementById('documento').value = "";
      document.getElementById('name').value = "";
      document.getElementById('datosrutas').style.display = 'block';
      document.getElementById('rutas').style.display = 'none';
      document.getElementById('menu1').style.display = 'none';
      document.getElementById('menu2').style.display = 'none';
      document.getElementById('btnback').style.display = 'block';
  
      var hora = this.rutas[item].hora.getHours() < 10 ? '0' + this.rutas[item].hora.getHours() : this.rutas[item].hora.getHours();
      var minutos = this.rutas[item].hora.getMinutes() < 10 ? '0' + this.rutas[item].hora.getMinutes() : this.rutas[item].hora.getMinutes();
      document.getElementById('datosrutas').innerHTML = "Ruta: # " + (item + 1) + ":<br>ORIGEN: " + this.rutas[item].origen + '<br>DESTINO: ' + this.rutas[item].destino + '<br>SALIDA: ' + this.rutas[item].hora.toDateString() + " " + hora + ":" + minutos + '<br>PRECIO BASE: $' + this.rutas[item].costobase;
      document.getElementById('campodoc').style.display = 'block';
      self = this;
      document.getElementById('reserva-edit').onsubmit = function () {
        var d = el.value * 1;
        if (isNaN(d) || d == 0) {
          window.alert("Ingrese un dato correcto");
        } else {
          var flag = false;
          for (j = 0; j < self.rutas.length; j++) {
            var auxDoc = self.rutas[j].reservas.indexOf(d)
            if (auxDoc != -1) {
              if (self.rutas[j].hora.getFullYear() == self.rutas[item].hora.getFullYear() &&
                self.rutas[j].hora.getMonth() == self.rutas[item].hora.getMonth() &&
                self.rutas[j].hora.getDate() == self.rutas[item].hora.getDate()) {
                flag = true;
                break;
              }
            }
          }
          if (flag) {
            window.alert("Error: usted ya tiene reservado un Ruta para esta fecha");
          } else {
            self.rutas[item].reservas.push(d);
            window.alert("Ruta reservado correctamente");
            document.getElementById('menu1').style.display = 'block';
            document.getElementById('menu2').style.display = 'block';
            document.getElementById('datosrutas').style.display = 'none';
            document.getElementById('campodoc').style.display = 'none';
  
            document.getElementById('btnback').style.display = 'none';
          }
        }
      }
    };
  
    this.consultarReserva = function () {
      var el = document.getElementById('docConsulta');
      var d = el.value * 1;
      if (isNaN(d) || d == 0) {
        window.alert("Ingrese un dato correcto");
      } else {
        var data = '<p class = "subtitulo">Ruta reservada del usuario numero cedula:</p> ' + d;
        for (i = 0; i < this.rutas.length; i++) {
          var auxDoc = this.rutas[i].reservas.indexOf(d)
          if (auxDoc != -1) {
            var hora = this.rutas[i].hora.getHours() < 10 ? '0' + this.rutas[i].hora.getHours() : this.rutas[i].hora.getHours();
            var minutos = this.rutas[i].hora.getMinutes() < 10 ? '0' + this.rutas[i].hora.getMinutes() : this.rutas[i].hora.getMinutes();
            data += '<tr>';
            data += '<td class ="consulata">Ruta # ' + (i + 1) + "<br> ORIGEN: " + this.rutas[i].origen + '<br> DESTINO: ' + this.rutas[i].destino + '<br> SALIDA: ' + this.rutas[i].hora.toDateString() + " " + hora + ":" + minutos + '</td>';
            data += '</tr>';
          }
        }
        if (data == '<p class = "subtitulo">Ruta reservada del usuario numero cedula:</p> ' + d) {
          window.alert("No existen rutas asociados a dicho documento");
        } else {
          document.getElementById('menu1').style.display = 'none';
          document.getElementById('menu2').style.display = 'none';
          document.getElementById('rutas').style.display = 'block';
          document.getElementById('rutas').innerHTML = data;
          document.getElementById('btnback').style.display = 'block';
        }
      }
    };
  
    this.Volver = function () {
      document.getElementById('datosrutas').style.display = 'none';
      document.getElementById('campodoc').style.display = 'none';
      document.getElementById('rutas').style.display = 'none';
      document.getElementById('btnback').style.display = 'none';
      document.getElementById('menu1').style.display = 'block';
      document.getElementById('menu2').style.display = 'block';
      document.getElementById('docConsulta').value = "";
    };
  }
