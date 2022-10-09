import React from 'react';
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Search.css"

const Search = () => {

    const { handleSubmit, register, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='flex justify-between my-4'>
            <div className='flex-1'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap items-center">
                            {/* ------------------ Product Name ------------------ */}
                            <div className="mb-2 date_input">
                                <p className='mb-1'>From Enrollment Date</p>
                                    <Controller
                                        control={control}
                                        name="dateInputForm"
                                        className="date_input_form w-40 py-2 mr-1 rounded-md"
                                        {...register("dateInputForm", { required: true })} 
                                        render={({ field }) => (
                                          <DatePicker
                                            placeholderText="dd/mm/yyyy"
                                            onChange={(date) => field.onChange(date)}
                                            selected={field.value}
                                          />
                                        )}
                                    />
                            </div>
                          {/* ------------------ Product Price ------------------ */}
                           <div className="mb-2">
                                <p className='mb-1'>To Enrollment Date</p>
                                    <Controller
                                        control={control}
                                        name="dateInputTo"
                                        className="border-2 w-40 py-1 mr-1 rounded-md"
                                        {...register("dateInputTo", { required: true })} 
                                        render={({ field }) => (
                                          <DatePicker
                                            placeholderText="dd/mm/yyyy"
                                            onChange={(date) => field.onChange(date)}
                                            selected={field.value}
                                          />
                                        )}
                                    />
                           </div>
                           {/* ------------------ Product Quantity ------------------ */}
                           <div className="mb-2">
                               <p>Skill</p>
                                <select className='w-48 py-1 border-2 rounded-md' {...register("All")}>
                                    <option value="all">All</option>
                                    <option value="science">Science</option>
                                </select>
                           </div>
                           {/* ------------------ Product Image Link ------------------ */}
                           <div>
                                <select className='w-48 mr-1 py-1 border-2 rounded-md' {...register("BulkAction")}>
                                    <option value="bulk action">Bulk Action</option>
                                    <option value="genarel">Genarel</option>
                                </select>
                           </div>
                           {/* ------------------ Submit Button ------------------ */}
                           <input className="btn btn-sm btn-info capitalize block w-16 py-2" type="submit" value={'Apply'}/>
                      </div>
                </form>
            </div>
            <div className='flex-1 flex justify-between items-center pl-6'>
                <div>
                    <button className='btn btn-sm border-none capitalize px-6 mr-2 bg-green-600	'>Filter</button>
                    <button className='btn btn-sm border-none capitalize px-6 mr-2 bg-red-600'>Clear</button>
                    <button className='btn btn-sm border-none capitalize px-6 bg-sky-600'>Export Excel</button>
                </div>
                <div>
                    <button className='btn btn-sm border-none capitalize px-6'>Total: 100</button>
                </div>
            </div>
        </div>
    );
};

export default Search;