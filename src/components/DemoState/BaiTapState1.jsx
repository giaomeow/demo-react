import { useState } from "react";

const BaiTapState1 = () => {
  let styleBtn = "py-2 px-5 text-white rounded";
  let [fontSize, setFontSize] = useState(16);
  // 16px cứ mỗi lần click, giá trị fs của h2 tăng thêm 2 -> 4px tuỳ thích
  // giảm đi 2 -> 4px tuỳ thích
  function handleSize(size) {
    setFontSize(fontSize + size);
  }
  return (
    <div>
      <h2 className={`mt-5`} style={{ fontSize }}>
        Thực hiện sử dụng và tạo state để giúp việc tăng giảm font size cho nội
        dung đang có của thẻ h2
      </h2>
      <button
        className={`${styleBtn} bg-black`}
        onClick={() => {
          handleSize(4);
        }}
      >
        Tăng fs
      </button>
      <button
        className={`${styleBtn} bg-red-500`}
        onClick={() => {
          handleSize(-4);
        }}
      >
        Giảm fs
      </button>
    </div>
  );
};

export default BaiTapState1;
