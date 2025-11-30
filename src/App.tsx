import { RouterProvider } from 'react-router'
import './App.css'

import { appRouter } from './router/app.router'

export const App = () => {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}
