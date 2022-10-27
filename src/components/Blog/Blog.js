import React from 'react';

const Blog = () => {
    return (
      <div className="py-14 dark:bg-black">
        <h2 className="text-center text-4xl font-semibold text-sky-600 dark:text-white mt-4 mb-8">
          Question and Answer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 sm:px-10 md:px-20">
          <div className="border border-gray-200 dark:border-gray-700 py-4 px-5">
            <h2 className="text-xl font-semibold text-sky-600  mb-2">
              What is cors?
            </h2>
            <p className="text-sky-800 dark:text-gray-400">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 py-4 px-5">
            <h2 className="text-xl font-semibold text-sky-600  mb-2">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p className="text-sky-800 dark:text-gray-400">
              Most apps need to know the identity of a user. Knowing a user's
              identity allows an app to securely save user data in the cloud and
              provide the same personalized experience across all of the user's
              devices. Firebase Authentication provides backend services,
              easy-to-use SDKs, and ready-made UI libraries to authenticate
              users to your app. It supports authentication using passwords,
              phone numbers, popular federated identity providers like Google,
              Facebook and Twitter, Github, Microsoft, Yahoo, Phone Number and
              more.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 py-4 px-5">
            <h2 className="text-xl font-semibold text-sky-600  mb-2">
              How does the private route work?
            </h2>
            <p className="text-sky-800 dark:text-gray-400">
              The react private route component renders child components
              (children) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property. The current logged in user (authUser) is
              retrieved from Redux state with a call to the useSelector() hook.
              Redux is used in this example however it is not required to
              implement a Private Route component in React Router 6. You could
              use a different state management library or any approach you
              prefer to get the logged in status of the user.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 py-4 px-5">
            <h2 className="text-xl font-semibold text-sky-600  mb-2">
              What is Node? How does Node work?
            </h2>
            <p className="text-sky-800 dark:text-gray-400">
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Node.js accepts the request
              from the clients and sends the response, while working with the
              request node.js handles them with a single thread.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;
