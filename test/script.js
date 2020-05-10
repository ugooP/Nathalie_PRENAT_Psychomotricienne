
const liens = document.querySelectorAll('header a');

for (let i = 0; i < liens.length; i++) {
    liens[i].addEventListener('click', () => {

        let ul = document.querySelector('ul')
        
        if (liens[i].classList.contains('active')) {
            return false
        }

        ul.querySelector('.active').classList.remove('active')
        liens[i].classList.add('active')   
    });
}


