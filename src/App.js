
export default function App() {

  const info = [
    { name: "Nguyễn Bá Thế", age: 21 , hobby: "Tập gym" , profestion: "Lập trình viên" },
  ]

  return (
    <div className="App">
      {info.map((item, index) => (
        <div key={index}>
          <h1>Họ và tên: {item.name}</h1>
          <h2>Tuổi: {item.age}</h2>
          <h2>Sở thích: {item.hobby}</h2>
          <h2>Nghề nghiệp: {item.profestion}</h2>
        </div>
      ))}
    </div>
  );
}

