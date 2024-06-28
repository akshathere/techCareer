import coins from "../assets/coins.svg"
export default function Openings(){
    return <div className="ml-20 pb-6">
        <div className="flex my-3 mb-6  mx-6 ml-0">
            <div className="text-3xl font-bold text-blacki">
                Senior Product Designer
            </div>
            <div className="flex ml-3">
                <div className="w-1 h-1 rounded-full bg-gray-1 mt-3 mx-1 mr-3"></div>
                <div className="text-gray-2">
                    posted 2 days ago
                </div>
                <div className="flex border border-green-500 rounded-full h-5 ml-3 w-12 bg-green-100 ">
                    <div className="w-1 h-1 rounded-full bg-green-700 mt-2 mx-1"></div>
                    <div className="text-green-700 text-xs ">Open</div>
                </div>
            </div>
        </div>
        <div className="flex text-gray-3 text-lg">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            </div>
            <div>
                Delaware, USA
            </div>
            
            <div className="ml-4">
            <div className="w-1 h-1 rounded-full bg-gray-1 mt-3 mx-1 mr-3"></div>
            </div>
            <div>
            <img src={coins} className="w-8"></img>
            </div>
            <div>
                $300K-$400k
            </div>
        </div>
    </div>
}