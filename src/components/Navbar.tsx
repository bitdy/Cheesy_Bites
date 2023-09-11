"use client";

import Link from "next/link";

const links = [
  {
    id: 1,
    title: "خانه",
    url: "/",
  },
  {
    id: 2,
    title: "کتاب",
    url: "/book",
  },
  {
    id: 3,
    title: "پادکست",
    url: "/podcast",
  },
  {
    id: 4,
    title: "کتاب الکترونیکی",
    url: "/e-book",
  },
  {
    id: 5,
    title: "آموزش",
    url: "/learn",
  },
  {
    id: 6,
    title: "اساتید",
    url: "/teachers",
  },
  {
    id: 7,
    title: "تماس با ما",
    url: "/contactus",
  },
];

export const Navbar = () => {
  return (
    <>
      <div className=" flex flex-row px-4 border-solid border-b-4  border-black">
        <div className="flex basis-1/4">
          <div className="logo py-4">logo</div>
        </div>
        <div className="basis-1/2">
          <div className="nav flex flex-wrap items-center justify-between px-4">
            <ul className="menu border-b md:border-none py-4 flex justify-end list-reset m-0 w-full">
              {links.map((item) => (
                <li key={item.id} className="border-t md:border-none">
                  <Link href={item.url}>
                    <p className="block rounded md:inline-block px-3 py-1 no-underline text-grey-darkest hover:text-white hover:bg-black">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex basis-1/4 py-4">
          <div className="search">
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="search"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:text-black peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-stone-950 dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleSearch2"
                placeholder="جستجو"
              />
              <label
                htmlFor="exampleSearch2"
                className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-dark transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
              >
                جستجو
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
