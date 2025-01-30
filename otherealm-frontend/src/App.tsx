import {  Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { Search } from './Components/Search/Search'
import { Profile } from './Components/Profile/Profile'
import { GameWindow } from './Components/ItemsWindows/GameWindow'
import { FilmWindow } from './Components/ItemsWindows/FilmWindow'
import { BookWindow } from './Components/ItemsWindows/BookWindow'
import { useAppDispatch } from './store/hooks'
import React from 'react'
import { fetchAuthMe } from './store/auth'
import { Welcome } from './Components/RegistrationPage/Welcome'
import { ErrorBoundary } from './Components/ErrorPage'
import { FullPost } from './Components/Posts/FullPost'
import { AddPost } from './Components/Posts/AddPost'
import { PostsFeed } from './Components/Posts/PostsFeed'
import { AddDiscuss } from './Components/ItemsWindows/DiscussWindow/AddDiscuss'
import { DiscussItem } from './Components/ItemsWindows/DiscussWindow/DiscussItem'
import { Authorize } from './Components/RegistrationPage/Authorize'
import { AdminPanel } from './Components/AdminWindow/AdminPanel'

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Welcome />} />

          <Route path='/search' element={<Search />} />

          <Route path='/profile/:nick' element={<Profile />} />

          <Route path='/item/movie/:id' element={<FilmWindow />} />
          <Route path='/item/anime/:id' element={<FilmWindow />} />
          <Route path='/item/cartoon/:id' element={<FilmWindow />} />
          <Route path='/item/animated-series/:id' element={<FilmWindow />} />
          <Route path='/item/tv-series/:id' element={<FilmWindow />} />
          <Route path='/item/game/:id' element={<GameWindow />} />
          <Route path='/item/book/:id' element={<BookWindow />} />

          <Route path='/item/movie/:id/discuss/add' element={<AddDiscuss />} />
          <Route path='/item/anime/:id/discuss/add' element={<AddDiscuss />} />
          <Route path='/item/cartoon/:id/discuss/add' element={<AddDiscuss />} />
          <Route path='/item/animated-series/:id/discuss/add' element={<AddDiscuss />} />
          <Route path='/item/tv-series/:id/discuss/add' element={<AddDiscuss />} />
          <Route path='/item/game/:id/discuss/add' element={<AddDiscuss />} />
          <Route path='/item/book/:id/discuss/add' element={<AddDiscuss />} />
          
          <Route path='/item/movie/:id/discuss/:discussId/edit' element={<AddDiscuss />} />
          <Route path='/item/anime/:id/discuss/:discussId/edit' element={<AddDiscuss />} />
          <Route path='/item/cartoon/:id/discuss/:discussId/edit' element={<AddDiscuss />} />
          <Route path='/item/animated-series/:id/discuss/:discussId/edit' element={<AddDiscuss />} />
          <Route path='/item/tv-series/:id/discuss/:discussId/edit' element={<AddDiscuss />} />
          <Route path='/item/game/:id/discuss/:discussId/edit' element={<AddDiscuss />} />
          <Route path='/item/book/:id/discuss/:discussId/edit' element={<AddDiscuss />} />

          <Route path='/discuss/:itemId/:discussId/edit' element={<AddDiscuss />} />
          
          <Route path='/item/movie/:id/discuss/:discussId' element={<DiscussItem />} />
          <Route path='/item/anime/:id/discuss/:discussId' element={<DiscussItem />} />
          <Route path='/item/cartoon/:id/discuss/:discussId' element={<DiscussItem />} />
          <Route path='/item/animated-series/:id/discuss/:discussId' element={<DiscussItem />} />
          <Route path='/item/tv-series/:id/discuss/:discussId' element={<DiscussItem />} />
          <Route path='/item/game/:id/discuss/:discussId' element={<DiscussItem />} />
          <Route path='/item/book/:id/discuss/:discussId' element={<DiscussItem />} />


          <Route path='/post/:postId' element={<FullPost />} />
          <Route path='/post/:postId/edit' element={<AddPost />} />
          <Route path='/post/add' element={<AddPost />} />

          <Route path='/feed' element={<PostsFeed />} />

          <Route path='/auth' element={<Authorize />} />
          <Route path='/error' element={<ErrorBoundary />} />

          <Route path='/admin' element={<AdminPanel/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
