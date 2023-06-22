import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import editProduct from "./action-creators/edit-product";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state) => state)
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      inStock: "",
      imageLink: "",
      description: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.title) {
        error.title = "Please Enter Title";
      }

      if (values.price === "") {
        error.price = "Please enter price";
      } else if (!/^\d+$/.test(values.price)) {
        error.price = "Only numbers are allowed";
      }

      if (!values.imageLink) {
        error.imageLink = "Please Enter Image Link";
      }

      if (!values.description) {
        error.description = "Please Enter Description";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const updatedProduct = await axios.put(
          `https://6461c1c2491f9402f4aa0565.mockapi.io/products/${id}`,
          values
        );
        dispatch(editProduct(values))
        navigate("/portal/products")
      } catch (error) {
        alert("Something went wrong");
      }
    },
  });
  let getProductInfo = async () => {
    try {
      // const product = await axios.get(
      //   `https://6461c1c2491f9402f4aa0565.mockapi.io/products/${id}`
      // );
      
      let product = products.find(obj => obj.id === id)
      product.price = product.price.split(".")[0];
      formik.setValues(product);
    } catch (error) {
      alert("Something went wrong");
    }
  };
  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <label>Product Title</label>
            <input
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="title"
              type="text"
              className="form-control"
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-danger">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>Product Price</label>
            <input
              value={formik.values.price}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="price"
              type="text"
              className="form-control"
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="text-danger">{formik.errors.price}</div>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>In Stock</label>
            <select
              value={formik.values.inStock}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="inStock"
              className="form-control"
            >
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
            {formik.touched.inStock && formik.errors.inStock ? (
              <div className="text-danger">{formik.errors.inStock}</div>
            ) : null}
          </div>
          <div className="col-lg-12">
            <label>Image Link</label>
            <input
              value={formik.values.imageLink}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="imageLink"
              className="form-control"
              type="text"
            />
            {formik.touched.imageLink && formik.errors.imageLink ? (
              <div className="text-danger">{formik.errors.imageLink}</div>
            ) : null}
          </div>
          <div className="col-lg-12">
            <label>Description</label>
            <textarea
              value={formik.values.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="description"
              className="form-control"
            ></textarea>
            {formik.touched.description && formik.errors.description ? (
              <div className="text-danger">{formik.errors.description}</div>
            ) : null}
          </div>
          <div className="col-lg-12 mt-2">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;
