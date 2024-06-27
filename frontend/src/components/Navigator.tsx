// import { useNavigate } from 'react-router-dom';

export const Navigator= () =>{
    // const navigate=useNavigate();
    return (
      <div >
        <div className="flex ml-10 mt-3 mx-6">
        <div className="mx-10 text-lg">
          <a href="/pages/JobPreview" className='text-red-600 font-semibold '>JobPreview</a>
          <div className="border-t-2 border-red-500 mt-3 w-12 ml-4"></div>
        </div>
        <div className="mx-10">
          <a href="/pages/Applicants"className="text-gray-2 text-lg font-semibold" >Applicants</a>
        </div>
        <div className="mx-10">
          <a href="/pages/Match" className="text-gray-2 text-lg font-semibold" >Match</a>
        </div>
        <div className="mx-10">
          <a href="/pages/Messages" className="text-gray-2 text-lg font-semibold">Messages</a>
        </div>
        </div>
        <div className="border-t-2 border-gray "></div>
        </div>
      );
}