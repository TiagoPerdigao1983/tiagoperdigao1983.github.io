function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
     msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!        
        img.src = 'Morning.png'
        document.body.style.background = '#e80101'
    }else if (hora >= 12 && hora <= 18 ) {
        // Boa tarde!
        img.src = 'evening.png'
        document.body.style.background = '#fd9b0b'
    }else {
        // Boa noite!
        img.src = 'night.png'
        document.body.style.background = '#564b51'
    }
}