import MenuItem from "@/components/MenuItem";
import Banner from "@/components/header/Banner";
import Nav from "@/components/header/nav/Nav";
import PricingSection from "@/components/main/PricingSection";
import ArrowRightIcon from "@/icons/ArrowRightIcon";
import BarChartIcon from "@/icons/BarChartIcon";
import CheckIcon from "@/icons/CheckIcon";
import CommandIcon from "@/icons/CommandIcon";
import HamburgerMenu from "@/icons/HamburgerMenu";
import MailIcon from "@/icons/MailIcon";
import MessageCircleIcon from "@/icons/MessageCircleIcon";
import SmileIcon from "@/icons/SmileIcon";
import ZapIcon from "@/icons/ZapIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:w-[1440px] md:mx-auto">
      <Nav />
      <Banner />
      <PricingSection />
      {/* Playground */}

      <div className="flex py-24 px-0 flex-col items-center gap-16 self-stretch ">
        <div className="flex px-0 py-8 flex-col items-start gap-8 w-[1280px]">
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
          <div className="flex items-start gap-8 self-stretch">
            <div className="flex-[1_0_0%] flex-col items-start gap-5">
              <MailIcon className="p-3 rounded-3xl bg-purple-100" />
              <h4 className="text-gray-900 text-xl font-medium leading-[30px]">
                Share team inboxes
              </h4>
              <p className="text-base font-normal leading-6">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
              <p className="flex items-center gap-2">
                Learn more
                <ArrowRightIcon />
              </p>
            </div>

            <div className="flex-[1_0_0%] flex-col items-start gap-5">
              <ZapIcon className="p-3 rounded-3xl bg-purple-100" />
              <h4 className="text-gray-900 text-xl font-medium leading-[30px]">
                Deliver instant answers
              </h4>
              <p className="text-base font-normal leading-6">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
              <p className="flex items-center gap-2">
                Learn more
                <ArrowRightIcon />
              </p>
            </div>

            <div className="flex-[1_0_0%] flex-col items-start gap-5">
              <BarChartIcon className="p-3 rounded-3xl bg-purple-100" />
              <h4 className="text-gray-900 text-xl font-medium leading-[30px]">
                Manage your team with reports
              </h4>
              <p className="text-base font-normal leading-6">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
              <p className="flex items-center gap-2">
                Learn more
                <ArrowRightIcon />
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 self-stretch">
            <div className="flex-[1_0_0%] flex-col items-start gap-5">
              <SmileIcon className="p-3 rounded-3xl bg-purple-100" />
              <h4 className="text-gray-900 text-xl font-medium leading-[30px]">
                Connect with customers
              </h4>
              <p className="text-base font-normal leading-6">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
              <p className="flex items-center gap-2">
                Learn more
                <ArrowRightIcon />
              </p>
            </div>

            <div className="flex-[1_0_0%] flex-col items-start gap-5">
              <CommandIcon className="p-3 rounded-3xl bg-purple-100" />
              <h4 className="text-gray-900 text-xl font-medium leading-[30px]">
                Connect the tools you already use
              </h4>
              <p className="text-base font-normal leading-6">
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </p>
              <p className="flex items-center gap-2">
                Learn more
                <ArrowRightIcon />
              </p>
            </div>

            <div className="flex-[1_0_0%] flex-col items-start gap-5">
              <MessageCircleIcon className="p-3 rounded-3xl bg-purple-100" />
              <h4 className="text-gray-900 text-xl font-medium leading-[30px]">
                Our people make the difference
              </h4>
              <p className="text-base font-normal leading-6">
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </p>
              <p className="flex items-center gap-2">
                Learn more
                <ArrowRightIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
