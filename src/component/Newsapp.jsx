import React, { useEffect, useState } from 'react'
import Card from './Cards'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)

    const API_KEY = "66c9ffc6ee8d41b8b3376696492b60f2";


    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0, 10)
        setNewsData(dt)

    }

    useEffect(() => {
        getData()
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                
                
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Update with TrendyNews</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
                <button onClick={userInput} value="eduction">Eduction</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : null}

            </div>
        </>
    )
}

export default Newsapp