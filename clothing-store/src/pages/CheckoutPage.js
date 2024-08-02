import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import products from '../products';
import { CartContext } from '../cartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const { cart } = React.useContext(CartContext);

    const total = Object.keys(cart).reduce((acc, productId) => {
        if (productId === 'count') return acc;
        const product = products.find(product => product.id == productId);
        return acc + product.price * cart[productId];
    }, 0);

    return (
        <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
            <MDBRow>
                <MDBCol md="8" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <MDBTypography tag="h5" className="mb-0">Biling details</MDBTypography>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <form>
                                <MDBRow className="mb-4">
                                    <MDBCol>
                                        <MDBInput label='First name' type='text' />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput label='Last name' type='text' />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput label='Company name' type='text' className="mb-4" />
                                <MDBInput label='Address' type='text' className="mb-4" />
                                <MDBInput label='Email' type='text' className="mb-4" />
                                <MDBInput label='Phone' type='text' className="mb-4" />
                                <MDBTextArea label='Additional information' rows={4} className="mb-4" />

                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <MDBTypography tag="h5" className="mb-0">Summary</MDBTypography>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Products
                                    <span>Rs. {total}</span>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
                                    Shipping
                                    <span>{total < 2500 ? "Rs. 250" : "FREE"}</span>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Total amount</strong>
                                    </div>
                                    <span><strong>{total < 2500 ? total + 250 : total}</strong></span>
                                </MDBListGroupItem>
                            </MDBListGroup>

                            <Link to='/completed'>
                                <MDBBtn className='bg-dark' size="lg" block>
                                    Make purchase
                                </MDBBtn>
                            </Link>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div >
    );
}