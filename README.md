# 🍳 Ứng Dụng Web Công Thức Nấu Ăn Đơn Giản (Simple Cooking Recipe Web Application)

## 📌 Tổng Quan Dự Án

Đây là một ứng dụng web đơn giản giúp người dùng **tìm kiếm và xem công thức nấu ăn**. Người dùng có thể:

* Tìm kiếm món ăn theo **tên**
* Lọc công thức theo **vùng ẩm thực (cuisine)**
* Lọc theo **nguyên liệu (ingredients)**
* Xem chi tiết công thức bao gồm **hình ảnh, danh sách nguyên liệu và các bước nấu**

Dự án được xây dựng với mục tiêu thể hiện khả năng sử dụng **React + TailwindCSS**, tổ chức code rõ ràng và dễ mở rộng.

---

## 🛠️ Công Nghệ Sử Dụng

* **React** – Xây dựng giao diện người dùng
* **Vite** – Công cụ build nhanh và nhẹ
* **Tailwind CSS** – Styling UI
* **React Router DOM** – Điều hướng giữa các trang
* **Deployment**: Vercel

---

## ✨ Tính Năng Chính

*  Tìm kiếm công thức theo tên món ăn
*  Lọc theo nguyên liệu (ingredients)
*  Lọc theo vùng ẩm thực (cuisine)
*  Trang chi tiết công thức:

  * Hình ảnh món ăn
  * Danh sách nguyên liệu
  * Hướng dẫn nấu từng bước


---

## 📂 Cấu Trúc Thư Mục

```
src/
├── components/
│   ├── RecipeCard.jsx
│   ├── SearchBar.jsx
│   └── Filter.jsx
├── pages/
│   ├── Home.jsx
│   └── RecipeDetail.jsx
├── data/
│   └── recipes.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Logic Tìm Kiếm & Lọc

### 1️⃣ Tìm kiếm theo tên

* Người dùng nhập từ khóa
* So sánh với `recipe.title` (không phân biệt hoa thường)

### 2️⃣ Lọc theo cuisine

* Dropdown hiển thị các vùng ẩm thực duy nhất
* Chỉ hiển thị công thức thuộc cuisine đã chọn

### 3️⃣ Lọc theo ingredients

* Người dùng nhập nguyên liệu (ví dụ: `egg`, `rice`)
* Kiểm tra xem nguyên liệu có tồn tại trong mảng `ingredients` của công thức hay không

➡️ Kết quả cuối cùng là **tập giao các điều kiện** trên

---

## ▶️ Cách Chạy Dự Án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy môi trường development

```bash
npm run dev
```

Sau đó mở trình duyệt tại:

```
http://localhost:5173
```

---
## 🎯 Mục tiêu của project

* Project này được thực hiện nhằm:

* Thể hiện khả năng sử dụng React + TailwindCSS

* Xây dựng UI component rõ ràng, dễ bảo trì

* Áp dụng routing, state management cơ bản

* Hoàn thành đúng yêu cầu của một Frontend coding test

## 👤 Tác Giả

**Tuan Anh**
Frontend Developer 

---

> Đây là một dự án demo nhằm mục đích học tập và đánh giá năng lực frontend.
