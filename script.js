
tiempo = ()=> {
    const time = new Date();
    var hora = time.getHours();
    var minutos = time.getMinutes();
    var segundos = time.getSeconds();


    hora = hora <= 10 ? '0' + hora : hora;
    minutos  = minutos <= 10 ? '0' + minutos : minutos;
    segundos = segundos <= 10 ? '0' + segundos : segundos;

    const relog = hora + ':' + minutos + ':' + segundos;

    const watch = document.querySelector('.watch');

    watch.innerHTML = relog;
    
    
}

setInterval(() => { tiempo()}, 100);

