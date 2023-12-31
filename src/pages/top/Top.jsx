import { useEffect } from "react";
import FirstView from "../ui/FirstView";
import PreLoader from "../ui/PreLoader";

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
        <section className='flex h-screen flex-col items-center justify-center bg-white p-16 text-center text-xl'>
          <FirstView line1='ATSUKI' line2='KITADA' line3='' />
        </section>
      )}
    </>
  );
}

export default Top;
