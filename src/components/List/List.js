import React from 'react'
import ListItem from './ListItem/ListItem' //importujemy komponent prywatny
import styles from './List.module.scss' //import styles, tak wygląda dla scss modules
/* 
1. Pobieramy sobie dane z twitterAcounts.js
2. ListWrapper to rodzic komponentu ListItem
3. ListWrapper iteruje sobie po danych przy użyciu map i renderuje poszczególne elementy użwając ListItem
*/





const List = ({items}) => ( //wyciągamy propsy przy użyciu destrukturyzacji (es6), żeby nie pisać props.items itd
    <>
    {items.length ? ( //renderowanie warunkowe, jeśli ma długość to renderujemy jedno, jeśli nie to drugie
        <ul className={styles.wrapper}>
          {items.map(item => ( //używamy tego map, żeby nie powtarzać ciagle tego samego
          //iterujemy po całej tablicy , mapujemy te elementy i renderujemy je
            //wyciagamy cały obiekt, który bedzię pod "item"
            <ListItem {...item} key={item.title}/>
            //używamy spread, żeby rozsmarować ten obiekt item, czyli będą to name description itd jako propsy
            //dodajemy unikalny klucz, żeby react nie wyświetlał warninga
          ))}
        </ul>  
    ) : (
      <h1 class={styles.noItems}>There's nothing here yet, please add some items! ❤️</h1>
    )}
    </>
  )


export default List





/* 11111
const ListWrapper = () => (
    <ul className = "ListWrapper__wrapper"> 
      <ListItem  
            name={twitterAccounts[0].name}
            description={twitterAccounts[0].description}
            image={twitterAccounts[0].image}
            link={twitterAccounts[0].twitterLink}
        /> 
    </ul>
)*/

/*2222
const ListWrapper = () => (
       <ul className = "ListWrapper__wrapper"> 
       {twitterAccounts.map((item) => ( //używamy tego map, żeby nie powtarzać ciagle tego samego
           //iterujemy po całej tablicy twitterAccounts, mapujemy te elementy i renderujemy je
           <ListItem  /*dodajemy propsy, takjakby wywołujemy ten element niższy z argumentami, które będą dostępne pod props.cośtam*/
           /*
           name={item.name}
           description={item.description}
           image={item.image}
           link={item.twitterLink}
           /> 
       ))}
   
   </ul>
)*/

/*33333333333
const ListWrapper = () => (
    <ul className = "ListWrapper__wrapper"> 
        {twitterAccounts.map(({name, description, image, twitterLink}) => ( //używamy tego map, żeby nie powtarzać ciagle tego samego
            //iterujemy po całej tablicy twitterAccounts, mapujemy te elementy i renderujemy je
            //używamy destrukturyzacji (es6)
            <ListItem  /*dodajemy propsy, takjakby wywołujemy ten element niższy z argumentami, które będą dostępne pod props.cośtam*//*
            name={name} 
            description={description}
            image={image}
            link={twitterLink}
            /> 
        ))}
    
    </ul>
) */