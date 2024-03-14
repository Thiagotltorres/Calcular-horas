function calcularHoras() {
    var cargaHoraria = document.getElementById('cargaHoraria').value;
    var entrada = document.getElementById('entrada').value;
    var saidaIntervalo = document.getElementById('saidaIntervalo').value;
    var voltaIntervalo = document.getElementById('voltaIntervalo').value;
    var saida = document.getElementById('saida').value;
  
    // Calcula os períodos em minutos
    function tempoParaMinutos(tempo) {
      var partes = tempo.split(':');
      return parseInt(partes[0]) * 60 + parseInt(partes[1]);
    }
  
    // Calcula os períodos de trabalho e intervalo
    var primeiroPeriodo = tempoParaMinutos(saidaIntervalo) - tempoParaMinutos(entrada);
    var intervalo = tempoParaMinutos(voltaIntervalo) - tempoParaMinutos(saidaIntervalo);
    var segundoPeriodo = tempoParaMinutos(saida) - tempoParaMinutos(voltaIntervalo);
    var totalTrabalhado = primeiroPeriodo + segundoPeriodo;
  
    // Converte os minutos de volta para horas
    function minutosParaTempo(minutos) {
      var h = Math.floor(minutos / 60);
      var m = minutos % 60;
      return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
    }
  
    // Exibe os resultados
    document.getElementById('primeiroPeriodo').textContent = minutosParaTempo(primeiroPeriodo) + ' horas';
    document.getElementById('segundoPeriodo').textContent = minutosParaTempo(segundoPeriodo) + ' horas';
    document.getElementById('intervalo').textContent = minutosParaTempo(intervalo) + ' horas';
    document.getElementById('totalTrabalhado').textContent = minutosParaTempo(totalTrabalhado) + ' horas';
  
    // Calcula e exibe as horas extras ou a dever
    var cargaMinutos = tempoParaMinutos(cargaHoraria);
    var extra = totalTrabalhado - cargaMinutos;
    document.getElementById('horaExtra').textContent = extra >= 0 ? minutosParaTempo(extra) + ' Crédito' : minutosParaTempo(-extra) + ' Devendo';
  
    // Aplica a formatação de alerta se necessário
    aplicarAlerta(primeiroPeriodo, 'primeiroPeriodo');
    aplicarAlerta(segundoPeriodo, 'segundoPeriodo');
    aplicarAlerta(intervalo, 'intervalo', true);
    aplicarAlerta(extra, 'horaExtra');
  }
  
  function aplicarAlerta(valor, elementoId, isIntervalo) {
    var elemento = document.getElementById(elementoId);
    if ((isIntervalo && valor < 60) || (!isIntervalo && valor > 360)) {
      elemento.classList.add('alerta');
    } else {
      elemento.classList.remove('alerta');
    }
  }

 
 
  
    // Atualiza a função minutosParaTempo para lidar com a exibição de minutos
    function minutosParaTempo(minutos) {
      var h = Math.floor(minutos / 60);
      var m = minutos % 60;
      if (h > 0) {
        return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ' horas';
      } else {
        return (m < 10 ? '0' : '') + m + ' minutos';
      }
    }
  
  
  