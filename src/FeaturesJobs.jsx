import { useEffect, useState } from "react";
import Job from "./components/job";


const FeaturesJobs = () => {
    const[jobs,setJobs]=useState([])
    const [dataLength,setDataLength]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div>
        <div>
            <div className=" text-center">
                <h1 className="text-5xl font-bold">Featured Jobs {jobs.length}</h1>
                <p className=" text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
            {
                jobs.slice(0,dataLength).map(job =><Job key={job.id} job={job}></Job>)
            }
            </div>
            
            
        </div>

        <div className= {  dataLength === jobs.length ? 'hidden' : "" }>
        <div className="text-center my-10">
        <button onClick={()=>setDataLength(jobs.length)}
        className="btn btn-success text-white">
              Show All Jobs
        </button>
        </div>
        </div>
        </div>
    );
};

export default FeaturesJobs;