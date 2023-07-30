
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { RiDeleteBin5Fill } from 'react-icons/ri';
const AppointmentList = ({apps, setApps}) => {
  const handelDelete = (id) =>{
    setApps(apps.filter((item) => item.id !== id))
  }

  const handleDoubleClick = (id) => {
    setApps(apps.map((item)=>(item.id ==id ? {...item, consulted: !item.consulted} : item)))
  }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.length < 1 && <img src = "./img/appointment.jpg"  width="70%"/>}
      {apps.map(({id,patient, consulted, doctor, day}) => (
      <div key={id} className={consulted ? "appointments consulted" : "appointments"} onDoubleClick={() => handleDoubleClick(id)}>
        <Row>
          <Col xs = {12} sm={12} md = {6}>
          <h4>{patient}</h4>
          <h4>{doctor}</h4>
          </Col>
          <Col>
          <h5>{day}</h5></Col>
          <Col>
          <Col type = "button" className="text-end"><RiDeleteBin5Fill className="text-danger fs-5" onClick={() => handelDelete(id)}/></Col>
          </Col>
        
          
        </Row>
        </div>
        
      ))}
      

     
    </Container>
  )
}

export default AppointmentList
