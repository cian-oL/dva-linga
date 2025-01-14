import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full max-w-[988px] mx-auto p-4 flex flex-col flex-1 items-center gap-2 lg:flex-row ">
      <div className="relative w-[240px] h-[240px] m-8 lg:w-[424px] lg:h-[424px] lg:m-0">
        <Image src="/dva-linga-logo.svg" alt="Dva Linga Logo" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-4xl font-bold text-center text-green-600 tracking-wide">
          DvaLinga
        </h1>
        <p className="text-xl text-slate-600">Master Croatian with Dva Linga</p>
      </div>
    </div>
  );
};

export default Home;
