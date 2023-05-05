import React from "react";
import { MdDelete } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function TodoList({ tasks, editItem, handleDeleteTask }) {
  return tasks.length > 0 ? (
    <ul className="bg-white rounded-md shadow-md p-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center py-2 border-b border-gray-300 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          <span className="font-bold">{task.text}</span>
          <div>
            <button
              onClick={() => editItem(task)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              <HiOutlinePencilAlt size={24} />
            </button>
            <button
              onClick={() => handleDeleteTask(task)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              <MdDelete size={24} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-600">No tasks yet.</p>
  );
}
