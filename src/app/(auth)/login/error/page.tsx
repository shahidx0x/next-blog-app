import Image from "next/image";
import NotFound from "../../../../assest/image/404.svg";

const page = () => {
  return (
    <div>
      <div>
        <section className="flex items-center h-screen p-16 bg-gray-50 text-gray-800">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                <span className="sr-only">Error</span>
                <Image src={NotFound} className="w-full h-full" alt="404page" />
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Something went wrong
              </p>
              <p className="mt-4 mb-8 text-gray-600">Login failed</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
