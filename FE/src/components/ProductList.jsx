export const ProductList = ({ products, loading, visibleCount, columnCount, onShowMore, onAddToCart, onAddProductClick }) => {
    return (
        <main className="main-content">
            <div className="section-header">
                <h2 className="section-title">Featured Products</h2>
                <button
                    className="btn-add-product"
                    onClick={onAddProductClick}
                >
                    ➕ Add Product
                </button>
            </div>

            <div className="product-grid">
                {products && products.length > 0 ? (
                    products.slice(0, visibleCount).map((product) => (
                        <div key={product.id} className="product-item">
                            <div className="product-img-placeholder">Ảnh {product.id}</div>
                            <h3>{product.name}</h3>
                            <p className="desc">{product.desc}</p>
                            <p className="price">{product.price}</p>
                            <button
                                className="btn-buy"
                                onClick={() => onAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="loading-message">
                        ⏳ Đang tải sản phẩm...
                    </p>
                )}
            </div>

            {products && visibleCount < products.length && (
                <div className="load-more-container">
                    <button className="btn-load-more" onClick={onShowMore}>
                        Show More
                    </button>
                </div>
            )}
        </main>
    )
}
