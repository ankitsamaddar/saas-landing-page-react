import { Element } from 'react-scroll';
import { faq } from '../constants/index.js';
import FaqItem from '../components/faqItem.jsx';

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md text-p4">
              Curiosity didn&apos;t kill the cat, it gave it answers.{' '}
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You&#39;ve got questions, we&#39;ve got answers.
            </p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-50% left-[calc(50%-1px)] top-4 -z-1 bg-s2" />
        </div>
        {/* faq questions */}
        <div className="faq-glow_before relative z-2 border-2 border-s3 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img
                src="/images/faq-logo.svg"
                alt="logo"
                className="size-1/2 "
              />
            </div>
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem item={item} index={index} />
              ))}
            </div>
            {/*Faq 2*/}
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem item={item} index={halfLength + index} />
              ))}
            </div>
          </div>
          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};
export default Faq;
