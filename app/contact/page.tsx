export default function Contact() {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container flex flex-wrap items-center px-5 py-24 mx-auto'>
          <div className='pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0'>
            <h1 className='text-3xl font-medium text-gray-900 title-font'>
              Slow-carb next level shoindcgoitch ethical authentic, poko scenester
            </h1>
            <p className='mt-4 leading-relaxed'>
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan
              tousled etsy austin.
            </p>
          </div>
          <div className='flex flex-col w-full p-8 mt-10 bg-black rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0'>
            <h2 className='mb-5 text-lg font-medium text-[#ffaa05] title-font'>Contact us</h2>
            <div className='relative mb-4'>
              <label htmlFor='full-name' className='text-sm leading-7 text-gray-600'>
                subject
              </label>
              <input type='text' id='full-name' name='full-name' className='w-full input' />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='text' className='text-sm leading-7 text-gray-600'>
                Text
              </label>
              <textarea typeof='text' id='text' name='text' className='w-full input h-32' />
            </div>
            <button className='btn btn-neutral'>Button</button>
            <p className='mt-3 text-xs text-gray-500'>Literally you probably heard of them jean shorts.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
