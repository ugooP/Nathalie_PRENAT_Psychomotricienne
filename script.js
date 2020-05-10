
//  GESTION DES LIENS  DU HEADER  //

const liens = document.querySelectorAll('header a');

for (let i = 0; i < liens.length; i++) {

    liens[i].addEventListener('click', () => {

        let ul = document.querySelector('header ul')

        if (liens[i].classList.contains('active_a')) {
            return false
        }

        ul.querySelector('.active_a').classList.remove('active_a')
        liens[i].classList.add('active_a')
    }) 
}

//  GESTION DES SPAN DU HEADER  //

const span = document.querySelectorAll('header span');

for (let i = 0; i < liens.length; i++) {

    liens[i].addEventListener('click', () => {

        let ul = document.querySelector('header ul')

        if (span[i].classList.contains('active_span')) {
            return false
        }

        ul.querySelector('.active_span').classList.remove('active_span')
        span[i].classList.add('active_span')
    }) 
}

