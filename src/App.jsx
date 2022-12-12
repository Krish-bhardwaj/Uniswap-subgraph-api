import SearchBar from './components/searchBar'
import ListView from './components/ListView'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import SearchResult from './components/SearchResult'

const Home = () => {
  return (
    <div className=''>
      <SearchBar />
      <ListView />
    </div>
  )
}

export default function App() {
  return (
    // create a router to handle the search bar and list view
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SearchResult/>} />
      </Routes>
    </Router>
  )
}
