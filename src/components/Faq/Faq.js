import { Accordion } from 'flowbite-react';
import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

const Faq = () => {
    return (
      <div className='dark:bg-black'>
        <h2 className="text-center text-4xl font-semibold text-sky-600 pt-7 mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion
          arrowIcon={FaArrowCircleDown}
          style={{ maxWidth: "560px" }}
          className="mx-auto"
        >
          <Accordion.Panel>
            <Accordion.Title>How does the course work?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The AMC certification in Celebrancy is a nationally and
                internationally recognised accreditation that takes you module
                by module through the training. Some of the training is self
                study, some working alongside our trainers (who are also
                established celebrants) and some group work. You are never left
                alone and we will be by your side taking you through the
                learning.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How long does the course take?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This is all dependent on how much time you have to give to the
                training. There are modules to complete and between 24-48 hours
                in between module work to receive feedback from your mentor.
                Many complete the course anywhere between 3-12 weeks.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can I train if I am based in Scotland?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes absolutely, we train students from Scotland. As this is
                online based, we can train from the comfort of your own home.
                This certification is recognised in Scotland, however it is
                separate from the legal aspects of marriage. In order to do
                this, your couples will need to attend the registry office to
                sign, or you can top up your certification to become a
                solemniser.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Is it possible to train when I am based in Ireland?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We train celebrants from across Europe. Most likely your couples
                will complete their legal aspects to the marriage in their home
                country and have you officiate the ceremony where you are based.
                This is very common and a beautiful offering for destination
                couples and local alike.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Am I too old to start a new career?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Not at all! We have students train from 25-75! There is no set
                age for celebrancy and clients out there to suit everyone.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can I train alongside a full time job?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, absolutely. You can train at your own pace in your free
                time. That’s the beauty of an online course!
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
};

export default Faq;