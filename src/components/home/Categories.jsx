import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';

function Categories() {
  const [category, setCategory] = useState({
    categoryData: [],
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/get-category")
      .then((response) => {
        if (response.status == 200) {
          let jsonData = response.data;
          setCategory(() => ({
            categoryData: jsonData,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const categories = category.categoryData;

  const categoryView = categories.map((categories, index) => {
    return (
      <Col className="p-0" key={1} xl={2} lg={2} md={3} sm={6} xs={6}>
        <Card className="h-100 w-100 text-center">
          <Card.Body>
            <img
              className="center"
              src={categories.category_image}
              alt=""
            />
            <h5 className="category-name">{categories.category_name}</h5>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2>Categories</h2>
        <p>Some of our exclusive collections.</p>
      </div>
      <Row>
        {categoryView}
      </Row>
    </Container>
  );
}

export default Categories;
