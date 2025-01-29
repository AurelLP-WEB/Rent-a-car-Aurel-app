import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase'; // Importă db din firebase.js
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'; // Importă funcțiile necesare din Firestore
import '../styles/product-details.css';
import ProductCard from '../components/ProductCard';
import Helmet from '../components/Helmet';

import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Obține detaliile produsului
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          setError('Product not found');
        }

        // Obține produsele conexe (primele 4 produse)
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productList = querySnapshot.docs.map((doc) => doc.data());
        setRelatedProducts(productList.slice(0, 4));

        setIsPending(false);
      } catch (err) {
        setError('Error fetching product details');
        setIsPending(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const addToCart = () => {
    if (product) {
      dispatch(
        cartActions.addItem({
          id,
          title: product.title,
          price: product.price,
          imgUrl: product.imgUrl,
        })
      );
    }
  };

  if (isPending) {
    return <p className="text-center">Loading......</p>;
  }

  if (error) {
    return <h6 className="text-center">{error}</h6>;
  }

  return (
    <Helmet title="Product-Details">
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img src={product.imgUrl} alt={product.title} className="w-100" />
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="product__details mt-5">
                <h4>{product.title}</h4>
                <p className="section__description">{product.description}</p>
                <h4 className="section__subtitle d-flex gap-2">
                  <h6 className="fs-6">Price:</h6>${product.price}
                </h4>

                <button className="btn px-4 mt-5" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </Col>
            <Col lg="12" className="text-center related__products">
              <h2 className="section__title">Related Products</h2>
            </Col>
            {relatedProducts.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
