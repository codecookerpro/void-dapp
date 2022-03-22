const AboutUs = () => {
  return (
    <div>
      <section className="py-40  "></section>
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
        <div className="py-20   radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
                <div className="max-w-md"><span className="text-green-600 font-bold">DeFIRE is governed as a</span>
                  <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading text-white">Decentralised Autonomous Organisation</h2>
                  <p className="mb-6 max-w-sm text-gray-400 leading-loose">Empowering individuals to unlock their potential by creating new opportunities, borderless communities, and inclusive financial products. Changing the relationship between capital providers, the protocol, and its end users.</p>
                  <ul className="text-gray-500 font-bold">
                    <li className="mb-2 flex items-center">
                      <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg><span className="text-gray-300">Modular, Extensible & Highly Scalable</span>
                    </li>
                    <li className="mb-2 flex items-center">
                      <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg><span className="text-gray-300">Open, Inclusive & Fluid Participation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg><span className="text-gray-300">Adaptable & Emergent Hierarchy</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 order-0 lg:order-1 mb-8 lg:mb-0"><img src="images/dao.png" alt="" /></div>
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
    </div>
  );
}

export default AboutUs;