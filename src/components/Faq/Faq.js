import React from 'react';

const Faq = () => {
    return (
      <div className="dark:bg-black py-14 px-5 sm:px-10 md:px-20">
        <h2 className="text-center text-4xl font-semibold text-sky-600 mb-7">
          Frequently Asked Questions
        </h2>
        <div style={{maxWidth: '560px'}} className='mx-auto'>
          <div
            tabIndex={0}
            className="collapse collapse-plus mt-3 border border-base-300 bg-base-100 rounded"
          >
            <div className="collapse-title font-medium">
              How does the course work?
            </div>
            <div className="collapse-content">
              <p>
                The AMC certification in Celebrancy is a nationally and
                internationally recognised accreditation that takes you module
                by module through the training. Some of the training is self
                study, some working alongside our trainers (who are also
                established celebrants) and some group work. You are never left
                alone and we will be by your side taking you through the
                learning.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus mt-3 border border-base-300 bg-base-100 rounded"
          >
            <div className="collapse-title font-medium">
              How long does the course take?
            </div>
            <div className="collapse-content">
              <p>
                This is all dependent on how much time you have to give to the
                training. There are modules to complete and between 24-48 hours
                in between module work to receive feedback from your mentor.
                Many complete the course anywhere between 3-12 weeks.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus mt-3 border border-base-300 bg-base-100 rounded"
          >
            <div className="collapse-title font-medium">
              Can I train if I am based in Scotland?
            </div>
            <div className="collapse-content">
              <p>
                Yes absolutely, we train students from Scotland. As this is
                online based, we can train from the comfort of your own home.
                This certification is recognised in Scotland, however it is
                separate from the legal aspects of marriage. In order to do
                this, your couples will need to attend the registry office to
                sign, or you can top up your certification to become a
                solemniser.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus mt-3 border border-base-300 bg-base-100 rounded"
          >
            <div className="collapse-title font-medium">
              Is it possible to train when I am based in Ireland?
            </div>
            <div className="collapse-content">
              <p>
                We train celebrants from across Europe. Most likely your couples
                will complete their legal aspects to the marriage in their home
                country and have you officiate the ceremony where you are based.
                This is very common and a beautiful offering for destination
                couples and local alike.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus mt-3 border border-base-300 bg-base-100 rounded"
          >
            <div className="collapse-title font-medium">
              Am I too old to start a new career?
            </div>
            <div className="collapse-content">
              <p>
                Not at all! We have students train from 25-75! There is no set
                age for celebrancy and clients out there to suit everyone.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus mt-3 border border-base-300 bg-base-100 rounded"
          >
            <div className="collapse-title font-medium">
              Can I train alongside a full time job?
            </div>
            <div className="collapse-content">
              <p>
                Yes, absolutely. You can train at your own pace in your free
                time. That’s the beauty of an online course!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;