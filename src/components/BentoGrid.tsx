import jessiecasual from '@/images/jessiecasual.png'
import angelacasual from '@/images/angelacasual.png'
import jessieeat from '@/images/jessieeat.png'
import angelaeat from '@/images/angelaeat.png'

export default function BentoGrid() {
  return (

    <div className="py-30 sm:py-5">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">

        <p className="mx-auto mt-20 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:mt-14 sm:text-5xl">
          Meet the team
        </p>


        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl tracking-tight text-gray-950 sm:text-xl">
          We're childhood friends that love dining at restaurants. 
        </p>


        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2 mx-auto max-w-3xl">
          <div className="relative lg:row-span-2">

            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">

                  <img
                    className="size-full object-cover object-top"
                    src={angelacasual.src}
                    alt=""
                  />

            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          



          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">

              <div className="relative min-h-[30rem] w-full grow">
          
                  <img
                    className="size-full object-cover object-top"
                    src={jessiecasual.src}
                    alt=""
                  />

  
     
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>

  )
}
