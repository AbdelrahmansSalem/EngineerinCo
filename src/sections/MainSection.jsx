import { useState } from "react";
import CoverCard from "../Components/CoverCard";
import { coverImages } from "../Constants";

const MainSection = () => {

  
const [coverImg1, setCoverImg] = useState(coverImages[0]);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col  justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
      <h1 className=' font-palanquin text-[54px] max-sm:text-[48px] max-sm:leading-[72px] font-bold'>
      <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Electro <span className="text-sky-600">Mechanic</span> Power
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Flowing innovation, one pump at a time
        </p>
      </div>

      <div className='relative xl:mr-16 flex-1 flex justify-center p-28 items-center xl:min-h-screen max-xl:py-40 bg-blue-100 bg-hero bg-cover bg-center'>
        <img
          src={coverImg1}
          alt='shoe colletion'
          width={510}
          height={400}
          className='object-contain relative z-10'
        />

        <div className="flex sm:gap-6 gap-8 absolute -bottom-[10%] justify-center items-center max-sm:px-6">
          {coverImages.map((cover, index) => (
            <div key={index}>
              <CoverCard
                index={index}
                coverUrl={cover}
                changeCoverImage={(cover)=>setCoverImg(cover)}
                coverImg={coverImg1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
