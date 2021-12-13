import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useState } from "react";

const Main = () => {
    const [hasBeenSubmittedDummy, setHasBeenSubmittedDummy] = useState(false);
    return (
        <>
            <ProductForm
                setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
                hasBeenSubmittedDummy={hasBeenSubmittedDummy}
            />
            <hr />
            <ProductList hasBeenSubmittedDummy={hasBeenSubmittedDummy} />
        </>
    );
};

export default Main;