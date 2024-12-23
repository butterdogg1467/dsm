document.addEventListener('DOMContentLoaded', () => {

let buttons = document.querySelectorAll('.navbutton')
let dd1 = document.querySelector('.dd1c')
let dd2 = document.querySelector('.dd2c')
let dd3 = document.querySelector('.dd3c')
let dropdownExpanded = false
let ddcDrop = dd1.querySelector('.ddcdrop');
let ddcDrop2 = dd2.querySelector('.ddcdrop');
let ddcDrop3 = dd3.querySelector('.ddcdrop');

let ddcDropIg = document.createElement('p')
let ddcDropEmail = document.createElement('p')

let ddcDrop2p1 = document.createElement('p')
let ddcDrop2p2 = document.createElement('p')
let ddcDrop2p3 = document.createElement('p')

let ddcDrop3p11 = document.createElement('p')
let ddcDrop3p1a = document.createElement('a')
let ddcDrop3p12 = document.createElement('p')

let ddcDrop3p2 = document.createElement('p')
let ddcDrop3p2a = document.createElement('a')

let ddcDrop3p3 = document.createElement('p')
let ddcDrop3p3a = document.createElement('a')

ddcDropIg.classList.add('ddcdroptext')
ddcDropEmail.classList.add('ddcdroptext')
ddcDrop2p1.classList.add('ddcdroptext')
ddcDrop2p2.classList.add('ddcdroptext')
ddcDrop2p3.classList.add('ddcdroptext')
ddcDrop3p11.classList.add('ddcdroptext')
ddcDrop3p1a.classList.add('ddcdroptext')
ddcDrop3p12.classList.add('ddcdroptext')
ddcDrop3p2.classList.add('ddcdroptext')
ddcDrop3p2a.classList.add('ddcdroptext')
ddcDrop3p3.classList.add('ddcdroptext')
ddcDrop3p3a.classList.add('ddcdroptext')


dd1.addEventListener('click', () => {
    let dropdownArrow = dd1.querySelector('.dropdownarrow');
    
        if (dropdownArrow) {
            dropdownArrow.classList.toggle('ddar');
        }
        
        if (dropdownExpanded === true) {
            ddcDrop.style.animation = "dropdownanimaterev 0.5s forwards";

            dd1.classList.remove('expanded');

            ddcDropIg.textContent = ' '
            ddcDropEmail.textContent = ' '

            const handleAnimation = () => {
                dd1.removeChild(ddcDrop);
                ddcDrop.removeEventListener('animationend', handleAnimation);
            }

            ddcDrop.addEventListener('animationend', handleAnimation);
            dropdownExpanded = false;
        } else {

            if (ddcDrop.parentNode) {
                ddcDrop.parentNode.removeChild(ddcDrop);
            }

            ddcDrop.style.animation = "dropdownanimate 0.5s forwards";
            dd1.appendChild(ddcDrop);

            setTimeout(() => {
                ddcDropIg.textContent = 'Instagram: @utsindiansociety';
                ddcDropEmail.textContent = 'Email: desiuts@googlegroups.com';
                ddcDrop.appendChild(ddcDropIg);
                ddcDrop.appendChild(ddcDropEmail);
            }, 250);

            dropdownExpanded = true;
        }
})

dd2.addEventListener('click', () => {
    let dropdownArrow = dd2.querySelector('.dropdownarrow');
    
        if (dropdownArrow) {
            dropdownArrow.classList.toggle('ddar');
        }
        
        if (dropdownExpanded === true) {
            ddcDrop2.style.animation = "dropdownanimaterev 0.5s forwards";

            dd2.classList.remove('expanded');

            ddcDrop2p1.textContent = ''
            ddcDrop2p2.textContent = ''
            ddcDrop2p3.textContent = ''

            const handleAnimation = () => {
                dd2.removeChild(ddcDrop2);
                ddcDrop2.removeEventListener('animationend', handleAnimation);
            }

            ddcDrop2.addEventListener('animationend', handleAnimation);
            dropdownExpanded = false;
        } else {
            if (ddcDrop2.parentNode) {
                ddcDrop2.parentNode.removeChild(ddcDrop2);
            }
            ddcDrop2.style.animation = "dropdownanimate 0.5s forwards";
            dd2.appendChild(ddcDrop2);

            setTimeout(() => {
            ddcDrop2p1.textContent = 'UTS Indian Society - DESI is Australia’s largest Indian Society with over 14,000 students having engaged with our marketing material and over 6400 unique attendees at our events in 2023 we have set benchmarks in student engagement.';
            ddcDrop2p2.textContent = 'We provide targeted premier advertising and marketing opportunities for companies and agencies across Australia through our state-based partners in Victoria, ACT, and New South Wales.';
            ddcDrop2p3.textContent = 'Find out more about Sponsorships & Corporate Partnerships by emailing us on desiuts@googlegroups.com.';

            ddcDrop2.appendChild(ddcDrop2p1);
            ddcDrop2.appendChild(ddcDrop2p2);
            ddcDrop2.appendChild(ddcDrop2p3);
        }, 550);

            dropdownExpanded = true;
        }
})

dd3.addEventListener('click', () => {
    let dropdownArrow = dd3.querySelector('.dropdownarrow');
    
        if (dropdownArrow) {
            dropdownArrow.classList.toggle('ddar');
        }
        
        if (dropdownExpanded === true) {
            ddcDrop3.style.animation = "dropdownanimaterev 0.5s forwards";

            dd3.classList.remove('expanded');

            ddcDrop3.textContent = ''

            const handleAnimation = () => {
                dd3.removeChild(ddcDrop3);
                ddcDrop3.removeEventListener('animationend', handleAnimation);
            }

            ddcDrop3.addEventListener('animationend', handleAnimation);
            dropdownExpanded = false;
        } else {
            if (ddcDrop3.parentNode) {
                ddcDrop3.parentNode.removeChild(ddcDrop3);
            }
            ddcDrop3.style.animation = "dropdownanimate 0.5s forwards";

            dd3.appendChild(ddcDrop3);

            setTimeout(() => {
                ddcDrop3p11.textContent = 'Check Our ';
                ddcDrop3p1a.textContent = 'Freshers Guide ';
                ddcDrop3p1a.href = 'freshersguide.html';
                ddcDrop3p12.textContent = 'for your questions regarding moving to Sydney, Accommodation and more about Uni-Life!';
                
                ddcDrop3p11.appendChild(ddcDrop3p1a);
                ddcDrop3p11.appendChild(ddcDrop3p12.firstChild);
            
                ddcDrop3p2.textContent = 'For information about UTS Student & Support Services: ';
                ddcDrop3p2a.textContent = 'Click Here';
                ddcDrop3p2a.href = '';
            
                ddcDrop3p2.appendChild(ddcDrop3p2a);
            
                ddcDrop3p3.textContent = 'In Emergencies, Dial ';
                ddcDrop3p3a.textContent = '000';
                ddcDrop3p3a.href = '';
            
                ddcDrop3p3.appendChild(ddcDrop3p3a);
            
                ddcDrop3.appendChild(ddcDrop3p11);
                ddcDrop3.appendChild(ddcDrop3p2);
                ddcDrop3.appendChild(ddcDrop3p3);
            }, 100);

            dropdownExpanded = true;
        }
})

buttons.forEach(button => {
    button.style.textDecorationLine = 'underline';
    button.style.textUnderlineOffset = '0px';
    button.style.textDecorationColor = 'rgba(255, 255, 255, 0)'
    button.addEventListener('mouseover', () => {
        button.style.animation = "underline 0.2s forwards";
    });

    button.addEventListener('mouseleave', () => {
        button.style.animation = "underlinerev 0.2s forwards";
    });
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('a, button');
        button.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            navLinks.classList.remove('open');
        }
    });

























})