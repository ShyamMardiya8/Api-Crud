import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup'
import axios from 'axios'
function Post() {
    const init = {
        name: 'name'
    }
    const validation = yup.object({
        name: yup.string().required('fill the filed')
    })
    const onSubmit = values => {
        axios.post('https://66fcc334c3a184a84d17e4c4.mockapi.io/c1/users', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  return (
    <>
      <Formik
      initialValues={init}
      validationSchema={validation}
      onSubmit={onSubmit}>
        {() => (
            <Form>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Field 
                type='text'
                name='name'
                id="name"
                className="form-control"/>
                {/* <label htmlFor="name">name</label> */}
                <ErrorMessage name="name"/>
                <button type="submit">Send</button>
              </div>
            </div>
          </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Post;
