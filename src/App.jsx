import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import Footer from './components/Footer.jsx'
import photos from './data/photos.json'
import './App.css'

function App() {
  const [zdjecia, setZdjecia] = useState(photos)
  const [aktywnaKategoria, setAktywnaKategoria] = useState('wszystkie')

  // Filtrowanie widocznych zdjęć
  const widoczne =
    aktywnaKategoria === 'wszystkie'
      ? zdjecia
      : zdjecia.filter((z) => z.category === aktywnaKategoria)

  // Usuwanie zdjęcia po ID
  function usunZdjecie(id) {
    setZdjecia(zdjecia.filter((z) => z.id !== id))
  }

  // Dodawanie nowego zdjęcia z nowym ID
  function dodajZdjecie(nowe) {
    const noweId = zdjecia.length > 0 ? Math.max(...zdjecia.map((z) => z.id)) + 1 : 1
    setZdjecia([...zdjecia, { ...nowe, id: noweId, favorite: false }])
  }

  // Przełączanie statusu ulubionego (gwiazdka)
  function przelaczUlubione(id) {
    setZdjecia(
      zdjecia.map((z) =>
        z.id === id ? { ...z, favorite: !z.favorite } : z
      )
    )
  }

  return (
    <>
      <Navbar />
      <main className="container my-4">
        <CategoryBar
          aktywna={aktywnaKategoria}
          onWybierz={setAktywnaKategoria}
        />

        {widoczne.length === 0 && (
          <div className="alert alert-warning">
            Nie znaleziono zdjęć w tej kategorii.
          </div>
        )}

        <Gallery
          zdjecia={widoczne}
          onUsun={usunZdjecie}
          onPrzelacz={przelaczUlubione}
        />
      </main>

      <AddPhotoModal onDodaj={dodajZdjecie} />
      <FiltersOffcanvas
        aktywna={aktywnaKategoria}
        onWybierz={setAktywnaKategoria}
      />
      <Footer />
    </>
  )
}

export default App