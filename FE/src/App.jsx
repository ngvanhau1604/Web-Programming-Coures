import { useState, useEffect } from 'react'
import { productService } from './productService' // Import service để gọi API
import './App.css' // Import file CSS
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import { Cart, About, Contact } from './Nav'
import { GetMail, GetPhone, GetNote } from './Contact'

// Tạo sẵn mảng 10 sản phẩm mẫu
const allProducts = [
  { id: 1, name: 'Áo Thun Basic', desc: 'Chất liệu cotton 100% thoáng mát', price: '120.000đ' },
  { id: 2, name: 'Quần Jean Nam', desc: 'Form chuẩn, co giãn tốt', price: '250.000đ' },
  { id: 3, name: 'Giày Thể Thao', desc: 'Nhẹ nhàng, êm chân đi cả ngày', price: '350.000đ' },
  { id: 4, name: 'Balo Laptop', desc: 'Chống nước, nhiều ngăn tiện lợi', price: '199.000đ' },
  { id: 5, name: 'Mũ Lưỡi Trai', desc: 'Phong cách năng động, trẻ trung', price: '85.000đ' },
  { id: 6, name: 'Kính Râm Thời Trang', desc: 'Chống tia UV bảo vệ mắt', price: '150.000đ' },
  { id: 7, name: 'Đồng Hồ Đeo Tay', desc: 'Thiết kế tối giản, sang trọng', price: '450.000đ' },
  { id: 8, name: 'Tai Nghe Bluetooth', desc: 'Pin trâu, âm thanh sống động', price: '290.000đ' },
  { id: 9, name: 'Áo Khoác Gió', desc: 'Chống thấm nước, cản gió tốt', price: '220.000đ' },
  { id: 10, name: 'Thắt Lưng Da', desc: 'Da bò thật 100%, bền bỉ', price: '180.000đ' },
  { id: 11, name: 'Ví Da Nam', desc: 'Thiết kế nhỏ gọn, nhiều ngăn', price: '130.000đ' },
  { id: 12, name: 'Áo Sơ Mi Công Sở', desc: 'Vải mềm mại, thoáng khí', price: '200.000đ' },
]



function App() {

  useEffect(() => { loadProducts() }, []);

  const loadProducts = async () => {
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
    }
  };

  const handleAddProduct = async () => {
    const newProduct = { name: "Bàn phím cơ", desc: "Bàn phím cơ chất lượng cao", price: "500.000đ" };
    await productService.create(newProduct);
    loadProducts(); // Load lại danh sách sau khi thêm
  };

  const [cartItems, setCartItems] = useState([])

  // Biến lưu số cột hiện tại (2 hoặc 3)
  const [columnCount, setColumnCount] = useState(3)

  const updateColumnCount = () => {
    if (window.innerWidth >= 1200) {
      setColumnCount(3); // Màn hình lớn hiện 3 cột
    } else {
      setColumnCount(2); // Màn hình nhỏ hiện 2 cột
    }
  }

  // Bắt đầu hiển thị 4 sản phẩm
  const [visibleCount, setVisibleCount] = useState(columnCount * 2)

  useEffect(() => {
    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, [])

  const handleShowMore = () => {
    // Thay vì cộng 2 hay 3 cố định, ta cộng theo columnCount
    setVisibleCount(prev => prev + columnCount);
  }

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product])
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <BrowserRouter>
      <header className="header">
        <div className="logo">
          <h1>e-commerce</h1>
          <p>Welcome to our e-commerce site!</p>
        </div>
        <nav className="nav-menu">
          <ul>
            {/* Sử dụng thẻ Link để không bị reload trang */}
            <li><Link to="/">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>

        <Route path="/" element={
          <main className="main-content">
            <h2 className="section-title">Featured Products</h2>
            <div className="product-grid">
              {allProducts.slice(0, visibleCount).map((product) => (
                <div key={product.id} className="product-item">
                  <div className="product-img-placeholder">Ảnh {product.id}</div>
                  <h3>{product.name}</h3>
                  <p className="desc">{product.desc}</p>
                  <p className="price">{product.price}</p>
                  <button className="btn-buy" onClick={() => addToCart(product)}>Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {visibleCount < allProducts.length && (
              <div className="load-more-container">
                <button className="btn-load-more" onClick={handleShowMore}>
                  Show More
                </button>
              </div>
            )}
          </main>
        } />

        {/* Các trang khác */}
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/email" element={<GetMail />} />
        <Route path="/contact/phone" element={<GetPhone />} />
        <Route path="/contact/note" element={<GetNote />} />
      </Routes>

      <footer className="footer">
        <h2>Contact Me</h2>
        <p>This site was created by Hau and Gemini</p>
        <p>Email: n23dccn018@students.ptithcm.edu.vn</p>
        <p>Phone: 0358749165</p>
        <p>Ai tên Nam thì đẹp trai</p>
      </footer>
    </BrowserRouter>
  )
}

export default App