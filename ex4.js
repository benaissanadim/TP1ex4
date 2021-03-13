function couleur(){
    var contenta=document.getElementById('ali');
    var contentb=document.getElementById('salah');
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    contenta.addEventListener('click',()=> {
        contenta.style.color = color;
    })
    contentb.addEventListener('click',()=> {
        contentb.style.color = color;
    })
}


