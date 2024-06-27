import YourSvg from '../assets/msg.svg';
import msg from '../assets/pay.svg'
import job from '../assets/job.svg'
import noti from '../assets/noti.svg'
import Example from './ui/dropdown';
export default function Navbar(){
    return <div>
    <div className="flex space-x-96 mt-3">
        <div>
            <div className="text-red-600 text-lg font-semibold bg-gray  ml-8 mt-3 p-3 pl-4 w-20">
                Logo
            </div>
        </div>
        <div className="flex border border-gray-1 rounded-full mt-2">
            <div className="flex text-white border border-pinky rounded-full py-2 px-3 m-2 text-lg bg-red-500 ">
                <div className="w-7 ">
                    <img src={job} ></img>
                </div>
                <div>
                    Jobs
                </div>
            </div>
            <div className="m-2 mx-20 text-gray-1 flex pt-2 text-lg">
                <div className="w-7 ">
                    <img src={YourSvg} ></img>
                </div>
                <div>
                Messages
                </div>
                
            </div>
            <div className="m-2 mx-4 text-gray-1 flex pt-2 text-lg">
                <div className="w-7 ">
                    <img src={msg} ></img>
                </div>
                <div>
                Messages
                </div>
            </div>
        </div>
        <div>
        <div className="m-2 mx-4 text-gray-1 flex pt-2 text-lg">
                <div className="w-20 ">
                    <img src={noti} ></img>
                </div>
                <div className='pt-2'>
                <Example></Example>
                </div>
            </div>
        </div>
    </div>
    <div className="border-t-2 border-gray mt-3"></div>
    </div>
}