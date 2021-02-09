import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios'

export default function News(){
    const [results, setResults] = useState([])
    const [search, setSearch] = useState("")
    const searchInputRef=useRef()

    useEffect(() => {
        getResults()
        return () => {
            
        }
    }, [search])

    const getResults=async()=>{
        const response=await axios.get(`http://hn.algolia.com/api/v1/search?=${search}`)
        
        setResults(response.data.hits)
    }
   
    const handleSubmit=event=>{
        event.preventDefault()
        getResults()
    }
    const clearResults=event=>{
        event.preventDefault()
        setSearch("")
        searchInputRef.current.focus()
    }
    return(
        <>
        <div>News</div>
        <form onSubmit={handleSubmit}>
        <input ref={searchInputRef} type="text" placeholder="search" value={search} onChange={event=>setSearch(event.target.value)}/>
        <button type="button" >
            Search
        </button>
        <button type="button" onClick={clearResults}>
            clear
        </button>
        <ul>
        {results.map(result=>(
            <li key={result.objectID}>
                <a href={result.url}>{result.title}</a>
            </li>
        ))}
        </ul>
        </form>
        <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
      <h1 className="text-2xl text-blue-700 leading-tight">
        Tailwind and Create React App
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>
    </div>
  </div>
        </>
        
    )
}