import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import {letters} from './helpers/letters';
import { HangImage } from './COMPONENTS/HangImage';
import {getRandomWord } from './helpers/getRandomWord';
function App() {

const [word,setWord]= useState(getRandomWord());
const [hiddenWord, setHiddenWord]= useState('_ '.repeat(word.length));
const [attempts,setAttempts]= useState(0) ;
const [lose,setLose] =useState(false);
const [won,setWon]=useState(false);


// determinar si la persona perdió

useEffect(() => {

  if (attempts >=9) {
    setLose (true);
  }
  // console.log(attempts);

}, [attempts] );

// Determinar si la persona perdió
useEffect(()=> {

  const currentHiddenWord = hiddenWord.split(' ').join('');

  if ( currentHiddenWord === word ){
    setWon(true);
  }

},[hiddenWord])

  const checkLetter= (letter: string) =>{

    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min (attempts+1,9));
     return;
    }
    
    const hiddenWordArray= hiddenWord.split(' ');
  
    for (let i=0 ; i<word.length; i++){
      if (word [i]=== letter) {

      hiddenWordArray[i]=letter;
      }
     
    }

    setHiddenWord(hiddenWordArray.join(' '));
  
  }

const newGame=() => {

  const newWord=getRandomWord();

  setWord(newWord);
  setHiddenWord ('_ '.repeat (newWord.length));

  setAttempts(0);
  setLose(false);
  setWon(false);

}


return (
  <div className="App">
 
  <HangImage imageNumber={attempts}/>

 

  {/* palabra oculta */}
   <h3>{hiddenWord}</h3>
  
   {/* contador de intentos*/}

  
   <h3>Intentos: {attempts} </h3>


  {/* mensaje si perdió */}
  {
    (lose) ? 
    <h2> ¡Lo siento, perdiste ! La palabra es: {word}</h2>
    : ''

  }

  {/* mensaje si ganó */}
  {
    (won) ? 
    <h2>¡Felicidades,usted ganó!</h2>
    : ''

  }

   {/* botones de letra */}
   {
   letters.map((letter) => (

    <button 
    onClick={()=> checkLetter(letter)} 
    key={letter} > 
    {letter}</button>
    ) )
  }
   

   {/* <br />
   <br /> */}
   <button className=" btn_button" onClick={newGame}>¿Nuevo Juego?</button>
  </div>
)
  
}

export default App ;
