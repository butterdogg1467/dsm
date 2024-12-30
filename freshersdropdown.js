document.addEventListener('DOMContentLoaded', () => {

let dd1 = document.querySelector('.dd1c')
let dd2 = document.querySelector('.dd2c')
let dropdown1Expanded = false
let dropdown2Expanded = false
let ddcDrop = dd1.querySelector('.ddcdrop');
let ddcDrop2 = dd2.querySelector('.ddcdrop');

let ddcDrop1p = document.createElement('p')

let ddcDrop2p1 = document.createElement('p')
let ddcDrop2p2 = document.createElement('p')
let ddcDrop2p3 = document.createElement('p')


ddcDrop1p.classList.add('ddcdroptext')
ddcDrop2p1.classList.add('ddcdroptext')
ddcDrop2p2.classList.add('ddcdroptext')
ddcDrop2p3.classList.add('ddcdroptext')

ddcDrop1p.textContent = 'Our events are open to all students, although members of our club receive a discount on tickets.';
ddcDrop2p1.textContent = 'Follow us on our social media accounts';
ddcDrop2p2.textContent = '@utsindiansociety and @thedesiaus to keep up-to-date';
ddcDrop2p3.textContent = 'with all our events and programs.';


dd1.addEventListener('click', () => {
    let dropdownArrow = dd1.querySelector('.dropdownarrow');
    
        if (dropdownArrow) {
            dropdownArrow.classList.toggle('ddar');
        }
        
        if (dropdown1Expanded === true) {
            ddcDrop.style.animation = "dropdownanimaterev 0.3s forwards";

            dd1.classList.remove('expanded');

            ddcDrop1p.style.display = 'none'

            const handleAnimation = () => {
                dd1.removeChild(ddcDrop);
                ddcDrop.removeEventListener('animationend', handleAnimation);
            }

            ddcDrop.addEventListener('animationend', handleAnimation);
            dropdown1Expanded = false;
        } else {

            if (ddcDrop.parentNode) {
                ddcDrop.parentNode.removeChild(ddcDrop);
            }

            ddcDrop.style.animation = "dropdownanimate 0.3s forwards";
            dd1.appendChild(ddcDrop);

            setTimeout(() => {
                ddcDrop1p.style.display = 'block';
                ddcDrop.appendChild(ddcDrop1p);
            }, 10);

            dropdown1Expanded = true;
        }
})

dd2.addEventListener('click', () => {
    let dropdownArrow = dd2.querySelector('.dropdownarrow');
    
        if (dropdownArrow) {
            dropdownArrow.classList.toggle('ddar');
        }
        
        if (dropdown2Expanded === true) {
            ddcDrop2.style.animation = "dropdownanimaterev 0.3s forwards";

            dd2.classList.remove('expanded');

            ddcDrop2p1.style.display = 'none'
            ddcDrop2p2.style.display = 'none'
            ddcDrop2p3.style.display = 'none'

            const handleAnimation = () => {
                dd2.removeChild(ddcDrop2);
                ddcDrop2.removeEventListener('animationend', handleAnimation);
            }

            ddcDrop2.addEventListener('animationend', handleAnimation);
            dropdown2Expanded = false;
        } else {
            if (ddcDrop2.parentNode) {
                ddcDrop2.parentNode.removeChild(ddcDrop2);
            }
            ddcDrop2.style.animation = "dropdownanimate 0.3s forwards";
            dd2.appendChild(ddcDrop2);

            setTimeout(() => {
            
                ddcDrop2p1.style.display = 'block';
                ddcDrop2p2.style.display = 'block';
                ddcDrop2p3.style.display = 'block';

            ddcDrop2.appendChild(ddcDrop2p1);
            ddcDrop2.appendChild(ddcDrop2p2);
            ddcDrop2.appendChild(ddcDrop2p3);
        }, 10);

            dropdown2Expanded = true;
        }
})
})