
import './Student.css'
function Student(props)
{
    console.log(props)
    return(
        <div className="Student">
            <h1>Hello {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h2>Address: {props.address}</h2>
        </div>
    )
}
export default Student;