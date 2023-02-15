/* eslint-disable react/no-unescaped-entities */
/* This example requires Tailwind CSS v2.0+ */
import { getJobs, getJobsSkills } from "../datalayer";
import JobsPage from '../components/ui/JobsPage';

export default function Index({jobs, jobSkills}) {
  return (
    <JobsPage jobs={jobs} jobsSkills={jobSkills} />
  );
}

export const getStaticProps = async (ctx) => {
  const jobs = await getJobs();
  const jobSkills = await getJobsSkills();

  return {
    props: {
      jobs,
      jobSkills,
    }
  }
};