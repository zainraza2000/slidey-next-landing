import Image from "next/image";
import React, { Fragment } from "react";
import { IoClose } from "react-icons/io5";

import { Dialog, Transition } from "@headlessui/react";

const ImageModal = ({ img, open, setOpen, cancelButtonRef, customClass }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[5000000]"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative transform overflow-hidden  bg-white text-left shadow-xl transition-all ${customClass} rounded-lg`}
              >
                <div className="relative p-0">
                  <IoClose
                    className="absolute md:text-[35px] text-xl text-[#7A7A7A] right-3 top-4 cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                  <Image
                    src={img}
                    alt="img"
                    className=" rounded-lg w-full h-full"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ImageModal;
