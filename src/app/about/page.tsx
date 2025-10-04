import React from 'react';
export default function AboutPage() {
    return (
        <div>
            <div className="bg-black text-white min-h-screen py-24 px-4">
                <div className='max-w-6xl mx-auto'>
                    <section className='mb-24 text-center'>
                        <h2 className='text-4xl font-extrabold text-red-600 mb-6'>What is TED?</h2>
                        <div className='border border-white/20 bg-white/5 p-8 rounded-xl shadow-2xl shadow-red-900/50 mb-6 max-w-3xl mx-auto'>
                            <p className='text-lg font-light text-gray-300 leading-relaxed'>TED is a global platform dedicated to spreading ideas through short, powerful talks. Founded in 1984, TED stands for Technology, Entertainment, and Design, but its scope now includes science, business, art, and much more. With its slogan 'Ideas Worth Spreading', TED hosts annual conferences featuring world-renowned speakers who captivate audiences with innovative ideas and thought-provoking perspectives.

                            </p>
                        </div>
                        <p className='text-lg font-light text-gray-300 leading-relaxed mb-6'>"TED Talks have been viewed over 1 billion times worldwide."</p>

                        <div className="mt-8">
                            <a href="https://www.ted.com/talks" target="_blank" rel="noopener noreferrer" className="inline-block group">
                                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-red-600 hover:border-red-600 transition duration-300 group-hover:text-white font-semibold tracking-wider">
                                    Explore TED Talks
                                </button>
                            </a>
                        </div>
                    </section>





                    <section className="text-center">

                        <h2 className="text-4xl font-extrabold text-red-600 mb-6">What is TEDx?</h2>


                        <div className="border border-white/20 bg-white/5 p-8 rounded-xl shadow-2xl shadow-red-900/50 mb-6 max-w-3xl mx-auto">
                            <p className="text-lg font-light text-gray-300 leading-relaxed">
                                TEDx events are independently organized under a license from TED, designed to bring the spirit of TED to local communities. 'x' signifies an independently organized event, driven by passionate volunteers who curate speakers, ideas, and experiences tailored to their audience. TEDx events empower communities to share ideas, foster dialogue, and spark connections.
                            </p>
                        </div>

                        <p className="text-lg font-light text-gray-300 leading-relaxed mb-6">
                            (Placeholder Text: This will be replaced with the final script for the second paragraph.)
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );

}
