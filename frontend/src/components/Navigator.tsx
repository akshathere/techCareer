// import { useNavigate } from 'react-router-dom';

export const Navigator= () =>{
    // const navigate=useNavigate();
    return (
      <div className="mt-28">
        <div className="flex ml-10 mt-3 mx-6">
        <div className="mx-10 text-lg">
          <a href="/pages/JobPreview" className='text-red-600 font-semibold '>JobPreview</a>
          <div className="border-t-2 border-red-500 mt-3 w-12 ml-4"></div>
        </div>
        <div className="mx-10">
          <a className="text-gray-2 text-lg font-semibold hover:text-gray-700 cursor-pointer" >Applicants</a>
        </div>
        <div className="mx-10">
          <a  className="text-gray-2 text-lg font-semibold hover:text-gray-700 cursor-pointer" >Match</a>
        </div>
        <div className="mx-10">
          <a  className="text-gray-2 text-lg font-semibold hover:text-gray-700 cursor-pointer">Messages</a>
        </div>
        </div>
        <div className="border-t-2 border-gray "></div>
        </div>
      );
}