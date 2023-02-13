import React from 'react'
import JobCard from '../cards/JobCard';

const JobsList = ({jobs}) => {
    console.log(jobs);
  return (
    <div>
        {jobs.map((job) => (
         <JobCard job={job} key={job.id} />
        ))}
    </div>
  )
}

export default JobsList