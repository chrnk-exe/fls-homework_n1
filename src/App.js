import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import MainContainer from './components/MainContainer';
import isFavor from './images/filled.svg'
import unFavor from './images/empty.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addWord, deleteWord, setWords } from './components/store/favoriteReducer'
import { setData } from './components/store/infoReducer';
import axios from 'axios';

const storage = window.localStorage

function App() {
  const [word, setWord] = useState('')
  const [favorite, setFavorite] = useState(false)
  const dispatch = useDispatch()

  const favoriteWords = useSelector(state => state.favorits.favoriteWords)

  useEffect(() => {
    dispatch(setWords(JSON.parse(storage.getItem('favoriteWords'))))
  }, [dispatch])

  const wordHandler = (arg) => {
    let currentWord = arg ? arg : word
    axios({
      url: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + currentWord,
      method: "GET",
    })
    .then(res => {
      if(res.status === 200){
        dispatch(setData(res.data[0]))
      }
    })
    .catch(error => {alert('Word not found'); console.log(error)})
  }

  const favoriteHandler = () => {
    if(favoriteWords.indexOf(word) === -1){
      dispatch(addWord(word))
      storage.setItem('favoriteWords', JSON.stringify([...favoriteWords, word]))
      setFavorite(true)
    } else {
      dispatch(deleteWord(word))
      storage.setItem('favoriteWords', JSON.stringify(favoriteWords.filter(item => item !== word)))
      setFavorite(false)
    }
  }

  const inputHandler = e => {
    setWord(e.target.value)
    setFavorite(favoriteWords.indexOf(e.target.value) !== -1)
  }

  const inputFromFavoriteHandler = (word) => {
    setWord(word)
    wordHandler(word)
  }

  const onEnterPress = (e) => {
    if(e.code === 'Enter'){
      wordHandler()
    }
  }
  return (
    <div className={classes.App}>
      <div className={classes.main}>
        <div className={classes.wordContainer}>
          <h2>Type your word here and i'll tell you about it!</h2>
          <header className={classes.inputContainer}>
            <input type='text' placeholder='type your word here!' className={classes.myPerfectInput} value={word} onChange={inputHandler} onKeyDown={onEnterPress}/>
            <button onClick={() => wordHandler(word)} className={classes.myButton}>Check!</button>
            <span style={{cursor: 'pointer'}} onClick={favoriteHandler}><img height={32} src={favorite ? isFavor : unFavor} alt=''/></span>
          </header>
        </div>
        <MainContainer inputWord={word} favoriteHandler={inputFromFavoriteHandler} setFavorite={setFavorite}/>
      </div>
    </div>
  );
}

export default App;
