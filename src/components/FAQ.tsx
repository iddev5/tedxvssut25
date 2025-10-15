import Accordion from "./Accordion"

const faqs = [
    {
        title: 'Who should attend TEDxVSSUT?',
        answer: 'Anyone can attend TEDxVSSUT who want to learns something new and be inspired.'
    },
    {
        title: 'How can I register for TEDxVSSUT?',
        answer: 'You can register for TEDxVSSUT by visiting our official website and following the registration process. Ensure you provide accurate details to complete your registration successfully.'
    },
    {
        title: 'Will TEDxVSSUT be held in person or virtually',
        answer: 'TEDxVSSUT will be held in person mode, but post event, all the recordings will be made available publically through the official TEDx Youtube Channel.'
    },
    {
        title: 'What kind of speakers will be at TEDxVSSUT?',
        answer: 'TEDxVSSUT features a wide range of speakers, including successful scientists, entrepreneurs, industry experts, sportsperson, artists and thought leaders. Our speakers come from various sectors, including technology, business and sustainability.'
    },
]

const FAQ = () => {
    return (
    <div id="faq" className="flex flex-col items-center pt-4 py-16 bg-black">
        <div className="relative flex flex-col items-center justify-center w-full my-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
            <span className="font-bold text-red-600">FAQ</span>
          </h2>
        </div>
        <div className="w-[80vw] md:w-[60vw] p-4 rounded-lg flex flex-col mb-10">
          {faqs.map(faq => 
            <Accordion
                title={faq.title}
                answer={faq.answer}
            />
          )}
        </div>
      </div>
    )
}

export default FAQ;