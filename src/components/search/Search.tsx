import { Input } from "../ui/input"
export default function Search(){
    return(
        <div className="w-[150px] lg:w-[250px]">
            <Input placeholder="Filter search..."  className='h-8 rounded-3xl p-6'/>
        </div>
    )
}