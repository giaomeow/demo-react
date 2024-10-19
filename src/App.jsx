// import Header from "./components/Header";
import hinhAnhDongHo from "./assets/redmi-watch-3.jpg";
import Button from "./components/Button";
import DemoRender from "./components/DemoRender/DemoRender";
import Header from "./components/Header";
function App() {
  return (
    <>
      <h1 className="text-red-500">Hello Tailwind</h1>
      <DemoRender />
      {/* <Header />
      <Button />
      {/* Cách 1 */}
      {/* <img
        src="./public/img-1.jpg"
        alt=""
        style={{
          border: "1px solid red ",
          padding: "30px 40px",
          width: 400,
        }}
      /> */}
      {/* Cách 2 */}
      {/* <img src={hinhAnhDongHo} alt="" /> */}
    </>
  );
}

export default App;
