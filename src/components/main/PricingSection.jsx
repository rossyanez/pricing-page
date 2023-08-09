import CheckIcon from '@/icons/CheckIcon';

function PricingSection() {
  return (
    <div className='md:flex md:pb-24 md:flex-col md:gap-16'>
      <div className='flex items-center justify-between'>
        {/* single card */}
        <div className='flex items-center flex-col text-center border rounded-2xl shadow-custom w-[343px] h-[486px] md:w-[384px] md:h-[510px]'>
          <div className='pt-10 px-6'>
            <p className='text-gray-900 text-4xl tracking-[.72px]'>$10/mth</p>
            <p className='text-gray-900 text-xl mt-4'>Basic plan</p>
            <p className='text-gray-500 text-base'>Billed Annually</p>
          </div>
          <div>
            <ul className='text-gray-500 leading-6 flex flex-col gap-y-4 px-6 py-8 '>
              <li className='flex items-center gap-x-3'>
                <CheckIcon /> Access to all basic features
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Basic reporting and analytics
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Up to 10 individual users
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                20GB individual data each user
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Basic chat and email support
              </li>
            </ul>
          </div>
          <div className='px-6 pb-8'>
            <button className='bg-purple-600 text-white w-[255] h-[24] px-4 py-3 rounded-lg border self-stretch'>
              Get started
            </button>
          </div>
        </div>
        <div className='flex items-center flex-col text-center border rounded-2xl shadow-custom w-[360px] h-[510px]'>
          <div className='pt-10 px-6'>
            <p className='text-gray-900 text-4xl tracking-[.72px]'>$20/mth</p>
            <p className='text-gray-900 text-xl mt-4'>Business plan</p>
            <p className='text-gray-500 text-base'>Billed Annually</p>
          </div>
          <div>
            <ul className='text-gray-500 leading-6 flex flex-col gap-y-4 px-6 py-8'>
              <li className='flex items-center gap-x-3'>
                <CheckIcon /> 200+ integrations
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Advanced reporting and analytics
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Up to 20 individual users
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                40GB individual data each user
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Priority chat and email support
              </li>
            </ul>
          </div>
          <div className='px-6 pb-8'>
            <button className='bg-purple-600 text-white w-[255] h-[24] px-4 py-3 rounded-lg border self-stretch'>
              Get started
            </button>
          </div>
        </div>
        <div className='flex items-center flex-col text-center border rounded-2xl shadow-custom w-[360px] h-[510px]'>
          <div className='pt-10 px-6'>
            <p className='text-gray-900 text-4xl tracking-[.72px]'>$40/mth</p>
            <p className='text-gray-900 text-xl mt-4'>Enterprise plan</p>
            <p className='text-gray-500 text-base'>Billed Annually</p>
          </div>
          <div>
            <ul className='text-gray-500 leading-6 flex flex-col gap-y-4 px-6 py-8'>
              <li className='flex items-center gap-x-3'>
                <CheckIcon /> Advanced custom fields
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Audit log and data history
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Unlimited individual users
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Unlimited individual data
              </li>
              <li className='flex items-center gap-x-3 gap-y-4'>
                <CheckIcon />
                Personalised+priotity service
              </li>
            </ul>
          </div>
          <div className='px-6 pb-8'>
            <button className='bg-purple-600 text-white w-[255] h-[24] px-4 py-3 rounded-lg border self-stretch'>
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
