import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { ItemWindows } from './Components/ItemsWindows/ItemWindow'
import { Search } from './Components/Search/Search'
import { Profile } from './Components/Profile/Profile'
import { ItemDiscussWindow } from './Components/ItemsWindows/DiscussWindow/ItemDiscussWindow'
import { FranchiseWindow } from './Components/FranchiseWindow/FranchiseWindow'
import { Provider } from 'react-redux'
import { store } from './store'

import { GameWindow } from './Components/ItemsWindows/GameWindow'
import { FilmWindow } from './Components/ItemsWindows/FilmWindow'
import { BookWindow } from './Components/ItemsWindows/BookWindow'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='search' element={<Search />} />
      <Route path='profile' element={<Profile />} />
      <Route path='item/movie/:id' element={<FilmWindow />} />
      <Route path='item/anime/:id' element={<FilmWindow />} />
      <Route path='item/cartoon/:id' element={<FilmWindow />} />
      <Route path='item/animated-series/:id' element={<FilmWindow />} />
      <Route path='item/tv-series/:id' element={<FilmWindow />} />
      <Route path='item/game/:id' element={<GameWindow />} />
      <Route path='item/book/:id' element={<BookWindow />} />
      <Route path='discuss' element={<ItemDiscussWindow />} />
      <Route path='franchise' element={<FranchiseWindow />} />
    </Route>
  )
)



function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  )
}

export default App
