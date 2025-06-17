import React from 'react';
import Lottie from "lottie-react";
import faqQuestionAnswer from "../assets/Faq_question_answer.json"

const Faq = () => {
    return (
        <div className='p-4'>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full lg:w-1/3'>
                    <Lottie animationData={faqQuestionAnswer} />
                </div>

                <div>
                    <h2 className='text-5xl font-bold mb-8 text-emerald-500'>Frequently Asked Questions</h2>
                    <p className='font-normal text-2xl'>If you have a question or need some help, <br />please take a moment to read through our Frequently Asked Questions.</p>
                </div>
            </div>

            <div className='mt-10 mb-25'>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-3xl">How do I create an account?</div>
                    <div className="collapse-content text-2xl">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-3xl">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-2xl">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-3xl">Which currencies can I collect payments in?</div>
                    <div className="collapse-content text-2xl">The currencies you can collect payments in depend on the payment processor you use. Stripe supports over 20 currencies, including USD, EUR, GBP, and CAD. Check your processor’s documentation to confirm which currencies are available based on your country and business setup.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-3xl">For Stripe payment processing, can I keep the existing payment processing rates we negotiated with Stripe?</div>
                    <div className="collapse-content text-2xl">Yes, if you’ve already negotiated custom payment processing rates with Stripe, you can typically continue using those rates when integrating with your platform. However, it’s important to confirm this with Stripe directly, as rates may vary based on your agreement, integration method, or changes in your business model.</div>
                </div>
                
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-3xl">How is the monthly order limit calculated?</div>
                    <div className="collapse-content text-2xl">The monthly order limit counts all your orders across all customers. For example, if you have 10 customers and they each order twice a month, you would have 20 orders per month.</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;