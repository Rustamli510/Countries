import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

function Countryin() {

    const [innnerData, setInnerData] = useState([8]);
    const params = useParams()
    const navigate = useNavigate()
    console.log(params, 'params');

    const Inner = () => {
        axios.get(`https://restcountries.com/v3.1/alpha/${params.id}`).then(res => setInnerData(res.data[0]))
    }
    console.log(innnerData);

    useEffect(() => {
        Inner();
    }, [params.id]);

    return (
        <div>
            <div>
                <Button onClick={() => { navigate('/') }} style={{ marginLeft: '50px', marginTop: '20px' }}
                    color="primary"
                >
                    Go Back
                </Button>
            </div>
            <Card style={{ width: "500px", marginLeft: '100px', marginTop: '50px' }}>
                <CardImg
                    alt="Card image cap"
                    src={innnerData?.flags?.svg}
                    top
                    width="200px"
                    height="200px"
                />
                <CardBody>
                    <CardTitle>
                        <h5>{innnerData?.name?.common}</h5>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Country region:{innnerData?.region}
                    </CardSubtitle>
                    <CardText>
                        Card subrehion: {innnerData?.subregion} <br /> Country population: {innnerData?.population}
                    </CardText>
                    {
                        innnerData.borders ? innnerData.borders.map((item, index) => <Link className='btn btn-warning me-1' to={`/${item}`} key={index}>{item}</Link>) : <h1>No borders</h1>
                    }
                    <br />
                    <br />
                    <CardText>
                        Country languages:{' '}
                        {
                            innnerData.languages ?
                                Object.values(innnerData?.languages).join(", ") : <h1>No languages</h1>

                        }
                    </CardText>
                </CardBody>
            </Card>
        </div>

    )
}

export default Countryin