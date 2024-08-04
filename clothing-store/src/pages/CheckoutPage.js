import React, { useState, useContext } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import products from '../products';
import { CartContext } from '../cartContext';

export default function Checkout() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        city: '',
        address: '',
        phone: '',
        email: '',
        additionalInfo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['firstName', 'lastName', 'city', 'address', 'phone', 'email'];
        const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

        if (isFormValid) {
            navigate('/completed');
        } else {
            alert('Please fill in all required fields.');
        }
    };

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
                            <MDBTypography tag="h5" className="mb-0">Billing details</MDBTypography>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <form onSubmit={handleSubmit}>
                                <MDBRow className="mb-4">
                                    <MDBCol>
                                        <MDBInput 
                                            label='First name' 
                                            type='text' 
                                            name='firstName'
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput 
                                            label='Last name' 
                                            type='text' 
                                            name='lastName'
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput 
                                    label='City' 
                                    type='text' 
                                    className="mb-4" 
                                    name='city'
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                                <MDBInput 
                                    label='Complete Address' 
                                    type='text' 
                                    className="mb-4" 
                                    name='address'
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                                <MDBInput 
                                    label='Phone' 
                                    type='tel' 
                                    className="mb-4" 
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                                <MDBInput 
                                    label='Email' 
                                    type='email' 
                                    className="mb-4" 
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <MDBTextArea 
                                    label='Additional information' 
                                    rows={4} 
                                    className="mb-4" 
                                    name='additionalInfo'
                                    value={formData.additionalInfo}
                                    onChange={handleInputChange}
                                />

                                <MDBBtn type='submit' className='bg-dark' size="lg" block>
                                    Make purchase
                                </MDBBtn>
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
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
}