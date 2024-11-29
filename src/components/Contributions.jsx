import { projectsContributions } from "../constants/lists";

const Contributions = () => {
  return (
    <>
      <div className="flex flex-col gap-10 align-elements pb-20 border-b-2 border-neutral-300  py-20 my-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Project Contributions</h1>
          <p>Below are some other projects I have contributed to</p>
        </div>

        <div>
          {projectsContributions.map((project) => {
            const { id, title, type, year, description } = project;
            return (
              <div key={id} className="text-start md:mx-20 my-20">
                <h3 className="text-xl font-semibold text-start underline mb-10">
                  {year}
                </h3>
                <div className="border-l-2 pl-5">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <small className="text-neutral-500">{type}</small>
                  <p className="mt-5">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contributions;