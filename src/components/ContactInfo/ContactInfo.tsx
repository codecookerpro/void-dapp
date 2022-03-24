import Image from 'next/image';

const ContactInfo = () => {
  return (
    <div>
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
            <div className="mb-16 max-w-md mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">Get Involved</h2>
              <p className="text-gray-500">Let’s talk about it.</p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
                <div className="py-12 lg:py-20 rounded bg-black bg-opacity-50  shadow-md text-center">
                  <h3 className="mb-8 lg:mb-20 text-3xl font-bold font-heading text-white">Partnership</h3>
                  <div className="flex justify-center items-center">
                    <a target="_blank" rel="noreferrer" href="mailto:team@defire.org">
                      <span className=" inline-block w-24 h-24">
                        <svg className="iconify" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{ verticalAlign: "-0.125em" }} preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" data-icon="clarity:email-line">
                          <path className="clr-i-outline clr-i-outline-path-1" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41zM5.31 8h25.07L17.84 20.47z" fill="#ffffff"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
                <div className="py-12 lg:py-20 rounded bg-black  bg-opacity-50 shadow-md text-center">
                  <h3 className="mb-8 lg:mb-20 text-3xl font-bold font-heading text-white">Discord</h3>
                  <div className="flex justify-center items-center">
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/defire">
                      <img
                        className="w-24 h-24"
                        src="/svg/discord.svg"
                        alt=""
                      // layout='fill'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4 flex items-stretch">
                <div className="py-12 lg:py-20 w-full rounded bg-black bg-opacity-50 shadow-md text-center">
                  <h3 className="mb-8 lg:mb-20 text-3xl font-bold font-heading text-white">Socials</h3>
                  <div className="flex justify-center items-center">
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@defire.org">
                      <span className="mr-8 inline-block w-24 h-24">
                        <svg className="iconify" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{ verticalAlign: '-0.125em' }} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" data-icon="bi:medium">
                          <g fill="#ffffff">
                            <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236c-1.246 0-2.256-1.897-2.256-4.236c0-2.34 1.01-4.236 2.256-4.236c1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795c-.438 0-.793-1.7-.793-3.795c0-2.096.355-3.795.794-3.795c.438 0 .793 1.699.793 3.795z"></path>
                          </g>
                        </svg>
                      </span>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/DeFIRE_ORG">
                      <img
                        className="w-24 h-24"
                        src="/svg/twitter.svg"
                        alt=""
                      // layout='fill'
                      />
                    </a>
                  </div>
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
      <section className="py-40  "></section>
    </div>
  );
}

export default ContactInfo;