import axios from "axios";

/**
 * ========================================
 * PRODUCT SERVICE - AXIOS API CALLS
 * ========================================
 *
 * Base URL: http://localhost:5146/api/product
 * Các method: GET, POST, PUT, DELETE
 *
 * ⚠️ QUAN TRỌNG: Port phải khớp với Backend!
 * Backend chạy tại: http://localhost:5146
 */

// Đây chính là URL Backend đang lắng nghe
const API_URL = "http://localhost:5146/api/product";

export const productService = {
  // ✅ GET - Lấy tất cả sản phẩm
  // Gọi: GET /api/product
  getAll: async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("GET tất cả sản phẩm:", response.data);
      return response.data;
    } catch (error) {
      console.error("Lỗi GET:", error.response?.data || error.message);
      throw error;
    }
  },

  // ✅ POST - Thêm sản phẩm mới
  // Gọi: POST /api/product
  // Gửi: { Name: "...", Desc: "...", Price: "..." }
  create: async (product) => {
    try {
      const response = await axios.post(API_URL, product);
      console.log("POST sản phẩm mới:", response.data);
      return response.data;
    } catch (error) {
      console.error("Lỗi POST:", error.response?.data || error.message);
      throw error;
    }
  },

  // ✅ PUT - Cập nhật sản phẩm
  // Gọi: PUT /api/product/{id}
  // Gửi: { Id: id, Name: "...", Desc: "...", Price: "..." }
  update: async (id, product) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, product);
      console.log("PUT cập nhật sản phẩm:", response.data);
      return response.data;
    } catch (error) {
      console.error("Lỗi PUT:", error.response?.data || error.message);
      throw error;
    }
  },

  // ✅ DELETE - Xóa sản phẩm
  // Gọi: DELETE /api/product/{id}
  delete: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      console.log("DELETE sản phẩm:", response.data);
      return response.data;
    } catch (error) {
      console.error("Lỗi DELETE:", error.response?.data || error.message);
      throw error;
    }
  },
};
