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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='search' element={<Search />} />
      <Route path='profile' element={<Profile />} />
      <Route path='item/:id' element={<ItemWindows />} />
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
