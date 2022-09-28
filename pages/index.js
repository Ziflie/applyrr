import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/vacancyLayout";
import { useState } from "react";

const defaulEndPoint =
  "https://62f500f6ac59075124c9216b.mockapi.io/ecom/vacancies";

export async function getServerSideProps() {
  const res = await fetch(defaulEndPoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [searchTerm, setSearchTerm] = useState("");

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
      <Navbar />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <h1 className="grid justify-center font-main text-black text-6xl md:text-9xl">
            Applyrr.
          </h1>
        </div>
        <div className="col-span-2 pl-4">
          <h1 className="font-second grid justify-center md:text-xl text-black">
            THE place to checkout tech vacancies   
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="pt-12 pb-12 col-span-2 grid justify-center">
          {/* search bar starts */}
          <div className="relative">
            <label className="sr-only" htmlFor="email">
              {" "}
              e.g: Front end developer,{" "}
            </label>

            <input
              onChange={event => {
                setSearchTerm(event.target.value);
              }}
              className="w-96 py-3 pl-3 pr-12 text-sm border-2 border-red-500 rounded"
              type="text"
              placeholder="🔍 e.g: Full Stack Developer remote"
            />
          </div>
        </div>
      </div>

      {data
        .filter(val => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.Position.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map(
          ({
            id,
            NameCompany,
            Position,
            Location,
            Logo,
            Salary,
            MainSkill,
          }) => (
            <Layout
              key={id}
              namecompany={NameCompany}
              position={Position}
              location={Location}
              salary={Salary}
              mainskill={MainSkill}
              logo={Logo}
              linkje={`vacancy/${id}`}
            />
          )
        )}
    </>
  );
}
