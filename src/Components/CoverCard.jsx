const CoverCard = ({coverUrl,changeCoverImage,coverImg}) => {
    const handleClick =()=>{
        if(coverImg !== coverUrl){
            changeCoverImage(coverUrl)
        }
    }
    return (
        <div
          className={`border-2 rounded-xl ${
            coverUrl === coverImg
              ? "border-blue-400"
              : "border-transparent"
          }
           cursor-pointer max-sm:flex-1 `}
          onClick={handleClick}
        >
          <div className='flex justify-center items-center shadow-xl max-sm:h-40 bg-blue-200 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img
              src={coverUrl}
              alt='Cover'
              width={127}
              height={103.34}
              className='object-contain'
            />
          </div>
        </div>
      );
}

export default CoverCard