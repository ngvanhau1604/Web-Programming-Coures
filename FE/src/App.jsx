import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Cart, About, Contact } from './Nav'
import { GetMail, GetPhone, GetNote } from './Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProductList } from './components/ProductList'
import { ProductModal } from './components/ProductModal'
import { useProducts } from './hooks/useProducts'
import { useCart } from './hooks/useCart'

function App() {
  const {
    products,
    loading,
    visibleCount,
    columnCount,
    showModal,
    setShowModal,
    formData,
    handleFormChange,
    handleSubmitForm,
    handleShowMore
  } = useProducts()

  const { cartItems, addToCart } = useCart()

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <ProductList
              products={products}
              loading={loading}
              visibleCount={visibleCount}
              columnCount={columnCount}
              onShowMore={handleShowMore}
              onAddToCart={addToCart}
              onAddProductClick={() => setShowModal(true)}
            />
            <ProductModal
              showModal={showModal}
              setShowModal={setShowModal}
              formData={formData}
              handleFormChange={handleFormChange}
              handleSubmitForm={handleSubmitForm}
              loading={loading}
            />
          </>
        } />

        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/email" element={<GetMail />} />
        <Route path="/contact/phone" element={<GetPhone />} />
        <Route path="/contact/note" element={<GetNote />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App