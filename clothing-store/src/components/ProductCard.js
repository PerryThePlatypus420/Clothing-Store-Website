import React from "react";
import './ProductCard.css';

function ProductCard(props){
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" style={{height: "200px"}} alt="..."/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">Rs. {props.price}</h5>
                </div>
                {/* <button className="btn btn-primary">Go somewhere</button> */}
            </div>
        </div>
    );
}

export default ProductCard;