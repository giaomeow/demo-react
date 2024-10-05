import React, { useState } from "react";

const BaiTapState2 = () => {
  let arrDienThoai = [
    {
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-xam-thumbn-600x600.jpg",
      ten: "SS 24 Ultra",
      giaTien: 230000,
      cameraTruoc: "24MP",
      boNho: "1TB",
    },
    {
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-den-thumb-600x600.jpg",
      ten: "IP 14 promax",
      giaTien: 330000,
      cameraTruoc: "54MP",
      boNho: "2TB",
    },
    {
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/329938/xiaomi-14t-grey-thumb-600x600.jpg",
      ten: "Xiaomi Redme Note14",
      giaTien: 450000,
      cameraTruoc: "24MP",
      boNho: "1.5TB",
    },
  ];

  const [chiTiet, setChiTiet] = useState(arrDienThoai[0]);
  //   Tạo ra 1 state giúp quản lí dữ liệu thông tin chi tiết các sản phẩm điện thoại
  // Dữ liệu mặc định hiển thị lên sẽ là sản phẩm đầu tiên
  // Sau khi tạo state, thực hiện đưa các thôgn tin dữ liệu đang có trong state vào các thành phần jsx nằm trong duv thông tin chi tiết
  //
  return (
    <div className="container">
      <h2>Bài tập hiển thị thông tin chi tiết của sản phẩm</h2>
      <div className="flex items-center justify-between">
        {/* Hiển thị tt chi tiết sp */}
        <div className="w-3/12">
          <img src={chiTiet.hinhAnh} className=" p-5 border" />
          <p>Tên sp: {chiTiet.ten}</p>
          <p>Giá: {chiTiet.giaTien}</p>
          <p>Camera: {chiTiet.cameraTruoc}</p>
          <p>Bộ nhớ: {chiTiet.boNho}</p>
        </div>

        {/* Hiển thị danh sách sản phẩm */}
        <div className="w-8/12">
          <div className="grid grid-cols-3 gap-10">
            {arrDienThoai.map((item, index) => (
              <div className="flex flex-col items-center gap-2" key={index}>
                <img src={item.hinhAnh} alt={item.ten} className="w-full" />
                <h3>{item.ten}</h3>
                <button
                  className="px-4 py-2 bg-red-600 text-white"
                  onClick={() => {
                    setChiTiet(item);
                  }}
                >
                  Xem chi tiết
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapState2;
