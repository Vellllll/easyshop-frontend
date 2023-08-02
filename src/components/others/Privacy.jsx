import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Privacy(){
    const [ data, setData ] = useState({
        privacy: "",
        divLoader: "",
        mainDiv: "d-none",
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get-site-info').then(function(response){
            if(response.status == 200){
                let privacyData = response.data[0]['privacy'];
                setData(() => ({
                    privacy: privacyData,
                    divLoader: "d-none",
                    mainDiv: "",
                }));
            }
        })
    })

    return (
        <Container>
            <div className={ data.mainDiv }>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <h4 className="section-title-login">Privacy Page</h4>
                        <p className="section-title-contact">
                            { data.privacy }
                        </p>
                    </Col>
                </Row>
            </div>
            <div className={ data.divLoader }>
                <div className="ph-item">
                    <div className="ph-col-12">
                        <div className="ph-row">
                            <div className="ph-col-6 big"></div>
                            <div className="ph-col-4 empty big"></div>
                            <div className="ph-col-2 big"></div>
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-6"></div>
                            <div className="ph-col-6 empty"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Privacy;
