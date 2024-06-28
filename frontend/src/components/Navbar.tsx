import YourSvg from '../assets/msg.svg';
import msg from '../assets/pay.svg'
import job from '../assets/job.svg'
import noti from '../assets/noti.svg'
import Example from './ui/dropdown';


export default function Navbar(){
    return <div className="fixed top-0 w-full bg-white">
    <div className="header flex flex-col md:flex-row items-center justify-between p-2">
      {/* Logo */}
      <div className="text-red-600 text-lg font-semibold bg-gray ml-2 md:ml-8 mt-2 md:mt-0 p-3 pl-4 w-20 cursor-pointer">
        Logo
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-4 md:border border-gray rounded-full p-2">
        <div className="flex items-center border border-gray rounded-full p-2 md:py-2 md:px-3 cursor-pointer bg-red-500 text-white">
          <img src={job} className="w-6 h-6 mr-2" alt="Jobs" />
          <span className="text-lg">Jobs</span>
        </div>

        <div className="flex items-center  rounded-full p-2 md:py-2 md:px-3 cursor-pointer text-gray-2">
          <img src={YourSvg} className="w-6 h-6 mr-2" alt="Messages" />
          <span className="text-lg">Messages</span>
        </div>

        <div className="flex items-center rounded-full p-2 md:py-2 md:px-3 cursor-pointer text-gray-2">
          <img src={msg} className="w-6 h-6 mr-2" alt="Messages" />
          <span className="text-lg">Payments</span>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex items-center mt-2 md:mt-0">
        <img src={noti} className="w-20 mr-2" alt="Notifications" />
        <Example />
      </div>
    </div>
    <div className="border-t-2 border-gray mt-3"></div>
  </div>
}