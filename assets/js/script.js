service.map((item, index)=>{
    let serviceItem = document.querySelector('#service').cloneNode(true);

    serviceItem.querySelector('h2').innerHTML = item.name;
    serviceItem.querySelector('p').innerHTML = item.desc

    document.querySelector('#serviceArea').append(serviceItem);
}); 


document.querySelector('#close').addEventListener('click', ()=>{
    document.querySelector('#menuOpen').style.transform = 'translateY(-40rem)'
});

document.querySelector('#open').addEventListener('click', ()=>{
    document.querySelector('#menuOpen').style.transform = 'translate(0)';
});
