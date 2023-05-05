import React from "react";

export default function ConfirmModal({ setShowDelModal, deleteItm ,selectItem}) {
  return (
    <div className="flex mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full mb-6 mx-auto max-w-md">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Confirm delete</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setShowDelModal(false)}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                x
              </span>
            </button>
          </div>

          <div className="relative p-6 flex-auto">
            <p className="mb-4  font-medium">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                onClick={() => setShowDelModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteItm(selectItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
