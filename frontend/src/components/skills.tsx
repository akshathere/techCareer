import figma from "../assets/figma.svg"
import adobe from "../assets/adobe.svg"
import xd from "../assets/xd.svg"
export default function Skills(){
    return <div className="pl-20 pb-6 text-gray-3 flex md:border-t border-gray border-t-2 pt-4 text-xs">
        <div >
            <div className="mb-2">Skills Required</div>
            <div className="flex border border-gray-2 rounded-lg w-16 p-1 mb-2">
                <img src={figma} className="w-4 mr-1" />
                <p>Figma</p>
            </div>
            <div className="flex border border-gray-2 rounded-lg w-30 p-1 mb-2">
            <img src={adobe} className="w-4 mr-1" />
            <p>Adobe Illustrator</p>
            </div>
            <div className="flex border border-gray-2 rounded-lg w-24 p-1">
            <img src={xd} className="w-4 mr-1" />
            <p>Adobe XD</p>
            </div>
        </div>
        <div className="mx-10">
            <p>Prefered Language</p>
            <p><b>English</b></p>
        </div>
        <div className="mx-10">
        <p>Typee</p>
        <p><b>Full time</b></p>
        </div>
        <div className="mx-10">
        <p>Years of Experience</p>
        <p><b>3+ Years of Experience</b></p>
        </div>
    </div>
}