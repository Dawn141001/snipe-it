<h1 align="center">
  <a href="https://reactnative.dev/">
    Snipe It
  </a>
</h1>

<a href="https://dbdiagram.io/d/Snipe-IT-65c32d2eac844320ae9f907b">
    Link db
</a>

## 📋 Tác nhân

- Nhà cung cấp - Suplier
- Quản trị viên - Admin
- Giám đốc - SuperAdmin
- Người dùng - User

## 🎉 Luồng

Quản trị viên lập các thiết bị cần mua (status - Pending) -> Gửi Giám đốc -> Giám đốc phê duyệt 
-> Gửi nhà cung cấp -> Cập nhật trạng thái Archived

Checkout (assign) cho User - Deployedable

Tài sản(Asset) sẽ có giá mua, ngày mua và thời hạn để tính khấu hao theo đường thẳng (Hardware - 5 năm; Accessory - 2 năm). 

Admin xuống kiểm tra định kỳ Asset nếu thấy cần maintenance thì lập request maintenances - update Asset -> Maintenancing (start_date, complete_date, maintenance_cost). 

## 🎉 Web

- Tạo, phân quyền User, Quản lý User
- Quản lý assets
- Quản lý maintenances
- Tạo mã vạch

## 🎉 App
- Quét mã vạch, xem thông tin asset
- Tạo request maintenance
