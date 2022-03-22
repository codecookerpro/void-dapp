const Articles = () => {
  return (
    <div>
      <section className="py-40  "></section>
      <section>
        {/* <div className="skew skew-top mr-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
          </svg>
        </div> */}
        <div className="py-20 radius-for-skewed  ">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center"><span className="text-green-600 font-bold">Latest from the frontlines</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">Research & Development</h2>
            </div>
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="flex flex-wrap w-full lg:w-1/2">
                <div className="w-full px-3 mb-5">
                  <a target="_blank" href="https://medium.com/@defire.org/">
                    <div className="relative h-64 mx-auto rounded">
                      <img className="relative h-full w-full rounded object-cover opacity-60" src="https://images.unsplash.com/photo-1547280746-0e984cc4ca31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                      <div className="absolute inset-0   opacity-75 rounded"></div>
                      <div className="absolute inset-0 p-6 flex flex-col items-start"><span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">PRE-LAUNCH</span>                        <span className="text-sm text-gray-400">Mar.2022</span>
                        <p className="text-xl lg:text-2xl text-white font-bold">Early Adopters</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-full lg:w-1/2 px-3 mb-5">
                  <a target="_blank" href="https://medium.com/@defire.org/">
                    <div className="relative mx-auto rounded h-128">
                      <img className="relative h-full w-full rounded object-cover opacity-60" src="https://images.unsplash.com/photo-1635668422724-fffb2201f951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" />
                      <div className="absolute inset-0   opacity-75 rounded"></div>
                      <div className="absolute inset-0 p-6 flex flex-col items-start"><span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">FUTURE</span>                        <span className="text-sm text-gray-400">Mar.2022</span>
                        <p className="text-xl lg:text-2xl text-white font-bold">Your F.I.R.E. Journey</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-full lg:w-1/2 px-3 mb-5">
                  <a target="_blank" href="https://medium.com/@defire.org/defire-academy-86fc28da70a5">
                    <div className="relative mx-auto rounded h-128">
                      <img className="relative h-full w-full rounded object-cover opacity-50" src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" />
                      <div className="absolute inset-0   opacity-75 rounded"></div>
                      <div className="absolute inset-0 p-6 flex flex-col items-start"><span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">EDUCATION </span>                        <span className="text-sm text-gray-400">Mar.2022</span>
                        <p className="text-xl lg:text-2xl text-white font-bold">DeFIRE Academy</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap w-full lg:w-1/2">
                <div className="w-full lg:w-1/2 px-3 mb-5">
                  <a target="_blank" href="https://medium.com/@defire.org/distributed-responsibility-58410b395d5a">
                    <div className="relative mx-auto rounded h-128"><img className="relative h-full w-full rounded object-cover opacity-60" src="https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" />
                      <div className="absolute inset-0   opacity-75 rounded"></div>
                      <div className="absolute inset-0 p-6 flex flex-col items-start"><span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">Governance</span>                        <span className="text-sm text-gray-400">Feb.2022</span>
                        <p className="text-xl lg:text-2xl text-white font-bold">Distributed Responsibility</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-full lg:w-1/2 px-3 mb-5">
                  <a target="_blank" href="https://medium.com/@defire.org/dfire-one-token-endless-utility-3710e721e95e">
                    <div className="relative mx-auto rounded h-128">
                      <img className="relative h-full w-full rounded object-cover opacity-60" src="https://images.unsplash.com/photo-1588007375246-3ee823ef4851?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" />
                      <div className="absolute inset-0   opacity-75 rounded"></div>
                      <div className="absolute inset-0 p-6 flex flex-col items-start"><span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">Tokenomics</span>                        <span className="text-sm text-gray-400">Feb.2022</span>
                        <p className="text-xl lg:text-2xl text-white font-bold">One Token Endless Utility</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-full px-3 mb-5">
                  <a target="_blank" href="https://medium.com/@defire.org/buidl-defire-6ef790a63965">
                    <div className="relative mx-auto rounded h-64">
                      <img className="relative h-full w-full rounded object-cover opacity-60" src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                      <div className="absolute inset-0   opacity-75 rounded"></div>
                      <div className="absolute inset-0 p-6 flex flex-col items-start"><span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">FUTURE</span>                        <span className="text-sm text-gray-400">Feb.2022</span>
                        <p className="text-xl lg:text-2xl text-white font-bold">BUIDL DeFIRE</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-10"><a className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose outline-none transition duration-200" target="_blank" href="https://medium.com/@defire.org">Explore More Articles</a></div>
            </div>
          </div>
        </div>
        {/* <div className="skew skew-bottom mr-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div> */}
      </section>
    </div>
  );
}

export default Articles;