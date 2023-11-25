import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,ducational_requirements,experiencesntact_information}=job;
    return (
        <div className="   border border-[#E8E8E8] rounded-xl shadow-xl p-10 mt-10">
        <figure><img src={logo} alt="Coming soon........." /></figure>
        <div className="">
          <h2 className=" text-2xl font-medium">{job_title}</h2>
          <h3 className="text-lg font-medium">{company_name}</h3>
         <div className="flex gap-5">
         <button className=" text-lg font-semibold  py-2 px-5 rounded-md border-blue-300 border">{remote_or_onsite}</button>
         <button className=" text-lg font-semibold py-2 px-5 rounded-md border-blue-300 border">{job_type}</button>
         </div>

          <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
        <IoLocationSharp />
            <h2 className="text-lg font-medium text-[#757575] ">{location}</h2>
        </div>
            <div className="flex items-center gap-2">
            <RiMoneyDollarCircleLine/>
            <h2 className="text-lg font-medium text-[#757575] ">{salary}</h2>
            </div>
          </div>
          <div className="card-actions justify-start">
       <Link to={`/job/${id}`}>
       
            <button className="btn btn-primary">Show Details</button>
          
       </Link>
       </div>
          
        </div>
      </div>
    );
};

export default Job;