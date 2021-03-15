function couleur(){

    var contenta=document.getElementById('boot');
    var contentb=document.getElementById('java');
    var contentc=document.getElementById('sym');
   
    color ="#"+ Math.random().toString(16).slice(2, 8);
    contenta.addEventListener('click',()=> {
        contenta.style.color = color;
        })

    contentb.addEventListener('click',()=> {
        contentb.style.color = color;
        })

    contentc.addEventListener('click',()=> {
        contentc.style.color = color;
        })
}

setInterval(()=> {
    document.getElementById('1').style.color= "#"+ Math.random().toString(16).slice(2, 8) ; },1000) ;


