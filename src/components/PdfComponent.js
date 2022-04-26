import React,{useState,useEffect} from 'react';
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';
import axios from 'axios';
import './Ticket.css';
const thStyle = {
    fontFamily: "Anton",
    fontWeight: "normal",
    fontStyle: "normal"
};


function PdfComponent(){
  const [data, setData] = useState();
  //const history = useHistory();
  
  useEffect(() => {
    axios.get('http://localhost:8080/getTicketDetails',{ params:{userId:5} })
    .then(res => {
        setData(res.data)
      })
      .catch(error => console.log(error))
  },[])

  return (
    <div>
      Booked Tickets
      {data&&data.map((item)=>{
        return(
        <div className="row">
          <article className="card fl-left">
            <section className="date">
              <time datetime={"23th feb"}>
                <span>{item.date}</span>
                {/* <span>April</span> */}
              </time>
            </section>
            <section className="card-cont">
              <small>{item.eventName}</small>
              {/* <h3>music kaboom festivel</h3> */}
              <div className="even-date">
                <i className="fa fa-calendar"></i>
                <time>
                  <span>{item.eventDescription}</span>
                  <span>{item.time}</span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker"></i>
                <p>{item.eventLocation}</p>
              </div>
              <a>Registered</a>
            </section>
          </article>
          </div>
        )
      })}
    </div>
  );
}
export default PdfComponent;