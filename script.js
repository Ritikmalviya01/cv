let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg );

function inputMsg(){
    let name = prompt('enter the name');
    namasteBtn.textContent ='roll no.1:'+ name;
}