import Link from "next/link";
import Head from "next/head";

export default function Form() {
  return (
    // <div>
    //   {/* return to home button */}
    //   <div className=" md:justify-start grid col-span-4 pt-32 md:pt-40 pl-12">
    //     <Link href="/">
    //       <a className=" text-red-500 pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight rounded-lg h-1/4">
    //         Return to home{" "}
    //       </a>
    //     </Link>
    //   </div>

    //   <form
    //     action="https://62f500f6ac59075124c9216b.mockapi.io/ecom/vacancies"
    //     method="post"
    //     className="bg-black container mx-auto rounded-lg pt-12"
    //   >
    //     <div className="mb-6 grid justify-center">
    //       <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
    //         Company name
    //       </label>
    //       <input
    //         name="NameCompany"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="e.g:  John Doe fund"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6 grid justify-center">
    //       <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
    //         Position
    //       </label>
    //       <input
    //         name="Position"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="e.g: Full Stack developer"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6 grid justify-center">
    //       <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
    //         Required skills
    //       </label>
    //       <input
    //         name="MainSkill"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="e.g: React, ExpressJS, NodeJS"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6 grid justify-center">
    //       <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
    //         Location
    //       </label>
    //       <input
    //         name="Location"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="e.g: Remote, Hybrid, on location"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6 grid justify-center">
    //       <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
    //         e-mail
    //       </label>
    //       <input
    //         name="Mail"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="e.g: recruiter@hotmail.com"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6 grid justify-center">
    //       <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
    //         Yearly compensation
    //       </label>
    //       <input
    //         name="Salary"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="e.g: 150K/250K Annualy"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6 grid justify-center">
    //       <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
    //         Job Description
    //       </label>
    //       <textarea
    //         rows="12"
    //         name="Description"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder=""
    //         required
    //       />
    //     </div>

    //     <div className="grid justify-center mb-6">
    //       <div className="grid justify-center h-5">
    //         <input
    //           id="remember"
    //           type="checkbox"
    //           value=""
    //           className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
    //           required
    //         />
    //       </div>

    //       <label
    //         htmlFor="remember"
    //         className="ml-2 text-sm font-medium text-white dark:text-gray-300"
    //       >
    //         I have read, understood and agree to accept the terms and conditions
    //       </label>
    //     </div>
    //     <div className="grid justify-center">
    //     <button
    //       type="submit"
    //       className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Submit
    //     </button>
    //     </div>
    //   </form>
    // </div>
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

// "NameCompany": "Hamlin Mcgill",
// "Position": "Front End Engineer",
// "Description": "bla bla bla bla bl alb alb bla bla bla ",
// "MainSkill": "MainSkill 6",
// "MoreSkills": "MoreSkills 6",
// "Location": "Location 6",
// "Mail": "Mail 6",
// "Salary": "Salary 6",
// "Logo": "http://loremflickr.com/640/480",
// "id": "6"
// },
