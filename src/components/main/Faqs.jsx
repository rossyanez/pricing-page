import CtaButton from "../button/CtaButton";
import FaqsCard from "../cards/FaqsCard";

function Faqs() {
  const faqs = [
    {
      title: "Is there a free trial available?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      description:
        "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      title: "What is your cancellation policy?",
      description:
        "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    },
    {
      title: "Can other info be added to an invoice?",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      description:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
    {
      title: "How do I change my account email?",
      description:
        "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
    },
  ];
  return (
    <div className="flex py-24 px-0 flex-col items-center gap-16 self-stretch ">
      <div className="flex px-0 py-8 flex-col items-start gap-8 w-full">
        <h3 className="text-gray-900 text-4xl leading-[44px] tracking-[0.72px]">
          FAQs
        </h3>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className="flex w-[1280px] px-8 py-0 flex-col items-start gap-16">
        <div className="grid grid-cols-3 gap-x-8 gap-y-16">
          {faqs.map((feature, index) => (
            <FaqsCard
              key={index}
              title={feature.title}
              description={feature.description}
            ></FaqsCard>
          ))}
        </div>
      </div>
      <div className="flex w-[1280px] flex-col items-start p-8">
        <div className="flex justify-between self-stretch mx-8 bg-gray-50 p-8 rounded-2xl">
          <div>
            <h3 className="text-gray-900 text-xl font-medium leading-[30px] ">
              Still have questions?
            </h3>
            <p className="text-gray-500 text-lg leading-[28px]">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div>
            <CtaButton text="Get in Touch" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
