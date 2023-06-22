let deleteProduct = (data) => {
    return {
        type : "DELETE-PRODUCT",
        payload : data
    }
}

export default deleteProduct;
