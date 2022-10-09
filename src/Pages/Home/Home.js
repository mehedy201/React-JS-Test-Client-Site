import React from 'react';
import './Home.css'
import { GrAdd } from "react-icons/gr";
import { PlusIcon } from '@heroicons/react/24/solid'




const Home = () => {
    return (
        <div className='flex justify-between mt-6'>
            <h2 className="text-4xl font-bold">Student List</h2>
            <button class="btn px-8 capitalize text-xl">
                <PlusIcon className="h-6 w-6 text-white mr-3 font-bold"/>
                 Add
            </button>
        </div>
    );
};

export default Home;