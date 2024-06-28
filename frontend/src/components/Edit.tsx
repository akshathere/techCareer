import applicants from "../assets/Applicants.svg"
import matches from "../assets/Matches.svg"
import message from "../assets/message.svg"
export default function Edit(){
    return <div className="ml-6 mt-8 ">
        <div>
            <button className="rounded-lg border border-red-500 text-red-500 bg-pinky-2 px-8 py-3 mr-4">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                <p className="text-sm font-semibold ">Delete job</p>
                </div>
                </button>
                <button className="rounded-lg border border-pinky text-white  bg-red-500 px-10 py-3">
                    <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                        <p className="text-sm font-semibold">Edit Job</p>
                    </div>
                    </button>
        </div>
        <div className="mt-10 mr-14">
            <div className="flex space-x-40 border-b border-gray pb-5">
                <div className="flex">
                    <img src={applicants} className="w-6 mr-2" />
                    <p className="text-sm font-semibold text-gray-3">Applicants</p>
                </div>
                <div>
                    <b>400</b>
                </div>
            </div>
            <div className="flex space-x-40 border-b border-gray mt-5 pb-5">
                <div className="flex">
                    <img src={matches} className="w-5 mr-2" />
                    <p className="text-sm font-semibold text-gray-3">Applicants</p>
                </div>
                <div>
                <b>100</b>
                </div>
            </div>
            <div className="flex space-x-40 border-b border-gray mt-5 pb-5">
                <div className="flex">
                    <img src={message} className="w-4 mr-5" />
                    <p className="text-sm font-semibold text-gray-3">Messages</p>
                </div>
                <div>
                <b>147</b>
                </div>
            </div>
            <div className="flex space-x-40  mt-5 pb-5">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mt-1 mr-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className="text-sm font-semibold text-gray-3">Views</p>
                </div>
                <div className="pl-6">
                    <b>800</b>
                </div>
            </div>

        </div>
    </div>
}