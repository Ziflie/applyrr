import Link from "next/link";
import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
 
export default function Layout(props) {
  return (
    // <div className="pt-12 grid grid-cols-4">
    //   <div className="col-start-2 col-end-4 group ">
    //     <div className="rounded-md transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
    //       <div className=" px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">

    //         <picture>
    //           <img className="w-32 pt-12" src={props.logo}></img>
    //         </picture>

    //         <span><h2 className="mt-4 text-2xl font-medium">Company:</h2><h1 className="text-red-500">{props.namecompany}</h1></span>
    //         <h2 className="mt-4 text-2xl font-medium">{props.position}</h2>
    //       </div>

    //       <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
    //         <h2 className="mt-4 text-2xl font-medium">{props.position}</h2>
    //         <p className="mt-4 pb-12">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           Cupiditate, praesentium voluptatem omnis atque culpa repellendus.
    //         </p>

    //         <div className="flex ">
    //         <CurrencyDollarIcon
    //           className="mr-1.5 h-5 w-5 text-green-500"
    //           aria-hidden="true"
    //         />
    //           <p className="font-main">{props.salary}</p>

    //         </div>
    //         <Link href="/vacancy/[id]" as={props.linkje}>
    //           <a className="text-red-500 mt-8 font-bold">Read more</a>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" flex flex-col">
      <div className=" h-42 container mx-auto ">
        <Link href="/vacancy/[id]" as={props.linkje}>
          <a className="block h-64 group">
            <div className=" relative flex items-end h-content transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8">
              <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
                <span
                  className="text-3xl sm:text-4xl"
                  role="img"
                  aria-hidden="true"
                ></span>
                <p className="mt-4 text-xl font-bold sm:text-2xl">
                  {props.position}
                </p>
                <p className=" text-green-500 font-bold sm:text-xl">
                💲 {props.salary}
                </p>
                <p className=" text-purple-500 font-bold sm:text-xl">
                  🌍{props.location}
                </p>
                <p className="text-blue-500 font-bold sm:text-xl">
                 
                Company🏭: {props.namecompany}
                </p>
              </div>

              <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
                <p className="text-2xl font-bold">{props.position}</p>

                <p className="mt-4 text-lg font-medium leading-relaxed">
                  {props.mainskill}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
