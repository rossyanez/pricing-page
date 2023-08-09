import ArrowRightIcon from '@/icons/ArrowRightIcon';
import MailIcon from '@/icons/MailIcon';

function FeaturesCard({ title, description, children }) {
  return (
    <div className='space-y-5'>
      <div className='h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center'>
        {children}
      </div>
      <div>
        <h4 className='text-gray-900 text-xl font-medium leading-[30px]'>
          {title}
        </h4>
        <p className='text-base font-normal leading-6 mt-2'>{description}</p>
      </div>
      <p className='flex items-center gap-2 text-purple-700 font-semibold'>
        Learn more
        <ArrowRightIcon />
      </p>
    </div>
  );
}

export default FeaturesCard;
