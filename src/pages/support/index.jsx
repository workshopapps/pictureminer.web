import SupportCard from './SupportCard';
import mine from '../../assets/minergram.webp';
import setting from '../../assets/setting.webp';
import mobile from '../../assets/mobile.webp';
import product from '../../assets/product.webp';
import mail from '../../assets/mail.webp';
import chat from '../../assets/chat.webp';
import './index.css';
// import Layout from '../../layouts/Layout';

const Support = () => {
  return (
    <div className="bg-[#fafafa]">
      <div className="flex justify-center flex-col xl:mx-96 gap-6  support-head">
        <h1 className=" text-5xl support-h1 max-sm:text-3xl">
          How can we help you?
        </h1>
        <input type="text" placeholder="Search" className="border w-5/6" />
      </div>
      <p className="flex justify-center pb-12 pt-32">Categories</p>
      <div className="flex flex-wrap gap-12 mx-20 justify-between support-cards max-md:justify-center">
        <SupportCard
          img={mine}
          title="Getting Started"
          word="Learn how to navigate Discripto and get the most out of  it"
          article="2 articles"
        />
        <SupportCard
          img={setting}
          title="Account Management"
          word="Create new accounts and properly manage already existing accounts"
          article="2 articles"
        />
        <SupportCard
          img={mobile}
          title="Mobile Apps"
          word="Access conversations easily and collaborate with team members   "
          article="2 articles"
        />
        <SupportCard
          img={product}
          title="Productivity"
          word="Learn how Discripto increases work output using to-do lists and reminder"
          article="2 articles"
        />
        <SupportCard
          img={chat}
          title="Mailbox"
          word="Send and receive in-app messages and get notified"
          article="2 articles"
        />
        <SupportCard
          img={mail}
          title="Live Chat"
          word="Learn how to get instant support via live chat"
          article="2 articles"
        />
      </div>
      <div className="bg-[rgba(255,108,0,0.1)] mt-36 mx-20 h-80 flex justify-between items-center px-28 mb-44 support-foot max-sm:mx-0 max-sm:justify-around">
        <div className="support-find">
          <p className="font-bold">Can’t find what you’re looking for?</p>
          <p>We are only one ticket away!</p>
        </div>
        <div className="btn">
          <button className="bg-[#FF6C00] rounded-lg border btn text-white px-10 py-5 font-medium">
            SUBMIT A TICKET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
