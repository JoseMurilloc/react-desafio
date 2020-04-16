import React, { useState } from 'react';

import Header from './components/Header';
import Feed from './components/Feed';

function App() {

  const [post, setPost] = useState([
    {
      id: 1,
      author: {
        name: "Julio Alcantara",
        avatar: "https://conteudo.imguol.com.br/c/entretenimento/4e/2018/08/17/o-musico-gustavo-bertoni-do-scalene-1534530323003_v2_450x450.png"
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: "http://url-da-imagem.com/imagem.jpg"
          },
          content: "Conteúdo do comentário"
        }
      ]
    }
  ])

  return (
    <div className="App">
      <Header />
      <Feed posts={post} />
    </div>
  );
}

export default App;
