function App() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container flex flex-col px-5 py-24 mx-auto'>
        <div className='mx-auto lg:w-4/6'>
          <div className='h-64 overflow-hidden rounded-lg'>
            {/*       <img
              alt='content'
              className='object-cover object-center w-full h-full'
              src='https://dummyimage.com/1200x500'
            /> */}
          </div>
          <div className='flex flex-col mt-10 sm:flex-row'>
            <div className='text-center sm:w-1/3 sm:pr-8 sm:py-8'>
              <div className='inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className='flex flex-col items-center justify-center text-center'>
                <h2 className='mt-4 text-lg font-medium text-gray-900 title-font'>Phoebe Caulfield</h2>
                <div className='w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded' />
                <p className='text-base'>
                  Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken
                  gentrify portland.
                </p>
              </div>
            </div>
            <div className='pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left'>
              <p className='mb-4 text-lg leading-relaxed'>
                Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon
                locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual
                salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt
                fashion axe normcore meh butcher. Portlester vexillologist forage post-ironic asymmetrical, chartreuse
                disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
              </p>
              <a className='inline-flex items-center text-indigo-500'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* sfdsg */}

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col flex-wrap items-center w-full mb-20 text-center'>
            <h1 className='mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font'>
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className='w-full leading-relaxed text-gray-500 lg:w-1/2'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 xl:w-1/3 md:w-1/2'>
              <div className='p-6 border border-gray-200 rounded-lg'>
                <div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </div>
                <h2 className='mb-2 text-lg font-medium text-gray-900 title-font'>Shooting Stars</h2>
                <p className='text-base leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className='p-4 xl:w-1/3 md:w-1/2'>
              <div className='p-6 border border-gray-200 rounded-lg'>
                <div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12' />
                  </svg>
                </div>
                <h2 className='mb-2 text-lg font-medium text-gray-900 title-font'>The Catalyzer</h2>
                <p className='text-base leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className='p-4 xl:w-1/3 md:w-1/2'>
              <div className='p-6 border border-gray-200 rounded-lg'>
                <div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <h2 className='mb-2 text-lg font-medium text-gray-900 title-font'>Neptune</h2>
                <p className='text-base leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className='p-4 xl:w-1/3 md:w-1/2'>
              <div className='p-6 border border-gray-200 rounded-lg'>
                <div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                  >
                    <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7' />
                  </svg>
                </div>
                <h2 className='mb-2 text-lg font-medium text-gray-900 title-font'>Melanchole</h2>
                <p className='text-base leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className='p-4 xl:w-1/3 md:w-1/2'>
              <div className='p-6 border border-gray-200 rounded-lg'>
                <div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
                  </svg>
                </div>
                <h2 className='mb-2 text-lg font-medium text-gray-900 title-font'>Bunker</h2>
                <p className='text-base leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
            <div className='p-4 xl:w-1/3 md:w-1/2'>
              <div className='p-6 border border-gray-200 rounded-lg'>
                <div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
                  </svg>
                </div>
                <h2 className='mb-2 text-lg font-medium text-gray-900 title-font'>Ramona Falls</h2>
                <p className='text-base leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
          </div>
          <button className='flex px-8 py-2 mx-auto mt-16 text-lg btn border-0 rounded focus:outline-none '>
            Button
          </button>
        </div>
      </section>

      {/* fg */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4 text-center'>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='text-3xl font-medium text-gray-900 title-font sm:text-4xl'>2.7K</h2>
              <p className='leading-relaxed'>Users</p>
            </div>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='text-3xl font-medium text-gray-900 title-font sm:text-4xl'>1.8K</h2>
              <p className='leading-relaxed'>Subscribes</p>
            </div>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='text-3xl font-medium text-gray-900 title-font sm:text-4xl'>35</h2>
              <p className='leading-relaxed'>Downloads</p>
            </div>
            <div className='w-1/2 p-4 sm:w-1/4'>
              <h2 className='text-3xl font-medium text-gray-900 title-font sm:text-4xl'>4</h2>
              <p className='leading-relaxed'>Products</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
