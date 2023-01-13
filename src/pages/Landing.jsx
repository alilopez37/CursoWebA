import Header from "../components/atoms/Header";
import StudentList from "../components/organism/StudentList";

function Landing() {
  const studentList = [
    {
      id: 1,
      name: "Nancy",
    },
    {
      id: 2,
      name: "Yahir Dev",
    },
    {
      id: 3,
      name: "Yostin Dev",
    },
    {
      id: 4,
      name: "Alan",
    },
    {
      id: 5,
      name: "Alejandro",
    },
  ];

  return (
    <>
      <Header />
      <StudentList studentList={studentList} />
    </>
  );
}
export default Landing;
