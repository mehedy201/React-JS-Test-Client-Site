import React, { useEffect, useState } from 'react';
import { ArrowsUpDownIcon } from '@heroicons/react/24/solid'
import './StudentTable.css'
import StudentLIstTable from './StudentLIstTable';


const StudentTable = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/student-lists')
            .then(res => res.json())
            .then(data => setStudents(data))
    },[])

    


    const handleClickDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        const url = `http://localhost:5000/student-lists/${id}`;
        if(proceed){
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remain = students.filter(student => student._id !== id);
                console.log(data, students);
                setStudents(remain);
            })
        }
    }




    


    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <p>Show 20 Entrys</p>
                </div>
                <div>
                    <span>Search:</span>
                    <input type="text" className='py-1 ml-1 border-2 rounded'/>
                </div>
            </div>
            <div className='mt-4'>
                {/* ------------- Table -------------- */}
                <table className="table w-full">
                    <thead>
                      <tr>
                        <th><input type="checkbox"/></th>
                        <th>Sr. <span><ArrowsUpDownIcon className="h-3 w-3 ml-2 font-bold"/></span></th>
                        <th>Name <span><ArrowsUpDownIcon className="h-3 w-3 ml-2 font-bold"/></span></th>
                        <th>City <span><ArrowsUpDownIcon className="h-3 w-3 ml-2 font-bold"/></span></th>
                        <th>Subjects <span><ArrowsUpDownIcon className="h-3 w-3 ml-2 font-bold"/></span></th>
                        <th>Status <span><ArrowsUpDownIcon className="h-3 w-3 ml-2 font-bold"/></span></th>
                        <th>Std. <span><ArrowsUpDownIcon className="h-3 w-3 ml-2 font-bold"/></span></th>
                        <th>Action <span><ArrowsUpDownIcon className="h-3 w-3 ml-2 font-bold"/></span></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                    students.map(student => <StudentLIstTable 
                        key={student._id} 
                        student={student}
                        handleClickDelete={handleClickDelete}></StudentLIstTable> )
                    }
                    </tbody>
                </table>     
            </div>
            <div className="mt-2 flex justify-between items-center">
                <div>Showing Result 1 to 20 Of 1000</div>
                <div>
                <div className="btn-group">
                     <button className="btn">1</button>
                     <button className="btn btn-active">2</button>
                     <button className="btn">3</button>
                     <button className="btn">4</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default StudentTable;