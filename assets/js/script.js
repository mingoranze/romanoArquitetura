service.map((item, index)=>{
    let serviceItem = document.querySelector('#service').cloneNode(true);

    serviceItem.querySelector('h2').innerHTML = item.name;
    serviceItem.querySelector('p').innerHTML = item.desc;
    serviceItem.querySelector('a').href = item.link;

    document.querySelector('#serviceArea').append(serviceItem);
}); 


projetos.forEach(caminho => {
  const clone = document.querySelector('#imgPortfolio img').cloneNode(true);
  const areaDeImagens = document.getElementById('projetosArea');
  clone.src = caminho.img;
  areaDeImagens.appendChild(clone);
});

porcelanatos_revestimentos.forEach(caminho => {
  const clone = document.querySelector('#imgPortfolio img').cloneNode(true);
  const areaDeImagens = document.getElementById('porcelanatos_revestimentosArea');
  clone.src = caminho.img;
  areaDeImagens.appendChild(clone);
});

forros_sancas.forEach(caminho => {
  const clone = document.querySelector('#imgPortfolio img').cloneNode(true);
  const areaDeImagens = document.getElementById('forros_sancasArea');
  clone.src = caminho.img;
  areaDeImagens.appendChild(clone);
});

pinturas_efeitos.forEach(caminho => {
  const clone = document.querySelector('#imgPortfolio img').cloneNode(true);
  const areaDeImagens = document.getElementById('pinturas_efeitosArea');
  clone.src = caminho.img;
  areaDeImagens.appendChild(clone);
});

porcelanataria.forEach(caminho => {
  const clone = document.querySelector('#imgPortfolio img').cloneNode(true);
  const areaDeImagens = document.getElementById('pocelanatariaArea');
  clone.src = caminho.img;
  areaDeImagens.appendChild(clone);;
});