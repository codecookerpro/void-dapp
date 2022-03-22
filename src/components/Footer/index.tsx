const Footer = () => {
  return (
    <div className="bg-opacity-0">
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
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-16 lg:mb-0"><a className="inline-block mb-10 text-white text-3xl font-bold leading-none" href="#"><img className="h-24" src="images/defirewhite.svg" alt="" width="100" /></a>
                <div className="mb-4 py-3 lg:py-3 px-3 rounded bg-black  bg-opacity-90 shadow-md text-left">
                  <p className="max-w-sm text-gray-400 leading-loose">Unrestricted Bankless Infrastructure</p>
                </div>
                <div><a className="inline-block w-10 mr-3 p-2 bg-gray-800 hover:bg-gray-700 rounded" href="https://twitter.com/DeFIRE_ORG" target="_blank"><img className="w-8 h-6" src="svg/twitter.svg" alt="" /></a>                  <a className="inline-block w-10 p-2 mr-3 bg-gray-800 hover:bg-gray-700 rounded" href="https://discord.gg/defire" target="_blank"><img className="w-8 h-6" src="svg/discord.svg" alt="" /></a><a className="inline-block w-10 mr-3 p-2  bg-gray-800  hover:bg-gray-700 rounded" href="https://medium.com/@defire.org" target="_blank"><img className="w-8 h-6" style={{ marginLeft: "2px", paddingTop: "3px" }} src="svg/medium.svg" alt="" /></a></div>
              </div>
              <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0"></div>
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0"></div>
                <div className="w-full md:w-1/3 lg:w-auto"></div>
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
      <section className="py-20  "></section>
    </div>
  )
}

export default Footer;