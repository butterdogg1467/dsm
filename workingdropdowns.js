document.addEventListener('DOMContentLoaded', () => {

    let buttons = document.querySelectorAll('.navbutton')
    let dd1 = document.querySelector('.dd1c')
    let dd2 = document.querySelector('.dd2c')
    let dd3 = document.querySelector('.dd3c')
    let dd4 = document.querySelector('.dd4c')
    let dropdown1Expanded = false
    let dropdown2Expanded = false
    let dropdown3Expanded = false
    let dropdown4Expanded = false
    let ddcDrop = dd1.querySelector('.ddcdrop');
    let ddcDrop2 = dd2.querySelector('.ddcdrop');
    let ddcDrop3 = dd3.querySelector('.ddcdrop');
    let ddcDrop4 = dd4.querySelector('.ddcdrop');
    
    let ddcDrop1p1 = document.createElement('p')
    let ddcDrop1p2 = document.createElement('p')
    let ddcDrop1p3 = document.createElement('p')
    let ddcDrop1Ol = document.createElement('ol')
    let ddcDrop1Li1 = document.createElement('li')
    let ddcDrop1Li2 = document.createElement('li')
    let ddcDrop1Li3 = document.createElement('li')
    let ddcDrop1Li4 = document.createElement('li')
    let ddcDrop1Li5 = document.createElement('li')
    
    let ddcDrop2p1 = document.createElement('p')
    let ddcDrop2Ol = document.createElement('ol')
    let ddcDrop2Li1 = document.createElement('li')
    let ddcDrop2Li2 = document.createElement('li')
    let ddcDrop2p2 = document.createElement('p')

    let ddc3p1 = document.createElement('p');
    let ddc3p2 = document.createElement('p');
    let ddc3p3 = document.createElement('p');

    let ddc4p1 = document.createElement('p');

    ddcDrop1p1.classList.add('ddcdroptext');
    ddcDrop1p2.classList.add('ddcdroptext');
    ddcDrop1p3.classList.add('ddcdroptext');
    ddcDrop1Ol.classList.add('ddcdroptext');
    ddcDrop1Li1.classList.add('ddcdroptext');
    ddcDrop1Li2.classList.add('ddcdroptext');
    ddcDrop1Li3.classList.add('ddcdroptext');
    ddcDrop1Li4.classList.add('ddcdroptext');
    ddcDrop1Li5.classList.add('ddcdroptext');

    ddcDrop2p1.classList.add('ddcdroptext');
    ddcDrop2Ol.classList.add('ddcdroptext');
    ddcDrop2Li1.classList.add('ddcdroptext');
    ddcDrop2Li2.classList.add('ddcdroptext');
    ddcDrop2p2.classList.add('ddcdroptext');

    ddc3p1.classList.add('ddcdroptext');
    ddc3p2.classList.add('ddcdroptext');
    ddc3p3.classList.add('ddcdroptext');

    ddc4p1.classList.add('ddcdroptext');

    ddcDrop1p1.textContent = "One of the perks of working as a student in Australia is that you are allowed to work part-time. This part-time job can be in any field and you have lots of options you can explore (retail, hospitality, health, etc).";
    ddcDrop1p2.textContent = "A good way to start your job search journey is to look out for job openings in popular retail outlets like Woolworths, Coles, BWS, Kmart, and Target. They usually hire many applicants during the Christmas season.";
    ddcDrop1p3.textContent = "If you’re looking into internships or entry-level opportunities, there are a few websites you can start looking into:";
    ddcDrop1Li1.textContent = 'Employability Connect'
    ddcDrop1Li2.textContent = 'GradAustralia'
    ddcDrop1Li3.textContent = 'GradConnection'
    ddcDrop1Li4.textContent = 'ReadyGrad'
    ddcDrop1Li5.textContent = 'Ribit'

    ddcDrop1Ol.appendChild(ddcDrop1Li1)
    ddcDrop1Ol.appendChild(ddcDrop1Li2)
    ddcDrop1Ol.appendChild(ddcDrop1Li3)
    ddcDrop1Ol.appendChild(ddcDrop1Li4)
    ddcDrop1Ol.appendChild(ddcDrop1Li5)

    ddcDrop2p1.textContent = 'Student visa holders can:'
    ddcDrop2Li1.textContent = 'work up to 48 hours each fortnight while their course is in session (excluding any work undertaken as a registered component of their course of study or training)'
    ddcDrop2Li2.textContent = 'also work unlimited hours during scheduled course breaks'
    ddcDrop2p2.textContent = "For more information, visit the Australian Government's Department of Home Affairs."

    ddcDrop2Ol.appendChild(ddcDrop2Li1)
    ddcDrop2Ol.appendChild(ddcDrop2Li2)

    ddc3p1.textContent = 'A TFN is a Tax File Number'
    ddc3p2.textContent = 'The Department of Home Affairs randomly checks workplaces and your employer will be legally obliged to provide the Department of Home Affairs with information, if requested. If you decide to work you will need to apply for a Tax File Number (TFN) from the Australian Taxation Office.'
    ddc3p3.textContent = 'Read more on detailed steps on how to apply for your TFN as an individual.'

    ddc4p1.textContent = 'Visit UTS Careers In Building 2 for assistance in developing your career. Regular Career Service workshops provide career education and generic skills development and employment opportunities including resume writing and interviewing skills. UTS Departments, Faculties and ActivateUTS also co-ordinates part-time and casual work for students make sure to check them out on UTS Career Hub.'
    
    dd1.addEventListener('click', () => {
        let dropdownArrow = dd1.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            if (dropdown1Expanded === true) {
                ddcDrop.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd1.classList.remove('expanded');

                ddcDrop1p1.style.display = 'none'
                ddcDrop1p2.style.display = 'none'
                ddcDrop1p3.style.display = 'none'
                ddcDrop1Ol.style.display = 'none'

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
                    ddcDrop1p1.style.display = 'block'
                    ddcDrop1p2.style.display = 'block'
                    ddcDrop1p3.style.display = 'block'
                    ddcDrop1Ol.style.display = 'block'

                    ddcDrop.appendChild(ddcDrop1p1);
                    ddcDrop.appendChild(ddcDrop1p2);
                    ddcDrop.appendChild(ddcDrop1p3);
                    ddcDrop.appendChild(ddcDrop1Ol);


                }, 10);
    
                dropdown1Expanded = true;
            }
    })
    
    dd2.addEventListener('click', () => {
        let dropdownArrow = dd2.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            ddcDrop2p1.style.display = 'none'
            ddcDrop2Ol.style.display = 'none'
            ddcDrop2p2.style.display = 'none'
            
            if (dropdown2Expanded === true) {
                ddcDrop2.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd2.classList.remove('expanded');
    
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
                
                    ddcDrop2p1.style.display = 'block'
                    ddcDrop2Ol.style.display = 'block'
                    ddcDrop2p2.style.display = 'block'

                    ddcDrop2.appendChild(ddcDrop2p1);
                    ddcDrop2.appendChild(ddcDrop2Ol);
                    ddcDrop2.appendChild(ddcDrop2p2);
    
            }, 10);
    
                dropdown2Expanded = true;
            }
    })
    
    dd3.addEventListener('click', () => {
        let dropdownArrow = dd3.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            if (dropdown3Expanded === true) {
                ddcDrop3.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd3.classList.remove('expanded');

                ddc3p1.style.display = 'none';
                ddc3p2.style.display = 'none';
                ddc3p3.style.display = 'none';

                const handleAnimation = () => {
                    dd3.removeChild(ddcDrop3);
                    ddcDrop3.removeEventListener('animationend', handleAnimation);
                }
    
                ddcDrop3.addEventListener('animationend', handleAnimation);
                dropdown3Expanded = false;
            } else {
                if (ddcDrop3.parentNode) {
                    ddcDrop3.parentNode.removeChild(ddcDrop3);
                }
                ddcDrop3.style.animation = "dropdownanimate 0.3s forwards";
    
                dd3.appendChild(ddcDrop3);
    
                setTimeout(() => {

                    ddc3p1.style.display = 'block';
                    ddc3p2.style.display = 'block';
                    ddc3p3.style.display = 'block';

                    ddcDrop3.appendChild(ddc3p1);
                    ddcDrop3.appendChild(ddc3p2);
                    ddcDrop3.appendChild(ddc3p3);

                }, 100);
    
                dropdown3Expanded = true;
            }

            
    })

    dd4.addEventListener('click', () => {
        let dropdownArrow = dd4.querySelector('.dropdownarrow');
        
            if (dropdownArrow) {
                dropdownArrow.classList.toggle('ddar');
            }
            
            if (dropdown4Expanded === true) {
                ddcDrop4.style.animation = "dropdownanimaterev 0.3s forwards";
    
                dd4.classList.remove('expanded');

                ddc4p1.style.display = 'none'

                const handleAnimation = () => {
                    dd4.removeChild(ddcDrop4);
                    ddcDrop4.removeEventListener('animationend', handleAnimation);
                }
    
                ddcDrop4.addEventListener('animationend', handleAnimation);
                dropdown4Expanded = false;
            } else {
    
                if (ddcDrop4.parentNode) {
                    ddcDrop4.parentNode.removeChild(ddcDrop4);
                }
    
                ddcDrop4.style.animation = "dropdownanimate 0.3s forwards";
                dd4.appendChild(ddcDrop4);

                setTimeout(() => {
                    ddc4p1.style.display = 'block'

                    ddcDrop4.appendChild(ddc4p1);


                }, 10);
    
                dropdown4Expanded = true;
            }
    })










})