import { Container, Row, Col } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import MegaMenu from "./MegaMenu";
import { useEffect, useState } from "react";
import axios from "axios";

function HomeTop(){
    const [ menu, setMenu ] = useState({
        menuData: [],
    });

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/get-category").then(response => {
            let statusCode = response.status;
            if(statusCode == 200){
                let jsonData = (response.data);
                setMenu(() => ({
                    menuData: jsonData,
                }))
            }
        }).catch(error => {

        });

    })

    return (
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={menu.menuData}/>
                </Col>
                <Col lg={9} md={9} sm={12}>
                    <HomeSlider/>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeTop;
