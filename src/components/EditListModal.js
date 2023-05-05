import React, { useState } from "react";
import Button from "./Button";

export default function EditListModal({
  setShowModal,
  selectItem,
  handleEdit,
}) {
  const { id, text } = selectItem;
  const [task, setNewTask] = useState(text);
  return (
    <>
      <div className="flex mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full mb-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold">Edit Item</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => setShowModal(false)}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                <label className="block text-black text-sm font-bold mb-1">
                  Item Description
                </label>

                <input
                  type="text"
                  name="todo-text"
                  id="todo-text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-5"
                  value={task}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <Button title="Submit"
                onClick={() => handleEdit({ id: id, text: task })}
                height={40}
                />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
