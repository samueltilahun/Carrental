import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarDetails from '../pages/CarDetails'
import CarLIsting from '../pages/CarLIsting'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import NotFound from '../pages/NotFound'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/Home'/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/cars' element={<CarLIsting/>} />
    <Route path='/cars/:slug' element={<CarDetails/>} />
    <Route path='/blogs' element={<Blog/>} />
    <Route path='/blogs/:slug' element={<BlogDetails/>} />
    <Route path='/*' element={<NotFound/>} />
  </Routes>
}

export default Routers