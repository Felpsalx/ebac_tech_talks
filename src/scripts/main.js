AOS.init();

const dataEvent = new Date ("Dec 22, 2023 19:00:00");

const timeStampEvent = dataEvent.getTime();

const contaHoras = setInterval(()=>{
    const now = new Date();
    const timeStampAtual = now.getTime();


    const diaEmMs = 1000 * 60 * 60 * 24;
    const HoraEmMs = 1000 * 60 * 60
    const minutes = 1000 * 60;

    const distanciaAteOEvento = timeStampEvent - timeStampAtual;

    const diasAteOEvento = Math.floor( distanciaAteOEvento / (diaEmMs) );

    const HorasAteOEvento = Math.floor(distanciaAteOEvento % (diaEmMs) / (HoraEmMs))

    const MinutosAteOEvento = Math.floor(distanciaAteOEvento % (HoraEmMs) / (minutes))
    
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % (minutes) / (1000))
        
    document.querySelector('.contador').innerHTML = `${diasAteOEvento} Dias ${HorasAteOEvento} Hrs ${MinutosAteOEvento} Min ${segundosAteOEvento} Seg`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaHoras);
        document.querySelector('.contador').innerHTML = "Evento Expirado";
    }
}, 1000) 

