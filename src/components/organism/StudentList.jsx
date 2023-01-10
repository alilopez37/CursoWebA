import Caption from "../atoms/Caption";
import Widge from "../atoms/Widge";

function StudentList({studentList}) {

    return (
        <>
            <Caption msn="Lista de alumnos del 4A"/>
            {studentList.map( (item) => (<Widge item={item}/>))}
        </>
      );
}

export default StudentList;