import React from "react";
import { useParams } from "react-router-dom";

function Category() {

    const { cat } = useParams();

    return (
        <div>
            <h1>{cat}</h1>
        </div>
        
    );
}

export default Category;