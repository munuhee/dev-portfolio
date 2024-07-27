import Section from './Section';
import Heading from './Heading';

const Services = () => {
  return (
    <Section
    className="container relative flex flex-col justify-between h-full max-w-6xl mx-auto xl:px-0 mt-5"
    id="services"
    >
      <Heading
        className="md:max-w-md lg:max-w-2xl"
        title="My Services"
      />
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold">Custom Software Development</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium uppercase">------------</p>
                <p className="mb-2">I provide tailored software solutions, including web applications, APIs, and automation scripts, utilizing Python, JavaScript, and modern frameworks.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold">Data Analysis and Visualization</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium uppercase">------------</p>
                <p className="mb-2">Expertise in data cleaning, preprocessing, and advanced analytics, offering insights through comprehensive visualizations and reports.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 ounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold">DevOps and CI/CD Implementation</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium uppercase">------------</p>
                <p className="mb-2">Specializing in DevOps practices, automation, and setting up CI/CD pipelines to enhance development efficiency and deployment processes.</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold">Consultation and Training</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium uppercase">------------</p>
                <p className="mb-2">Offering comprehensive training sessions and consultations to help clients understand and implement advanced software practices and technologies.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold">Microservices and Containerization</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium uppercase">------------</p>
                <p className="mb-2">Designing and implementing microservices architectures with containerization using Docker, Kubernetes, and OpenShift for scalable and efficient solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
