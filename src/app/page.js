import CtaButton from "@/components/button/CtaButton";
import FaqsCard from "@/components/cards/FaqsCard";
import FeaturesCard from "@/components/cards/FeaturesCard";
import Banner from "@/components/header/Banner";
import Nav from "@/components/header/nav/Nav";
import Faqs from "@/components/main/Faqs";
import PricingSection from "@/components/main/PricingSection";
import SectionGray from "@/components/wrapper/SectionGray";
import Section from "@/components/wrapper/section";
import BarChartIcon from "@/icons/BarChartIcon";
import CommandIcon from "@/icons/CommandIcon";
import MailIcon from "@/icons/MailIcon";
import MessageCircleIcon from "@/icons/MessageCircleIcon";
import SmileIcon from "@/icons/SmileIcon";
import ZapIcon from "@/icons/ZapIcon";

export default function Home() {
  const features = [
    {
      icon: <MailIcon />,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: <ZapIcon />,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: <BarChartIcon />,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      icon: <SmileIcon />,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: <CommandIcon />,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: <MessageCircleIcon />,
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

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
    <div>
      <Nav />
      <Section>
        <Banner />
      </Section>
      <Section>
        <PricingSection />
      </Section>

      <SectionGray>
        <div className="flex py-24 px-0 flex-col items-center gap-16 self-stretch ">
          <div className="flex px-0 py-8 flex-col items-start gap-8 w-full">
            <h2 className="text-purple-700 self-stretch text-base font-semibold leading-6">
              Features
            </h2>
            <h3 className="text-gray-900 text-4xl leading-[44px] tracking-[0.72px]">
              Beautiful analytics to grow smarter
            </h3>
            <p>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="flex w-[1280px] px-8 py-0 flex-col items-start gap-16">
            <div className="grid grid-cols-3 gap-x-8 gap-y-16">
              {features.map((feature, index) => (
                <FeaturesCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                >
                  {feature.icon}
                </FeaturesCard>
              ))}
            </div>
          </div>
        </div>
      </SectionGray>

      <Section>
        <Faqs />
      </Section>

      {/* Playground */}
    </div>
  );
}
