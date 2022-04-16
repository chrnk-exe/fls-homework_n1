import React from 'react'
import classes from './MeaningItem.module.css'

const MeaningItem = ({info}) => {

  return (
    <div className={classes.MeaningItem}>
        <p>Part of Speech: {info.partOfSpeech}</p>
        {info.antonyms.length 
        ?<p>Antonyms: {info.antonyms.join(', ')}</p>
        : null}
        {info.synonyms.length
        ?<p>Synonyms: {info.synonyms.join(', ')}</p>
        : null}
        {info.definitions.length 
        ? <div className={classes.definitions}>
            {info.definitions.map((item, index) => <DefinitionItem key={index} index={index} info={item}/>)}
        </div>
        : null}
    </div>
  )
}

export default MeaningItem

const DefinitionItem = ({info, index}) => {
    return (
        <div className={classes.DefinitionItem}>
            <p>Definition {index + 1}: {info.definition}</p>
            {info.antonyms.length
            ? <p>Antonyms: {info.antonyms.join(', ')}</p>
            : null}
            {info.synonyms.length
            ?<p>Synonyms: {info.synonyms.join(', ')}</p>
            : null}
            {info.example 
            ? <p>Example: {info.example}</p>
            : null}
        </div>
    )
}