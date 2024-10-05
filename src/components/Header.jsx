// Import giúp file này sử dụng đc code từ các file khác
import React from "react";

const Header = ({}) => {
  // Thẻ jsx giúp viết html trong js, thẻ jsx là object của react
  //   Nền màu đỏ, font-size 20, canh giữa nội dung
  return (
    <div className="bg-purple-600 text-white text-[30px] p-section-padding">
      Header
    </div>
  );
};

// Export giúp các file khác import được file này và sử dụng
export default Header;
