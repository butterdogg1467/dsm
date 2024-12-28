document.addEventListener('DOMContentLoaded', () => {

    let dd1 = document.querySelector('.dd1c')
    let dropdownExpanded = false
    let ddcDrop = dd1.querySelector('.ddcdrop');
    
    let ddcDrop1ol = document.createElement('ol')
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let li4 = document.createElement('li')
    let li5 = document.createElement('li')
    let li6 = document.createElement('li')
    let li7 = document.createElement('li')
    let ddcDrop1p = document.createElement('p')

    ddcDrop1ol.appendChild(li1)
    ddcDrop1ol.appendChild(li2)
    ddcDrop1ol.appendChild(li3)
    ddcDrop1ol.appendChild(li4)
    ddcDrop1ol.appendChild(li5)
    ddcDrop1ol.appendChild(li6)
    ddcDrop1ol.appendChild(li7)
    
    li1.classList.add('ddcdroptext')
    li2.classList.add('ddcdroptext')
    li3.classList.add('ddcdroptext')
    li4.classList.add('ddcdroptext')
    li5.classList.add('ddcdroptext')
    li6.classList.add('ddcdroptext')
    li7.classList.add('ddcdroptext')
    ddcDrop1p.classList.add('ddcdroptext')
    
    dd1.addEventListener('click', () => {
        let dropdownArrow = dd1.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            if (dropdownExpanded === true) {
                ddcDrop.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd1.classList.remove('expanded');

                li1.textContent = ''
                li2.textContent = ''
                li3.textContent = ''
                li4.textContent = ''
                li5.textContent = ''
                li6.textContent = ''
                li7.textContent = ''
                ddcDrop1p.textContent = ''
                
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
    
                ddcDrop.style.animation = "dropdownanimate 0.3s forwards";
                dd1.appendChild(ddcDrop);
    
                setTimeout(() => {
                    li1.textContent = 'Passport'
                    li2.textContent = 'Letter of offer and eCOE'
                    li3.textContent = 'Visa documentation'
                    li4.textContent = 'OSHC certification'
                    li5.textContent = 'Flight details'
                    li6.textContent = 'Accommodation address'
                    li7.textContent = 'On your flight to Australia, you will be given an Incoming Passenger Card - a legal document you are required to complete. Apart from your personal details, you must declare if you are bringing any restricted or prohibited goods into Australia.'
                    ddcDrop1p.textContent = 'Your bag (both carry-on and checked-in) may be inspected by a Customs Officer. If you are found to carry item(s) without declaring, you may be fined and your item may be confiscated. You could even risk having your visa cancelled.'
                    ddcDrop.appendChild(ddcDrop1ol);
                    ddcDrop.appendChild(ddcDrop1p);
                }, 0);
    
                dropdownExpanded = true;
            }
    })











    
})