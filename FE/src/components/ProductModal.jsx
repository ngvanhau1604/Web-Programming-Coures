export const ProductModal = ({ showModal, setShowModal, formData, handleFormChange, handleSubmitForm, loading }) => {
    if (!showModal) return null

    return (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>➕ Add New Product</h2>
                    <button
                        className="modal-close"
                        onClick={() => setShowModal(false)}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmitForm} className="modal-form">
                    <div className="form-group">
                        <label>Product Name *</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="e.g., Laptop Dell"
                            value={formData.name}
                            onChange={handleFormChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description *</label>
                        <textarea
                            name="desc"
                            placeholder="e.g., High-quality gaming laptop"
                            value={formData.desc}
                            onChange={handleFormChange}
                            rows="4"
                        />
                    </div>

                    <div className="form-group">
                        <label>Price (VND) *</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="e.g., 15000000"
                            value={formData.price}
                            onChange={handleFormChange}
                            min="0"
                        />
                    </div>

                    <div className="modal-buttons">
                        <button
                            type="button"
                            className="btn-cancel"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={loading}
                        >
                            {loading ? 'Adding...' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
