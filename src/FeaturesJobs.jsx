import { useEffect, useState } from "react";


const FeaturesJobs = () => {
    const[jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div>
            <div className=" text-center">
                <h1 className="text-5xl font-bold">Featured Jobs {jobs.length}</h1>
                <p className=" text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
        </div>
    );
};

export default FeaturesJobs;