import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { addUserList, editUserList } from './Redux/redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function EditUser() {

    const params = useParams();

    const [state, setState] = useState();

    //dispatch method for action 
    const dispatch = useDispatch()

    const user = useSelector((state) => state.app.userLists.find((user) => user.id === parseInt(params.id)));


    //getting data for which the user click for edit
    const getEditingData = async () => {
        try {
            const getData = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setState(getData.data)
            formik.setValues(getData.data)
        } catch (error) {
            console.log("error")
        }

    }

    useEffect(() => {
        getEditingData()
    }, [params.id])

//formik to handle forms
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: '',
            },
        }, validate: (values) => {
            let errors = {};

            //validation based on the below condition

            if (!values.username) {
                errors.username = "Please enter username";
            } else if (values.username.length <= 3 || values.username.length >= 15) {
                errors.username = "Please enter username between 3 to 15 characters";
            }

            if (!values.email) {
                errors.email = 'Required *';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }


            if (!values.address.street) {
                errors.street = "Please enter street name";
            }

            if (!values.address.suite) {
                errors.suite = 'Required *';
            }
            if (!values.address.city) {
                errors.city = 'Required *';
            }
            if (!values.address.zipcode) {
                errors.zipcode = 'Required *';
            }
            if (!values.phone) {
                errors.phone = 'Phone No is Required *';
            }

            if (!values.website) {
                errors.website = 'Required *';
            }


            if (!values.company.name) {
                errors.name = "Please enter company name";
            } 
            if (!values.company.catchPhrase) {
                errors.catchPhrase = 'Required *';
            }
            if (!values.company.bs) {
                errors.bs = 'Required *';
            }

            return errors;
        },
        onSubmit: async (values) => {
            try {
                const upDateApiData = await axios.put(`https://jsonplaceholder.typicode.com/users/${params.id}`, values);
                dispatch(editUserList(upDateApiData.data));
                formik.handleReset();
            } catch {
                console.log('error');
            }
        }
    });


    return (
        <div className='container edit-container'>
            <div className='text-center heading-edit'>
                <h1 className='create-user'>Edit the Form</h1>
                <p className='text-muted para'>update the existing form  </p>
            </div>
            <hr style={{ height: "4px", color: 'gray' }}></hr>

            <div className='row  d-flex align-items-center justify-content-center'>
                <div className='col-lg-8 form-container  '>
                    <form onSubmit={formik.handleSubmit} className="container mt-5">
                        <div className="row">
                            <div className="col-lg-8 mb-3">
                                <label className='fw-medium fs-5'>Name</label>

                                <input type="text" name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    className="form-control"
                                    placeholder='Name'
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("username").touched && formik.errors.username) ?

                                    <span style={{ color: "red" }}>{formik.errors.username}</span> : null

                                }

                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-8 mb-3">
                                <label className='fw-medium fs-5'>Email:</label>
                                <input type="text" name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className="form-control"
                                    placeholder='Email id'
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("email").touched && formik.errors.email) ?
                                    <span style={{ color: "red" }}>{formik.errors.email}</span> : null

                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-6 mb-3">
                                <label className='fw-medium fs-5'>Address:</label>
                                <input type="text" name="address.street"
                                    value={formik.values.address.street}
                                    onChange={formik.handleChange}
                                    className="form-control mt-2"
                                    placeholder="Street name"
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("address.street").touched && formik.errors.street) ?

                                    <span style={{ color: "red" }}>{formik.errors.street}</span> : null
                                }

                                <input type="text"
                                    name="address.suite"
                                    value={formik.values.address.suite}
                                    onChange={formik.handleChange}
                                    className="form-control mt-2"
                                    placeholder="Suite"
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("address.suite").touched && formik.errors.suite) ?

                                    <span style={{ color: "red" }}>{formik.errors.suite}</span> : null
                                }


                                <input type="text" name="address.city"
                                    value={formik.values.address.city}
                                    onChange={formik.handleChange}
                                    className="form-control mt-2"
                                    placeholder="city name"
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("address.city").touched && formik.errors.city) ?

                                    <span style={{ color: "red" }}>{formik.errors.city}</span> : null
                                }

                                <input type="text" name="address.zipcode"
                                    value={formik.values.address.zipcode}
                                    onChange={formik.handleChange}
                                    className="form-control mt-2"
                                    placeholder="zipcode"
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("address.zipcode").touched && formik.errors.zipcode) ?

                                    <span style={{ color: "red" }}>{formik.errors.zipcode}</span> : null
                                }


                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-8 mb-2'>
                                <label className='fw-medium fs-5'>Phone Number : </label>
                                <input type='text' name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    className='form-control'
                                    placeholder='+91'
                                    onBlur={formik.handleBlur}>

                                </input>


                                {(formik.getFieldMeta("phone").touched && formik.errors.phone) ?

                                    <span style={{ color: "red" }}>{formik.errors.phone}</span> : null
                                }

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-8 mb-2'>
                                <label className='fw-medium fs-5'>Website : </label>
                                <input type='text' name="website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    className='form-control'
                                    placeholder='website.net'
                                    onBlur={formik.handleBlur}></input>

                                {(formik.getFieldMeta("website").touched && formik.errors.website) ?

                                    <span style={{ color: "red" }}>{formik.errors.website}</span> : null
                                }

                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-8 mb-3">
                                <label className='fw-medium fs-5'>Company :</label>
                                <input type="text" name="company.name"
                                    value={formik.values.company.name}
                                    onChange={formik.handleChange}
                                    className="form-control"
                                    placeholder="Company Name"
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("company.name").touched && formik.errors.name) ?

                                    <span style={{ color: "red" }}>{formik.errors.name}</span> : null
                                }

                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-8  mb-3">
                                <label className='fw-medium fs-5'>Catch Phrase :</label>
                                <input type="text"
                                    name="company.catchPhrase"
                                    value={formik.values.company.catchPhrase}
                                    onChange={formik.handleChange}
                                    className="form-control"
                                    placeholder='catch Phrase'
                                    onBlur={formik.handleBlur} />

                                {(formik.getFieldMeta("company.catchPhrase").touched && formik.errors.catchPhrase) ?

                                    <span style={{ color: "red" }}>{formik.errors.catchPhrase}</span> : null
                                }


                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-8 mb-3">
                                <label className='fw-medium fs-5'>BS :</label>
                                <input type="text" name="company.bs"
                                    value={formik.values.company.bs}
                                    onChange={formik.handleChange}
                                    className="form-control"
                                    placeholder='bs'
                                    onBlur={formik.handleBlur} />


                                {(formik.getFieldMeta("company.bs").touched && formik.errors.bs) ?

                                    <span style={{ color: "red" }}>{formik.errors.bs}</span> : null
                                }

                            </div>
                        </div>
                        <div className="col-lg-12 mt-3 mb-5">
                         
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                           
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser