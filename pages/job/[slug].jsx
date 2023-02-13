import { getJobs } from '../../datalayer';
import { getJobBySlug } from '../../datalayer/contentful/job';
import { getJobsSlugs } from '../../datalayer/contentful/job';
import JobDetails from '../../components/data/details/JobDetails';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const JobDetailsPage = ({ job }) => {
  if (!job) return <LoadingSpinner customMessage='Loading job data ...' />;
  return <JobDetails job={job} />;
};
export default JobDetailsPage;

export const getStaticPaths = async () => {
  const slugs = await getJobsSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
    const slug = params.slug;
    const job = await getJobBySlug({ slug });
  
    return {
      props: {
        job,
      },
    }
  };