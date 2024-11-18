export default function ExamDetailLoadingSkeleton() {
  return (
    <div className="mt-6 mb-24 w-[21rem] xs:w-[90%] xl:w-[72.5%] mx-auto">
      <div className="flex flex-col pb-3 border-b border-gray-300">
        <div className="skeleton w-[30rem] h-[2rem]" />
        <div className="mt-8 flex justify-between">
          <div className="flex gap-x-8 h-[1.25rem]">
            <div className="skeleton w-[17.5rem]" />
          </div>
          <div className="flex gap-x-2 h-[1.25rem]">
            <div className="skeleton w-[15rem]" />
            <span className='hidden relative bottom-[0.055rem] font-thin before:content-["|"] 3md:block' />
            <div className="skeleton w-[7.5rem]" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-y-2 pb-5 border-b">
        <div className="mt-4 flex gap-x-2">
          <div className="skeleton w-[10rem] h-[1rem]" />
        </div>
        <div className="ml-4 flex gap-x-2">
          <div className="skeleton w-[3rem] h-[1rem]" />
          <div className="skeleton w-[12.5rem] h-[1rem]" />
        </div>
        <div className="ml-4 flex gap-x-2">
          <div className="skeleton w-[10rem] h-[1rem]" />
          <div className="skeleton w-[5rem] h-[1rem]" />
        </div>

        <div className="mt-4 flex gap-x-2">
          <div className="skeleton w-[5rem] h-[1rem]" />
          <div className="skeleton w-[12.5rem] h-[1rem]" />
          <div className="skeleton w-[7.5rem] h-[1rem]" />
        </div>
        <div className="ml-4 flex gap-x-2">
          <div className="skeleton w-[12.5rem] h-[1rem]" />
          <div className="skeleton w-[5rem] h-[1rem]" />
          <div className="skeleton w-[10rem] h-[1rem]" />
        </div>
        <div className="flex gap-x-2">
          <div className="skeleton w-[10rem] h-[1rem]" />
          <div className="skeleton w-[12.5rem] h-[1rem]" />
        </div>
        <div className="flex gap-x-2">
          <div className="skeleton w-[6rem] h-[1rem]" />
          <div className="skeleton w-[10rem] h-[1rem]" />
        </div>

        <div className="mt-4 flex gap-x-2">
          <div className="skeleton w-[7.5rem] h-[1rem]" />
          <div className="skeleton w-[12.5rem] h-[1rem]" />
        </div>
      </div>
    </div>
  );
}
