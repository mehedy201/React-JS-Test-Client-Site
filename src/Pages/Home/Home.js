import React from 'react';
import './Home.css'
import { PlusIcon } from '@heroicons/react/24/solid'
import Search from '../../Components/Search/Search'
import StudentTable from '../../Components/StudentTable/StudentTable';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate('')

    const navigateTo = () => {
        navigate('/addStudent')
    }
    return (
        <div>
            <div className='flex justify-between pt-6'>
                <h2 className="text-4xl font-bold">Student List</h2>
                <button onClick={navigateTo} className="btn px-8 capitalize text-xl">
                    <PlusIcon className="h-6 w-6 text-white mr-3 font-bold"/>
                    Add
                </button>
            </div>
            <Search></Search>
            <StudentTable></StudentTable>
        </div>
    );
};


export default Home;