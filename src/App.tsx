import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Movies } from './presentation/Movies'

export const App = () => {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Movies />
      </main>
      <Footer />
    </>
  )
}
