import Link from "next/link";
import Head from "next/head";

export default function Form() {
  return (
    <div>
      {/* return to home button */}
      <div className="md:justify-start grid col-span-4 pt-32 md:pt-40 pl-12">
        <Link href="/">
          <a className=" text-red-500 pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight rounded-lg h-1/4">
            Return to home{" "}
          </a>
        </Link>
      </div>

      <form
        action="https://62f500f6ac59075124c9216b.mockapi.io/ecom/vacancies"
        method="post"
        className=""
      >
        <div className="grid grid-cols-4">
          {/* name fill in form */}
          <div className="  grid justify-start col-span-4 pt-40 md:pl-24">
            <label className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-black sm:text-6xl ">
              Company Name
            </label>
            <input
              className="relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8"
              placeholder="John Doe"
              name="NameCompany"
              required
            />
          </div>

          {/* title fill in form */}
          <div className="grid justify-start col-span-4 pt-40 md:pl-24">
            <h1 className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-black sm:text-6xl">
              Job position
            </h1>
            <input
              className="relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8"
              placeholder="Jr Frontend Developer"
              name="Position"
              required
            />
          </div>

          <div className="grid justify-start col-span-4 pt-40 md:pl-24">
            <label className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-black sm:text-6xl">
              Job description
              <p className="invisible">
                ??????????????????????????????????????????????????????????????????
              </p>
            </label>
            <textarea
              className="relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8"
              placeholder="At Patrick Solutions, as a junior web developer you will be working on ..."
              name="Description"
              rows="12"
              cols="80"
              required
            />
          </div>

          <div className="grid justify-start col-span-4 pt-40 md:pl-24">
            <label className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-black sm:text-6xl">
              Main required capabilities
            </label>
            <textarea
              className="relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8"
              placeholder="Strong soft skills, ReactJS, JS, Gulp "
              name="MainSkill"
              required
            />
          </div>

          <div className="grid justify-start col-span-4 pt-40 md:pl-24">
            <label className="pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight text-black sm:text-6xl">
              Location
            </label>
          </div>

          <div className="ml-4 space-x-4 flex justify-between ">
            <div className="relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8">
              <input
                id="default-radio-1"
                type="radio"
                value="Remote"
                name="Location"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remote
              </label>
            </div>
            <div className="relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="On location"
                name="Location"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Location
              </label>
            </div>

            <div className="relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8">
              <input
                id="default-radio-1"
                type="radio"
                value="Remote"
                name="Location"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Hybrid
              </label>
            </div>
          </div>
        </div>

        <button
          className="grid justify-items-start pt-12 pl-20 text-6xl text-red-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
 