import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import TourPackages from './pages/TourPackages.jsx'
import Account from './pages/Account.jsx'
import About from './pages/About.jsx'
import Detail from './pages/Detail.jsx'
import {ApiProvider} from './context/ApiContext.jsx';
import Book from './pages/Book.jsx'
import Search from './pages/Search.jsx'
import SavedPackages from './pages/SavedPackages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ApiProvider>
      <App />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/tour-packages" element={<TourPackages/>} />
        {/* <Route path="/about" element={<About/>} /> */}
        <Route path="/account" element={<Account/>} />
        <Route path="/view-details" element={<Detail/>}/>
        <Route path="/book-package" element={<Book/>}/>
        <Route path='/search' element={<Search/>} />
        <Route path='/saved-packages' element={<SavedPackages/>} />

      </Routes>
    </ApiProvider>
  </BrowserRouter>,
)
