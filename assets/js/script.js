service.map((item, index)=>{
    let serviceItem = document.querySelector('#service').cloneNode(true);

    serviceItem.querySelector('h2').innerHTML = item.name;
    serviceItem.querySelector('p').innerHTML = item.desc

    document.querySelector('#serviceArea').append(serviceItem);
}); 

portfolioJSON.map((item, index)=>{
    let portfolioItem = document.querySelector('#portfolio').cloneNode(true);
    
    portfolioItem.querySelector('h2').innerHTML = item.name;
    portfolioItem.querySelector('#portfolioImg').style.backgroundImage = `url('${item.bg}')`;
    portfolioItem.addEventListener('click', (e)=>{
        e.preventDefault()
        let modal = document.querySelector('#modal');
        modal.style.display = 'flex';
    });
    document.querySelector('#closeModal').addEventListener('click', (e)=>{
        e.preventDefault()
        modal.style.display = 'none'
    });
    document.querySelector('#portfolioArea').append(portfolioItem);
})

document.querySelector('#close').addEventListener('click', ()=>{
    document.querySelector('#menuOpen').style.transform = 'translateY(-40rem)'
});

document.querySelector('#open').addEventListener('click', ()=>{
    document.querySelector('#menuOpen').style.transform = 'translate(0)';
});
