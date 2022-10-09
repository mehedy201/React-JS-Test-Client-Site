import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import './AddStudent.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

const AddStudent = () => {

    const [value, setvalue] = useState('')
    const multiSe = [value]
    const  handleOnchange  =  val  => {
        setvalue(val)
      }

    
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm();
    const onSubmit = data => {
        const allData = {data, multiSe};
        console.log(data)
        // Send Product Data to server
        fetch('http://localhost:5000/student-list', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(allData => {
            if(allData.success){
                alert('Sucess')
                reset();
            }
        })
    };

      const  options  = [
        { label:  'Programing', value:  'Programing'  },
        { label:  'Development', value:  'Development'  },
        { label:  'Football', value:  'Football'  },
        { label:  'SEO', value:  'SEO'  },
      ]
    return (
        <div>
            <h2 className="text-4xl font-bold my-6">Add Student</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-4 gap-5'>
                    <div>
                        {/* --------------- First Name ------------- */}
                        <p>First Name</p>
                        <input 
                            type="text" 
                            name='firstName'
                            className="input input-bordered w-full h-10 mb-4 rounded-md"
                            {...register("firstName", { required: true, minLength: 1})} 
                        />
                        {errors.firstName && <p className='text-red-500'>Please Fill First Name</p>}
                    </div>
                    <div>
                        {/* --------------- Last Name ------------- */}
                        <p>Last Name</p>
                        <input 
                            type="text" 
                            name='lastName'
                            className="input input-bordered w-full h-10 mb-4 rounded-md"
                            {...register("lastName", { required: true, minLength: 1})} 
                        />
                        {errors.lastName && <p className='text-red-500'>Please Fill Last Name</p>}
                    </div>
                    <div>
                        {/* --------------- Date Of Birth ------------- */}
                        <p>Date Of Birth*</p>
                        <Controller
                            control={control}
                            name="dateInputForm"
                            className="input input-bordered input-md w-full"
                            {...register("dateInputForm", { required: true })} 
                            render={({ field }) => (
                              <DatePicker
                                placeholderText="dd/mm/yyyy"
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                              />
                            )}
                        />
                        {errors.dateInputForm && <p className='text-red-500'>Please Fill</p>}
                    </div>
                    <div>
                        {/* --------------- Last Name ------------- */}
                        <p>Age</p>
                        <input 
                            type="text" 
                            readOnly
                            value={'22'}
                            name='age'
                            className="input input-bordered w-full h-10 mb-4 rounded-md bg-gray-200"
                            {...register("age", { required: true, minLength: 1})} 
                        />
                    </div>   
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='grid grid-cols-2 gap-6 items-center'>
                        <div>
                            {/* ----------- Standard ----------- */}
                            <p>Standard</p>
                            <input 
                              type="text" 
                              name='standard'
                              className="input input-bordered input-md w-full"
                              {...register("standard", { required: true })} 
                              />
                              {errors.standard && <p className='text-red-500'>Please Fill</p>}
                        </div>
                        <div>
                            {/* ----------- City ----------- */}
                            <p>City*</p>
                                <select className='input input-bordered input-md w-full' {...register("city")}>
                                    <option value="Select">Select</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                </select>
                        </div>
                    </div>
                    <div>
                        {/* ----------- Skill ----------- */}
                        <p>Skill*</p>
                            <MultiSelect
                              className="w-full"
                              onChange={handleOnchange}
                              options={options}
                            />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='col-span-3'>
                        <div>
                        {/* ----------------- BriefIntroduction -------------- */}
                            <p>Brief Introduction</p>
                            <textarea 
                              type="text" 
                              name='briefIntroduction'
                              className="input input-bordered input-md w-full"
                              {...register("briefIntroduction", { required: true })} 
                              />
                              {errors.briefIntroduction && <p className='text-red-500'>Please Fill</p>}
                        </div>
                        <div className='grid grid-cols-3 gap-6'>
                        {/* ------------ Enrollment From Date --------------- */}
                            <div>
                            <p>Enrollment From Date*</p>
                            <Controller
                                control={control}
                                name="EnrollmentFromDate"
                                className="input input-bordered input-md w-full"
                                {...register("EnrollmentFromDate", { required: true })} 
                                render={({ field }) => (
                                  <DatePicker
                                    placeholderText="Date Widget"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                  />
                                )}
                            />
                            </div>
                        {/* ------------ Enrollment To Date --------------- */}
                            <div>
                            <p>Enrollment To Date*</p>
                            <Controller
                                control={control}
                                name="EnrollmentToDate"
                                className="input input-bordered input-md w-full"
                                {...register("EnrollmentToDate", { required: true })} 
                                render={({ field }) => (
                                  <DatePicker
                                    placeholderText="Date Widget"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                  />
                                )}
                            />
                            </div>
                            {/* Status  */}
                            <div>
                            <p>Status*</p>
                            <select className='input input-bordered input-md w-full' {...register("status")}>
                                <option value="Select">status</option>
                                <option value="Live">Live</option>
                                <option value="Suspended">Suspended</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end'>
                        <div>
                            <p>Is Active?</p>
                            <input type="checkbox" className="toggle" checked />
                        </div>
                    </div>
                </div>
                {/* ------------------ Submit Button ------------------ */}
                <div className='flex justify-end mt-6'>
                    <input className="btn text-white block w-32 btn-info mr-3" type="submit" value={'Save'}/>
                    <button className='btn btn-outline'>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;