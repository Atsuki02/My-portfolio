import { useEffect } from "react";
import FirstView from "./FirstView";
import PreLoader from "./PreLoader";

function Top({ isLoading, setIsLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <section className="flex h-screen flex-col items-center justify-center bg-white p-16 text-center text-xl">
          <FirstView line1="I" line2="AM" line3="ATSUKI" />
        </section>
      )}
    </>
  );
}

export default Top;
