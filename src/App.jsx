import Nav from './Components/Nav'
import MainSection from './sections/MainSection'
import Products from './sections/Products'
import Footer from './sections/Footer'

function App() {
  return (
    <main className='relative '>
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b ">
        <MainSection/>
      </section>

      <section className='padding'>
        <Products/>
      </section>

      <section className=' bg-black  padding-x padding-t pt-8  pb-8 '>
        <Footer/>
      </section>
    </main>
  )
}

export default App
