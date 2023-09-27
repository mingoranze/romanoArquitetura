service.map((item, index)=>{
    let serviceItem = document.querySelector('#service').cloneNode(true);

    serviceItem.querySelector('h2').innerHTML = item.name;
    serviceItem.querySelector('p').innerHTML = item.desc

    document.querySelector('#serviceArea').append(serviceItem);
}); 

const projetos = '../assets/images/portfolio/emissao_rrt_projetos'; 

fetch(projetos)
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, 'text/html');
    const links = htmlDoc.querySelectorAll('a');
    const imagens = Array.from(links).filter(link => {
      return /\.(jpg|jpeg|png)$/.test(link.href);
    });
    const arrayDeImagens = imagens.map(imagem => imagem.href);
    
    const areaDeImagens = document.getElementById('projetosArea');
    arrayDeImagens.forEach(caminho => {
        const imagem = document.createElement('img');
        imagem.src = caminho;
        imagem.alt = 'Descrição da imagem'; // Adicione uma descrição apropriada
      
        areaDeImagens.appendChild(imagem);
      });
  });

  const porcelanatosRevestimentos = '../assets/images/portfolio/porcelanatos_e_revestimentos'; 

fetch(porcelanatosRevestimentos)
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, 'text/html');
    const links = htmlDoc.querySelectorAll('a');
    const imagens = Array.from(links).filter(link => {
      return /\.(jpg|jpeg|png)$/.test(link.href);
    });
    const arrayDeImagens = imagens.map(imagem => imagem.href);
    
    const areaDeImagens = document.getElementById('porcelanatos_revestimentosArea');
    arrayDeImagens.forEach(caminho => {
        const imagem = document.createElement('img');
        imagem.src = caminho;
        imagem.alt = 'Descrição da imagem'; // Adicione uma descrição apropriada
      
        areaDeImagens.appendChild(imagem);
      });
  });

  const forros_sancas = '../assets/images/portfolio/forros_e_sancas'; 

  fetch(forros_sancas)
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(text, 'text/html');
      const links = htmlDoc.querySelectorAll('a');
      const imagens = Array.from(links).filter(link => {
        return /\.(jpg|jpeg|png)$/.test(link.href);
      });
      const arrayDeImagens = imagens.map(imagem => imagem.href);
      
      const areaDeImagens = document.getElementById('forros_sancasArea');
      arrayDeImagens.forEach(caminho => {
          const imagem = document.createElement('img');
          imagem.src = caminho;
          imagem.alt = 'Descrição da imagem'; // Adicione uma descrição apropriada
        
          areaDeImagens.appendChild(imagem);
        });
    });

    const pinturas_efeitos = '../assets/images/portfolio/pinturas_e_efeitos'; 

    fetch(pinturas_efeitos)
      .then(response => response.text())
      .then(text => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, 'text/html');
        const links = htmlDoc.querySelectorAll('a');
        const imagens = Array.from(links).filter(link => {
          return /\.(jpg|jpeg|png)$/.test(link.href);
        });
        const arrayDeImagens = imagens.map(imagem => imagem.href);
        
        const areaDeImagens = document.getElementById('pinturas_efeitosArea');
        arrayDeImagens.forEach(caminho => {
            const imagem = document.createElement('img');
            imagem.src = caminho;
            imagem.alt = 'Descrição da imagem'; // Adicione uma descrição apropriada
          
            areaDeImagens.appendChild(imagem);
          });
      });
  


const pocelanataria = '../assets/images/portfolio/pocelanataria'; 

fetch(pocelanataria)
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, 'text/html');
    const links = htmlDoc.querySelectorAll('a');
    const imagens = Array.from(links).filter(link => {
      return /\.(jpg|jpeg|png)$/.test(link.href);
    });
    const arrayDeImagens = imagens.map(imagem => imagem.href);
    
    const areaDeImagens = document.getElementById('pocelanatariaArea');
    arrayDeImagens.forEach(caminho => {
        const imagem = document.createElement('img');
        imagem.src = caminho;
        imagem.alt = 'Descrição da imagem'; // Adicione uma descrição apropriada
      
        areaDeImagens.appendChild(imagem);
      });
  });

