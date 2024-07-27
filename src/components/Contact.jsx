import Section from './Section';
import Heading from './Heading';

const Contact = () => {
  return (
    <Section className="overflow-hidden" id="contact">
    <div className="container relative z-2">
    <div className="my-6">
    <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Get in Touch"
        />
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl">
                <div>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center mb-2">
                                <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#ffffff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a target="blank" href="https://veilmail.io/e/FkKh7o" className="text-[#ffffff] text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>murichustephen@gmail.com</strong>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                </svg>
                                </div>
                                <a target="blank" href="https://veilmail.io/e/FkKh7o" className="text-[#ffffff] text-sm ml-3">
                                    <small className="block">Cell Phone</small>
                                    <strong>+2547 46 341598</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        className="bg-n-10 w-full rounded-md py-2.5 px-4 border text-sm" />
                    <input type='email' placeholder='Email'
                        className="bg-n-10 w-full rounded-md py-2.5 px-4 border text-sm" />
                    <input type='text' placeholder='Subject'
                        className="bg-n-10 w-full rounded-md py-2.5 px-4 border text-sm" />
                    <textarea placeholder='Message' rows="6"
                        className="bg-n-10 w-full rounded-md px-4 border text-smpt-2.5 "></textarea>
                    <button type='button'
                        className="text-white bg-n-10 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
    </div>
    </div>
    </Section>
  );
};

export default Contact;
