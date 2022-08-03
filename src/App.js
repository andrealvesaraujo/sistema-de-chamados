import { useState } from 'react';
import Alunos from './Alunos'


function App() {

  const [nomeAluno, setNomeAluno] = useState('Lucas Oliveira')


  return (
    <div className="App">
      <h1>Escola</h1>
      <hr/>
      <Alunos nome={nomeAluno} mudaNome={setNomeAluno} />
    </div>
  );
}

export default App;
