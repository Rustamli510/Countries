import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ModalContent, Button, InputGroup, InputGroupText, Input } from "reactstrap";


function Country() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(8);
  const [input, setInput] = useState("")
  const [select, setSelect] = useState("")
  const region = [
    "Europe",
    "Asia",
    "Americas",
    "Antarctic",
    "Africa",
    "Oceania"
  ]

  useEffect(() => {
    flag();
  }, []);

  function flag() {
    axios.get(`https://restcountries.com/v3.1/all`).then(res => {
      setData(res.data);
      console.log(res.data);
    });
  }

  const handleIncrease = () => {
    setNum(num + 8)
  }

  return (
    <div>
      <Container>
        <Row>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', alignItems: 'center' }}>
            <input style={{ border: '2px solid tomato', borderRadius: '5px' }} type="text" onChange={(e) => setInput(e.target.value)} />
            <select style={{ border: 'none', border: '2px solid tomato', borderRadius: '5px' }} onChange={(e) => setSelect(e.target.value)}>
              <option>All countries</option>
              {region.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {data
            .filter((item) =>
              select === "All countries" || select === ""
              ? {item}
              : item.region === select
            )
            .filter(item => (item.name.common.toLowerCase().includes(input.toLowerCase())))
            .slice(0, num).map((item, index) => (
              <Col lg="3" key={index}>
                <div style={{ marginTop: '50px', border: '1px solid black', borderRadius: '5px', boxShadow: '0 0 15px 1% tomato' }}>
                  <Link to={`/${item.ccn3}`}><img src={item.flags.svg} alt="" width='100%' /></Link>
                  <p style={{textAlign:'center', fontSize:'20px', marginTop:'10px', fontWeight:'900px'}}>{item.name.common}</p>
                </div>
              </Col>

            ))}
          {data.length < data.length && (
            <button
              style={{ width: '100px', backgroundColor: 'yellow', border: 'none', borderRadius: '8px', marginTop: '10px', margin: '0 auto'  }}>
              Click
            </button>
          )}
        </Row>
        <Button onClick={handleIncrease} style={{ marginLeft: '500px' }}>Click</Button>
      </Container>
    </div>
  );
}

export default Country;