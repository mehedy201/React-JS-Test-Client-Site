import React, {  useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import './AddStudent.css'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Switch, DatePicker, Button, Form, Input, Space } from 'antd';
import 'antd/dist/antd.css';



const AddStudent = () => {

    // Multiselect Form -----------
    const [value, setvalue] = useState('')
    const multiSe = [value]
    const  handleOnchange  =  val  => {
        setvalue(val)
      }

    // New Date for Get student age ---------------
    let newDate = new Date();
    const year = newDate.getFullYear();

    //   Calculate Student Age and set age field Value ------------
    const [newAge, setNewAge] = useState(0)
    let yourtBirthDate = '';
    let birthForForm;
    const birtOfDate = (date, dateString) => {
        birthForForm = dateString;
        yourtBirthDate= parseInt(dateString)
        const first4Str = String(yourtBirthDate).slice(0, 4);
        const nowYourAge = year - Number(first4Str);
        setNewAge(nowYourAge);
      };

    //   Is Active switch true fale value get -----------
    let isActiveValue = false;
    const onChange = (checked) => {
        isActiveValue = {checked};
        console.log(isActiveValue);
      };

    
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm();
    const onSubmit = data => {
        const allData = {data, multiSe, isActiveValue, birthForForm};
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



    const onFinish = (values) => {
      console.log('Received values of form:', values);
    }


    return (
        <div className='my-6'>
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
                        <DatePicker className='w-full' onChange={birtOfDate} />
                    </div>
                    <div>
                        {/* --------------- Last Name ------------- */}
                        <p>Age</p>
                        <input 
                            type="number" 
                            value={`${newAge}`}
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
                                    className="input input-bordered input-md w-full"
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
                                {...register("EnrollmentToDate", { required: true })} 
                                render={({ field }) => (
                                  <DatePicker
                                    placeholderText="Date Widget"
                                    className="input input-bordered input-md w-full"
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
                            <Switch onChange={onChange} />
                        </div>
                    </div>
                </div>

                {/* --------------- Subjects Input -------------------- */}
                {/* <form onSubmit={getSubjectsData}> */}

                <h2 className="text-2xl font-bold mt-6">Subjects</h2>
                <div className='grid grid-cols-6 mt-4 gap-5'>
                    <p className='col-span-1 font-bold'>Sr.</p>
                    <p className='col-span-4 font-bold'>Subjects</p>
                    <p className='col-span-1 font-bold'>Action</p>
                </div>
                <hr />

                {/* <Popup trigger={<button className='btn col-span-1 mt-3'>Add More</button>} position="right center">
                  <div className='grid grid-cols-6 mt-2 gap-6 w-100'>
                    <input ref={srRef} placeholder='Sr. No:' name='sr' type="text" className='input input-bordered col-span-1'/>
                    <input ref={subjectRef} name='subjects' type="text" className='input input-bordered col-span-4'/>
                    <button onClick={() =>getSubjects()} className='btn col-span-1 mt-3'>Add</button>
                  </div>
                </Popup>

                    <div className='grid grid-cols-6 mt-2 gap-6'>
                       
                    </div> */}
                {/* </form> */}



                <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing first name',
                    },
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing last name',
                    },
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

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