import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import * as React from 'react';
import '../style.css';

export default function Banner() {
  const [show, setShow] = React.useState(true);

  return show ? (
    <div className="mr-fixed mr-bottom-0 mr-inset-x-0 mr-pb-2 sm:mr-pb-5">
      <div className="mr-max-w-7xl mr-mx-auto mr-px-2 sm:mr-px-6 lg:mr-px-8">
        <div className="mr-p-2 mr-rounded-lg mr-bg-pink-600 mr-shadow-lg sm:mr-p-3">
          <div className="mr-flex mr-items-center mr-justify-between mr-flex-wrap">
            <div className="mr-w-0 mr-flex-1 mr-flex mr-items-center">
              <span className="mr-flex mr-p-2 mr-rounded-lg mr-bg-pink-800">
                <SpeakerphoneIcon
                  className="mr-h-6 mr-w-6 mr-text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="mr-ml-3 mr-font-medium mr-text-white mr-truncate">
                <span className="md:mr-hidden">
                  We announced a new product!
                </span>
                <span className="mr-hidden md:mr-inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>
            <div className="mr-order-3 mr-mt-2 mr-flex-shrink-0 mr-w-full sm:mr-order-2 sm:mr-mt-0 sm:mr-w-auto">
              <a
                href="#"
                className="mr-flex mr-items-center mr-justify-center mr-px-4 mr-py-2 mr-border mr-border-transparent mr-rounded-md mr-shadow-sm mr-text-sm mr-font-medium mr-text-pink-600 mr-bg-white hover:mr-bg-pink-50"
              >
                Learn more
              </a>
            </div>
            <div className="mr-order-2 mr-flex-shrink-0 sm:mr-order-3 sm:mr-ml-2">
              <DismissButton onClick={() => setShow(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

const DismissButton = (props) => (
  <button
    type="button"
    className="-mr-mr-1 mr-flex mr-p-2 mr-rounded-md hover:mr-bg-pink-500 focus:mr-outline-none focus:mr-ring-2 focus:mr-ring-white"
    {...props}
  >
    <span className="mr-sr-only">Dismiss</span>
    <XIcon className="mr-h-6 mr-w-6 mr-text-white" aria-hidden="true" />
  </button>
);
