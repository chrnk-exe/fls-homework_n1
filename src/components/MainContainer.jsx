import React from 'react'
import classes from './MainContainer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteWord } from './store/favoriteReducer'
import MeaningItem from './MeaningItem'
import PhoneticItem from './PhoneticItem'

const storage = window.localStorage

const MainContainer = ({inputWord, favoriteHandler, setFavorite}) => {
  const favoriteWords = useSelector(state => state.favorits.favoriteWords)
  const word = useSelector(state => state.info.word)
  const license = useSelector(state => state.info.license)
  const meanings = useSelector(state => state.info.meanings)
  const phonetics = useSelector(state => state.info.phonetics)
  const sources = useSelector(state => state.info.sourceUrls)
  const dispatch = useDispatch()

  const deleteHandler = (word) => {
    storage.setItem('favoriteWords', JSON.stringify(favoriteWords.filter(item => item !== word)))
    if(inputWord === word)setFavorite(false)
    dispatch(deleteWord(word))
  }

  return (
    <main>
      <section>
        {!word
        ? <p>Type your first word!</p>
        : <div className={classes.resultContainer}>
            <h1>Word: {word}</h1>
            <div className={classes.wordMeanings}>
              <h3>Meanings</h3>
              {meanings.map((meaningItem, index) => <MeaningItem key={index} info={meaningItem}/>
                )}
              <h3>Phonetics</h3>
              {phonetics.map((phoneticItem, index) => <PhoneticItem key={index} info={phoneticItem}/>)}
              <h3>Sources</h3>
              <ul>
                {sources.map((source, index) => <li key={index}><a href={source}>{source}</a></li>)}
              </ul>
            </div>
          </div>}
          {license 
          ? <div className={classes.license}>
              <p>License: {license.name}</p>
              <a href={license.url}>{license.url}</a>
          </div>
          : null
          }
      </section>
      <section className={classes.favorite}>
        <h2>Favorite words</h2>
        <ul>
          {favoriteWords
          ? favoriteWords.map((word, index) => {
            return (
              <li key={index}>
                <button onClick={() => deleteHandler(word)} className={classes.deleteButton}/>
                <p style={{cursor: 'pointer'}} onClick={() => favoriteHandler(word)}>{index + 1}. {word}</p>
              </li>)
          })
          : <li>You have no favorite words!</li>}
        </ul>
      </section>
    </main>
  )
}

export default MainContainer