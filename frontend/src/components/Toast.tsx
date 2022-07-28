import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { useSharedState } from "../lib/store";

export default function Toast({
  type,
  title,
  message,
}: {
  type: string;
  title: string;
  message: string;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  var icon;
  if (type === "success")
    icon = (
      <CheckCircleIcon
        className="h-8 w-8 text-bright-green"
        aria-hidden="true"
      />
    );
  else if (type === "error")
    icon = (
      <ExclamationCircleIcon
        className="h-8 w-8 text-bright-red"
        aria-hidden="true"
      />
    );
  else if (type === "warning")
    icon = (
      <XCircleIcon className="h-8 w-8 text-bright-yellow" aria-hidden="true" />
    );
  else if (type === "info")
    icon = (
      <InformationCircleIcon
        className="h-8 w-8 text-bright-blue"
        aria-hidden="true"
      />
    );
  else if (type === "loading") icon = loadingSpinner;
  else throw new Error(`Invalid notification type: ${type}`);

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-in-out duration-600 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="max-w-sm w-full bg-elements shadow-lg rounded-lg pointer-events-auto overflow-hidden">
        <div className="p-3">
          <div className="flex items-center">
            <div className="flex-shrink-0">{icon}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="work-sans-normal text-md text-principal-lightgray">
                {title}
              </p>
              <p className="work-sans-light mt-1 text-sm text-principal-gray">
                {message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                type="button"
                className="bg-transparent rounded-md inline-flex text-principal-lightgray 
                hover:text-principal-gray focus:outline-none"
                onClick={() => setShow(false)}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export function ToastBox() {
  const [{ notifications }] = useSharedState();

  return (
    <div
      id="toast-box"
      aria-live="assertive"
      className="fixed bottom-0 right-0 w-full flex gap-3 items-end px-4 py-6 pointer-events-none 
      sm:p-6 sm:items-start z-50"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        {notifications.map(
          ({
            id,
            type,
            title,
            message,
          }: {
            id: string;
            type: string;
            title: string;
            message: string;
          }) => (
            <Toast key={id} type={type} title={title} message={message} />
          )
        )}
      </div>
    </div>
  );
}

const loadingSpinner = (
  <svg
    role="status"
    className="inline w-8 h-8 mr-2 text-gray-100 animate-spin fill-bright-blue"
    viewBox="0 0 100 101"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
);

export const TxLinkComponent = (url: string) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-bright-blue text-sm"
    >
      View on Block Explorer
    </a>
  );
};
