document.addEventListener('DOMContentLoaded', () => {

    let buttons = document.querySelectorAll('.navbutton')

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
    
    
})