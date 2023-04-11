import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import NewTest from "./components/NewTest";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  var productInfo = "Product";
  let categoryInfo = "Category";
  return (
    <div>
      <Container>
        <Row xs="3">
          <Navi />
        </Row>
        <Row>
          

          <Col xs="3">
            <CategoryList title={categoryInfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList title = {productInfo}></ProductList>
          </Col>
        </Row>
        <Row>
          <NewTest></NewTest>
        </Row>
      </Container>
    </div>
  );
}

export default App;
