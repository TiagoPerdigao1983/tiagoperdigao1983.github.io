function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[Error] Verify Data and Try Again.')
    }else {        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'male'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'babyboy.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'teenmale.png')
            }else if (idade < 50) {
                //adulto 
                img.setAttribute('src', 'adultmale.png')
            }else {
                //idoso 
                img.setAttribute('src', 'oldmale.png')
            }
            
        }else if (fsex[1].checked) {
            genero = 'female' 
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'babygirl.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'teenfemale.png')
            }else if (idade < 50) {
                //adulto 
                img.setAttribute('src', 'adultfemale.png')
            } else {
                //idoso 
                img.setAttribute('src', 'oldfemale.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${genero} with ${idade} years.`
        res.appendChild(img)


        
    }
} 