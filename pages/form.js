import Link from "next/link";
import Head from "next/head";

export default function Form() {
  return (
    <div>
      {/* return to home button */}
      <div className=" md:justify-start grid col-span-4 pt-32 md:pt-40 pl-12">
        <Link href="/">
          <a className=" text-red-500 pb-12 text-4xl md:text-4xl font font-extrabold tracking-tight rounded-lg h-1/4">
            Return to home{" "}
          </a>
        </Link>
      </div>

      <form
        action="https://62f500f6ac59075124c9216b.mockapi.io/ecom/vacancies"
        method="post"
        className="bg-black container mx-auto rounded-lg pt-12"
      >
        <div className="mb-6 grid justify-center">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            Company name
          </label>
          <input
            name="NameCompany"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g:  John Doe fund"
            required
          />
        </div>

        <div className="mb-6 grid justify-center">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            Position
          </label>
          <input
            name="Position"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g: Full Stack developer"
            required
          />
        </div>

        <div className="mb-6 grid justify-center">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            Required skills
          </label>
          <input
            name="MainSkill"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g: React, ExpressJS, NodeJS"
            required
          />
        </div>

        <div className="mb-6 grid justify-center">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            Location
          </label>
          <input
            name="Location"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g: Remote, Hybrid, on location"
            required
          />
        </div>

        <div className="mb-6 grid justify-center">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            e-mail
          </label>
          <input
            name="Mail"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g: recruiter@hotmail.com"
            required
          />
        </div>

        <div className="mb-6 grid justify-center">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            Yearly compensation
          </label>
          <input
            name="Salary"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g: 150K/250K Annualy"
            required
          />
        </div>

        <div className="mb-6 grid justify-center">
          <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
            Job Description
          </label>
          <textarea
            rows="12"
            name="Description"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>

        <div className="grid justify-center mb-6">
          <div className="grid justify-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>

          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-white dark:text-gray-300"
          >
            I have read, understood and agree to accept the terms and conditions
          </label>
        </div>
        <div className="grid justify-center">
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}
