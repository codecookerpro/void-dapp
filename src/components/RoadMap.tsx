const RoadMap = () => {
  return (
    <section>
      {/* <div className="skew skew-top mr-for-radius">
        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div> */}
      <div className="py-20 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-md text-center mx-auto"><span className="text-green-600 font-bold">The Future of Financial Independence</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">Low Touch Wealth Optimisation</h2>
          </div>
          <div className="relative flex flex-wrap -mx-4 z-0">
            <div className="hidden lg:block absolute inset-x-0 max-w-2xl xl:max-w-3xl mx-auto py-px rounded bg-green-600" style={{ top: '7%', zIndex: '-1' }}></div>
            <div className="mb-8 w-full lg:w-1/3 px-4 text-center"><span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">✓</span>
              <h3 className="mb-1 text-2xl font-bold font-heading text-white">DAO Genesis</h3>
              <p className="mb-4 text-md font-bold font-heading text-white">March 21st 2022</p>
              <div className="py-12 px-6 text-sm bg-black bg-opacity-90 rounded shadow-md text-left">
                <p className="text-gray-300 leading-loose">Responsibility for the ecosystem's operations is distributed and vested in the DeFIRE community. To make a lasting impact and disrupt existing power structures, we create systems that provide regenerative economic value to their participants.</p>
              </div>
            </div>
            <div className="mb-8 w-full lg:w-1/3 px-4 text-center"><span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">2</span>
              <h3 className="mb-1 text-2xl font-bold font-heading text-white">Pre-Launch</h3>
              <p className="mb-4 text-md font-bold font-heading text-white">April 1st 2022</p>
              <div className="py-12 px-6  text-sm bg-black bg-opacity-60 rounded shadow-md text-left">
                <p className="text-gray-100 leading-loose">Early adopters can purchase $DFIRE and start participating in the DeFIRE governance, which is the DNA of the ecosystem. gDFIRE will share revenue from all protocols at launch.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 text-center"><span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-green-600 rounded-full text-white text-2xl">3</span>
              <h3 className="mb-1 text-2xl font-bold font-heading text-white">Launch </h3>
              <p className="mb-4 text-md font-bold font-heading text-white">Q3 2022</p>
              <div className="py-12 px-6  text-sm bg-black bg-opacity-60 rounded shadow-md text-left">
                <p className="text-gray-300 leading-loose">BLAZE, the centerpiece of the ecosystem, launches its containerised investment strategies: A powerful new tool for DeFi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="skew skew-bottom mr-for-radius">
        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div> */}
    </section>
  )
}

export default RoadMap;