service.map((item, index)=>{
    let serviceItem = document.querySelector('#service').cloneNode(true);

    serviceItem.querySelector('h2').innerHTML = item.name;
    serviceItem.querySelector('p').innerHTML = item.desc

    document.querySelector('#serviceArea').append(serviceItem);
}); 

porcelanatosRevestimentosJson.map((item, index)=>{
    let portfolioItem = document.querySelector('#portfolioImg').cloneNode(true);

    document.querySelector('img').src = item.img;

    document.querySelector('#portfolioImages').append(portfolioItem);
});

document.querySelector('#close').addEventListener('click', ()=>{
    document.querySelector('#menuOpen').style.transform = 'translateY(-40rem)'
});

document.querySelector('#open').addEventListener('click', ()=>{
    document.querySelector('#menuOpen').style.transform = 'translate(0)';
});
