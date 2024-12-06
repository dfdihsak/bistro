import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import person2 from '@/images/person2.png'

export default function About() {
  return (
    <section id="features" className="px-6 sm:px-12 md:px-16 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-5 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-15">
        {/* Text section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Save time and money
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Handle more orders and increased sales without needing to hire additional team members
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:overflow-hidden">
          <img
            alt=""
            src={person2.src}
            className="sm:w-[30rem]"
          />
        </div>

        {/* Features Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
            <h2 className="mt-20 text-2xl font-bold tracking-tight text-gray-900">Increased efficiency.</h2>
            <p className="mt-6">
              With our AI assistant managing calls, orders, and reservations, your team can focus on in-person customer service, food preparation, and other critical tasks
            </p>

            <p className="mt-6">
              By automating the order-taking process, the AI helps reduce wait times, eliminate missed calls, and free up your staff—allowing your restaurant to operate more efficiently while minimizing the need for additional hires, which helps lower labor costs.
            </p>

            <h2 className="mt-20 text-2xl font-bold tracking-tight text-gray-900">24/7 Availability to Capture Every Opportunity.</h2>
            <p className="mt-6">
              Unlike traditional staff, the AI assistant is available around the clock, ensuring that your restaurant never misses a call or a potential sale
            </p>

            <p className="mt-6">
              Even after hours or during peak times, the AI can handle order-taking, provide information, and schedule reservations
            </p>

            <p className="mt-6">
              This continuous availability means you capture every revenue opportunity, build loyalty with customers, and provide a seamless experience, no matter when they call.
            </p>

            <h2 className="mt-20 text-2xl font-bold tracking-tight text-gray-900">Enhanced Customer Experience.</h2>
            <p className="mt-6">
              Our AI is designed to communicate with customers in a friendly, natural way, answering questions about the menu, helping with custom orders, and offering a smooth, pleasant interaction every time
            </p>

            <p className="mt-6">
              By providing fast and accurate responses, it helps reduce order errors and enhances the overall customer experience, making each interaction feel personalized and professional. This consistent, friendly service builds customer satisfaction and increases the likelihood of repeat visits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
