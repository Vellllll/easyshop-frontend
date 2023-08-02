import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Purchase(){
    const [ data, setData ] = useState({
        purchase: "",
        divLoader: "",
        mainDiv: "d-none",
    });

    useEffect(() => {
        let siteInfoPurchase = sessionStorage.getItem("getSiteInfo");

        if(siteInfoPurchase == null){
            axios.get('http://127.0.0.1:8000/api/get-site-info').then(function(response){
                if(response.status == 200){
                    let purchaseData = response.data[0]['purchase_guide'];
                    setData(() => ({
                        purchase: purchaseData,
                        divLoader: "d-none",
                        mainDiv: ""
                    }));

                    sessionStorage.setItem("siteInfoPurchase", purchaseData);
                } else {
                    toast.error("Something went wrong!");
                }
            }).catch(function(error){
                toast.error("Something went wrong!");
            })
        } else {
            setData(() => ({
                purchase: siteInfoPurchase,
            }));
        }

    })

    return (
        <Container>
            <div className={ data.mainDiv }></div>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <h4 className="section-title-login">Purchase Page</h4>
                    <p className="section-title-contact">
                        { data.purchase }
                    </p>
                </Col>
            </Row>
            <ToastContainer/>
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

export default Purchase;
