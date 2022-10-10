import { EllipsisHorizontalIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './StudentListTable.css'

const StudentLIstTable = ({student, handleClickDelete}) => {

    const {data , _id}= student;
    const {firstName, lastName, standard, status, city} = data;
    const fullName = firstName + " " + lastName;
    // console.log(fullName);

    console.log(student)

    const navigate = useNavigate('');

    const handleClickView = () => {
        navigate(`/viewStudent/${_id}`)
    }
    const handleClickEdite = () => {
        navigate('/editStudent')
    }
 

   

    return (
        <tr>
            <th><input type="checkbox"/></th>
            <td>1</td>
            <td> {fullName} </td>
            <td>{city}</td>
            <td>subjects quantity {status}</td>
            <td className='flex justify-center'>{ status === 'Suspended' ? <span className='bg-red-500 py-2 px-4 font-bold rounded-lg text-white'>{status}</span> : <span className='bg-green-500 py-2 px-4 font-bold rounded-lg text-white'>{status}</span> }</td>
            <td>{standard}</td>
            <td> <Popup trigger={<EllipsisHorizontalIcon className="h-6 w-6 ml-2 font-bold cursor-pointer"/>} position="left center">
                <div>
                     <div onClick={handleClickView} className='my-1 cursor-pointer'><EyeIcon className="h-5 w-5 ml-2 font-bold text-gray-500 mr-2"></EyeIcon> <span>Veiw Details</span></div>
                     <div onClick={handleClickEdite}  className='my-1 cursor-pointer'><PencilIcon className="h-5 w-5 ml-2 font-bold text-gray-500 mr-2"></PencilIcon><span>Edite</span></div>
                     <div onClick={() => handleClickDelete(_id)}  className='my-1 cursor-pointer'><TrashIcon className="h-5 w-5 ml-2 font-bold text-red-500 mr-2"></TrashIcon><span>Delete</span></div>
                </div>
                </Popup></td>
            </tr>
    );
};

export default StudentLIstTable;