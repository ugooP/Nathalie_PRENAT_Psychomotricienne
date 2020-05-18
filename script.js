
//  GESTION LIENS HEADER AU CLIQUE  //

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

//  GESTION SPAN HEADER AU CLIQUE  //

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

//  GESTION LIENS ET SPAN HEADER AU SCROLL  //

function scroll_function() {
    
    const big = document.querySelector('.big_div');
    const small_div = document.querySelector('.small_div');
    const small_div_height = big.scrollTop;    

    if (small_div_height < 170) {
        // "ACCUEIL" //
        document.querySelector('.active_a').classList.remove('active_a')
        liens[0].classList.add('active_a')

        document.querySelector('.active_span').classList.remove('active_span')
        span[0].classList.add('active_span')
    }
    else if (small_div_height < 1100) {
        // "A PROPOS" //
        document.querySelector('.active_a').classList.remove('active_a')
        liens[1].classList.add('active_a')

        document.querySelector('.active_span').classList.remove('active_span')
        span[1].classList.add('active_span')
    }
    else if (small_div_height < 2300) {
        // "CONSULTATIONS" //
        document.querySelector('.active_a').classList.remove('active_a')
        liens[2].classList.add('active_a')

        document.querySelector('.active_span').classList.remove('active_span')
        span[2].classList.add('active_span')
    }
    else if (small_div_height < 2800) {
        // "TARIFS" //
        document.querySelector('.active_a').classList.remove('active_a')
        liens[3].classList.add('active_a')

        document.querySelector('.active_span').classList.remove('active_span')
        span[3].classList.add('active_span')
    }
    else if (small_div_height < 4200) {
        // "CONTACT" //
        document.querySelector('.active_a').classList.remove('active_a')
        liens[4].classList.add('active_a')

        document.querySelector('.active_span').classList.remove('active_span')
        span[4].classList.add('active_span')
    }
}
