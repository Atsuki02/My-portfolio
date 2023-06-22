import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function PreLoader({ isLoading }) {
  return (
    <div className="relative h-screen w-screen bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <ClimbingBoxLoader color={"#fe7106"} isLoading={isLoading} size={20} />
        <h1 className="pt-12 text-2xl font-bold tracking-widest text-white">
          Loading...
        </h1>
      </div>
    </div>
  );
}

export default PreLoader;
