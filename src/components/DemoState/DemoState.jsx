import { useState } from "react";
import BaiTapState1 from "./BaiTapState1";
import BaiTapState2 from "./BaiTapState2";

const DemoState = () => {
  //Giá trị đại tiện cho state, phương thức giúp cập nhật dữ liệu từ state
  // Phương thức có quy tắc đặt tên là có chữ set đứng trước
  // useState cho phép nhập vào giá trị mặc định
  let [score, setScore] = useState(0);
  let [infoUser, setInfoUser] = useState({
    hoTen: "QG",
    lop: "BC76",
    diaChi: "Q3",
  }); //Quản lý thông tin người dùng
  function handleScore() {
    setScore(score + 1);
  }
  console.log(infoUser);
  return (
    <div className="px-5">
      <h2 className="text-4xl text-center">Bài tập Demo State trong react</h2>
      <div>
        <p>Số điểm {score}</p>
        <button
          type="button"
          className="bg-black px-5 py-2 text-white rounded"
          onClick={handleScore}
        >
          Tăng số điểm
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl">Bài tập thay đổi tên người dùng</h3>
        <input
          type="text"
          placeholder="Vui lòng nhập tên mới"
          className="border border-black rounded p-2"
          onChange={(e) => {
            setInfoUser({
              ...infoUser,
              hoTen: e.target.value,
            });
          }}
        />
        <div>
          <h4>{infoUser.hoTen}</h4>
          <p>{infoUser.lop}</p>
          <p>{infoUser.diaChi}</p>
        </div>
      </div>

      <BaiTapState1 />
      <BaiTapState2 />
    </div>
  );
};

export default DemoState;
