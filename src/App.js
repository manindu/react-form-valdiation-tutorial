import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from './Components/Input';

class App extends Component {
  onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().required()
        })}
        onSubmit={this.onSubmit}
        render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
          <div style={{ padding: 100 }}>
            <h2>Sign Up</h2>
            <Input
              id="name"
              label="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />
            <Input
              id="email"
              label="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />
            <Input
              id="password"
              label="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
              type="password"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}
      />
    );
  }
}

export default App;
