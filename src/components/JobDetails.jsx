import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const intId=parseInt(id)
    const job=jobs.find(job=>job.id===(intId))
    console.log(job)
    
    return (
        <div>
            <h1>ZIllur noble</h1>
        </div>
    );
};

export default JobDetails;