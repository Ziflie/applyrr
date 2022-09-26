import Link from "next/link";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { FaLocationArrow } from "react-icons/fa";

const defaulEndPoint =
  "https://62f500f6ac59075124c9216b.mockapi.io/ecom/vacancies";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaulEndPoint}/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Vacancy({ data }) {
  const {
    id,
    NameCompany,
    Position,
    Location,
    Logo,
    Salary,
    MainSkill,
    Description,
  } = data;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        key={id}
        className="container mx-auto grid grid-cols-4 gap-4 font-main "
      >
        <div className="col-span-4 grid justify-center pt-12 pb-24 ">
          <picture>
            <img className="w-32 grid justify-center" src={Logo}></img>
          </picture>
        </div>

        <div className="col-span-4 grid justify-start">
          <Link href="/">
            <a className="bg-red-500">Return</a>
          </Link>
        </div>

        <div className="grid col-span-4 justify-center">
          <h1 className="font-main text-black text-6xl">
            {NameCompany} is hiring a {Position}
          </h1>
        </div>

        <div className=" col-span-4 grid justify-center">
          <h1 className="text-green-500 ">Compensation:</h1>
          <h1 className="font-main text-black">{Salary}$</h1>
        </div>

        <div className="col-span-4 grid justify-center">
          <h1 className="text-purple-500 md:pr-9">Location:</h1>
          <h1 className="font-main text-black">{Location}</h1>
        </div>

        <div className="col-span-4 grid justify-center md:pr-12 ">

          <Link href="https://google.com">
            <a className="text-black bg-red-500 rounded-md">
              Apply
            </a>
          </Link>
        </div>

        <div className="grid col-span-4">
          <h1 className="text-black font-main  ">{Description}</h1>
        </div>
      </div>
    </>
  );
}
