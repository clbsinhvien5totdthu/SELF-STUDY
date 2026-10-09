# Sổ tay học tập

Ứng dụng web một trang giúp sinh viên quản lý việc học: thói quen (theo *Atomic Habits*), lịch học, việc theo ngày, từ vựng tiếng Anh, kho tài liệu, mục tiêu và GPA.

Không cần cài đặt hay build. Dữ liệu lưu trong `localStorage` của trình duyệt (khóa `sotay1`).

## Cấu trúc

```
index.html      giao diện chính
css/style.css   toàn bộ kiểu dáng (có chế độ tối tự động)
js/app.js       dữ liệu mẫu, các màn hình và xử lý sự kiện
```

## Chạy thử

Mở `index.html` bằng trình duyệt, hoặc chạy `python3 -m http.server` trong thư mục này.

## Đăng lên GitHub Pages

1. Đẩy toàn bộ thư mục lên một repository.
2. Vào **Settings → Pages**, chọn nhánh `main` và thư mục `/ (root)`.
3. Sau ít phút trang sẽ có tại `https://<tên-người-dùng>.github.io/<tên-repo>/`.

Lưu ý: dữ liệu lưu theo từng trình duyệt và từng địa chỉ trang, nên đổi sang địa chỉ mới thì sổ tay sẽ trống.
