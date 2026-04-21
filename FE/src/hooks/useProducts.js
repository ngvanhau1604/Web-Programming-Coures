import { useState, useEffect } from "react";
import { productService } from "../productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [columnCount, setColumnCount] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", desc: "", price: "" });

  // Load sản phẩm từ API
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
    } finally {
      setLoading(false);
    }
  };

  // Xử lý thay đổi form
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.desc.trim() ||
      !formData.price.trim()
    ) {
      alert("❌ Vui lòng điền đầy đủ thông tin!");
      return;
    }

    try {
      setLoading(true);
      await productService.create(formData);
      setShowModal(false);
      setFormData({ name: "", desc: "", price: "" });
      await loadProducts();
      alert("✅ Thêm sản phẩm thành công!");
    } catch (error) {
      alert("❌ Lỗi: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Responsive grid
  const updateColumnCount = () => {
    if (window.innerWidth >= 1200) {
      setColumnCount(3);
    } else {
      setColumnCount(2);
    }
  };

  useEffect(() => {
    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  // Show more
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + columnCount);
  };

  return {
    products,
    loading,
    visibleCount,
    columnCount,
    showModal,
    setShowModal,
    formData,
    handleFormChange,
    handleSubmitForm,
    handleShowMore,
  };
};
