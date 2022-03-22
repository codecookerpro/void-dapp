const Ecosystem = () => {
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
      <div className="py-20   radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 w-full flex flex-wrap items-center">
            <div className="w-full lg:w-1/2"><span className="text-green-600 font-bold"> Managed Services</span>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white">DeFIRE Ecosystem</h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="max-w-xs lg:mx-auto text-gray-500 leading-loose">Web3 Wealth Optimisation</p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-8 w-full p-8 flex flex-wrap items-center rounded   bg-black bg-opacity-50">
              <div className="w-full lg:w-1/5 px-3 self-start">
                <h3 className="mb-4 text-2xl font-bold font-heading pt-4 text-white">DeFIRE BLAZE</h3>
              </div>
              <div className="w-full lg:w-2/5 px-3">
                <ul className="mb-4 text-white pt-5">
                  <li className="mb-4 flex">
                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg><span>Asset Management Simplified</span>
                  </li>
                  <li className="mb-4 flex">
                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg><span>Diversified Asset Containers</span>
                  </li>
                  <li className="flex">
                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg><span>Set and forget yield maximizers</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/5 px-3 lg:text-center text-center"><span className="text-4xl font-bold text-white">$BLAZE</span></div>
              <div className="w-full lg:w-1/5 px-3"></div>
            </div>
            <div className="w-full p-8 flex flex-wrap items-center rounded  bg-black bg-opacity-50">
              <div className="w-full lg:w-1/5 px-3 self-start">
                <h3 className="mb-4 text-2xl font-bold font-heading pt-4 text-white">DeFIRE IGNITE</h3>
              </div>
              <div className="w-full lg:w-2/5 px-3">
                <ul className="mb-4 text-white pt-5">
                  <li className="mb-4 flex">
                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg><span>Self Repaying Loans</span>
                  </li>
                  <li className="mb-4 flex">
                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg><span>Capital Efficient Low Fees</span>
                  </li>
                  <li className="flex">
                    <svg className="mr-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg><span>Unrestricted, no minimums</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/5 px-3 lg:text-center text-center"><span className="text-4xl font-bold text-white">$IGNITE</span></div>
              <div className="w-full lg:w-1/5 px-3"></div>
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
  );
}

export default Ecosystem;