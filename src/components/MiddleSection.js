import React from 'react';

const MiddleSection = () =>
{
     return (
        <>
            <section>
                <section className='w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0'>
                <div className='bg-blu-200 lg:w-[35%] flex justify-center'>
                    <img src='/assets/1.png' width='100' height='100' alt='AwardImage' className='w-[55%] sm:w-[40%] md:w-[30%] lg:w-auto h-auto' />
                </div>
                <section className='bg-whit lg:w-[65%] space-y-4 text-sm xl:text-base 2xl:text-lg'>
                    <div className='space-y-4'>
                        <h4 className='font-bold text-center sm:text-left'>
                        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                        </h4>
                        <ul className='list-disc list-outside pl-8 font-medium'>
                            <li>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                            </li>
                            <li>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                            </li>
                        </ul>
                    </div>
                    <img src="/assets/2.png" alt="award-winning" className='w-full h-auto' />
                    <div className='font-medium'>
                        <p className=''>
                        Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>
                </section>
                </section>
                <div>
                    <p className='font-medium text-sm md:text-base 2xl:text-lg mt-4'>
                        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                    </p>
                </div>
            </section>
        </>
     )
};
export default MiddleSection;