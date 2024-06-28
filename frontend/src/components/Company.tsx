import atlas from "../assets/Atlassian.svg"
export default function Company(){
    return <div className="pl-20 mt-6 pt-8 md:border-t border-gray border-t-2">
        <div className="flex pb-6">
            <img src={atlas} className="w-10 mr-4" />
            <div className="text-xl font-b pt-1">
                Atlassian
            </div>
        </div>
        <div className="grid grid-cols-3">  
            <div>
                <div className="pb-5">
                    <p className="text-gray-3">Company Size</p>
                    <p>1k-2k Employees</p>
                </div>
                <div className="pb-5">
                    <p className="text-gray-3">Sector</p>
                    <p>Information Technology, Infrastructure</p>
                </div>
                <div className="pb-5">
                    <p className="text-gray-3">Founded In</p>
                    <p>2019</p>
                </div>
            </div>
            <div>
            <div className="pb-5">
                    <p className="text-gray-3">Type</p>
                    <p>Private</p>
                </div>
                <div className="pb-5">
                    <p className="text-gray-3">Funding</p>
                    <p>Bootstrapped</p>
                </div>
                <div className="pb-5">
                    <p className="text-gray-3">Founded By</p>
                    <p>Scott Farquhar, Mike Cannon-Brookes</p>
                </div>
            </div>
        </div>
    </div>
}