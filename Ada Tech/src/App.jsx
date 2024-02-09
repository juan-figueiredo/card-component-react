import React from 'react';
import "./App.css";
import Card from './components/Card/Card';



const Title = ({children}) => {

  return <h1>{children}</h1>

};


function App() {

  return (
    
    <div className="App">

      <Card 
        title="Caramelo" 
        buttonLabel="Clique aqui" 
        description="Cachorrinho gente boa demais" 
        src="https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg" 
        subtitle="Brazil" 
      />

      <Card 
        title="Pinscher" 
        buttonLabel="Clique aqui" 
        description="Demoniaco" 
        src="https://cobasi.vteximg.com.br/arquivos/ids/265361/Pinscher.jpg?v=637021869369770000" 
        subtitle="Brazil" 
      />
      <Card 
        title="Dálmata" 
        buttonLabel="Clique aqui" 
        description="101 dálmatas" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurNtoD7S_UjywK6x2c_Zk6ON8KwqXhkF4Uw&usqp=CAU" 
        subtitle="Brazil" 
      />
      <Card 
        title="Chow Chow" 
        buttonLabel="Clique aqui" 
        description="Peludão" 
        src="https://blog.cobasi.com.br/wp-content/uploads/2021/05/cachorro-mais-bonito-do-mundo-capa.png" 
        subtitle="Brazil" 
      />
      <Card 
        title="Rotweiller" 
        buttonLabel="Clique aqui" 
        description="Cachorro do Gta 5" 
        src="https://www.petz.com.br/blog/wp-content/uploads/2021/02/raca-de-cachorro-grande-2.jpg" 
        subtitle="Brazil" 
      />
      <Card 
        title="Doberman" 
        buttonLabel="Clique aqui" 
        description="Um pinscher adulto" 
        src="https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-grande-e-docil2.jpg" 
        subtitle="Brazil" 
      />
      <Card 
        title="São Bernardo" 
        buttonLabel="Clique aqui" 
        description="Cachorro do filme Beethoven" 
        src="https://www.racoesreis.com.br/wordpress/wp-content/uploads/imagem_do_post-106.jpg" 
        subtitle="Brazil" 
      />
    </div>
  );
};

export default App;
