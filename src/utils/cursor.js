const cursor = document.querySelector('.cursor');

function cursorHandler() {
    if(window.innerWidth < 1000){
        cursor.style.display = 'none';
    }else{
    document.addEventListener('mousemove', (e) =>{
        cursor.style.top = e.clientY - 15 + 'px';
        cursor.style.left = e.clientX - 15 + 'px';
    })
    
    document.addEventListener('mouseleave', ()=>{
        cursor.style.display = 'none';
    })
    document.addEventListener('mouseenter', ()=>{
        cursor.style.display = 'block';
    })
}

}

cursorHandler()