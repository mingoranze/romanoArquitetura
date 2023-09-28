service.map((item, index)=>{
    let serviceItem = document.querySelector('#service').cloneNode(true);

    serviceItem.querySelector('h2').innerHTML = item.name;
    serviceItem.querySelector('p').innerHTML = item.desc;
    serviceItem.querySelector('a').href = item.link;

    document.querySelector('#serviceArea').append(serviceItem);
}); 


    
projetos.forEach(caminho => {
        const areaDeImagens = document.getElementById('projetosArea');
        const imagem = document.createElement('img');
        imagem.src = caminho.img;
        imagem.alt = 'projetos'; 
      
        areaDeImagens.appendChild(imagem);
});

porcelanatos_revestimentos.forEach(caminho => {
  const areaDeImagens = document.getElementById('porcelanatos_revestimentosArea');
  const imagem = document.createElement('img');
  imagem.src = caminho.img;
  imagem.alt = 'porcelanatos e revestimentos'; 

  areaDeImagens.appendChild(imagem);
});

forros_sancas.forEach(caminho => {
  const areaDeImagens = document.getElementById('forros_sancasArea');
  const imagem = document.createElement('img');
  imagem.src = caminho.img;
  imagem.alt = 'forros e sancas'; 

  areaDeImagens.appendChild(imagem);
});

pinturas_efeitos.forEach(caminho => {
  const areaDeImagens = document.getElementById('pinturas_efeitosArea');
  const imagem = document.createElement('img');
  imagem.src = caminho.img;
  imagem.alt = 'pinturas e efeitos'; 

  areaDeImagens.appendChild(imagem);
});

porcelanataria.forEach(caminho => {
  const areaDeImagens = document.getElementById('pocelanatariaArea');
  const imagem = document.createElement('img');
  imagem.src = caminho.img;
  imagem.alt = 'porcelanataria'; 

  areaDeImagens.appendChild(imagem);
});