import ArrowRightIcon from "@/icons/ArrowRightIcon";
import MailIcon from "@/icons/MailIcon";

function FaqsCard({ title, description }) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-gray-900 text-xl font-medium leading-[30px]">
          {title}
        </h4>
        <p className="text-base font-normal leading-6 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default FaqsCard;
