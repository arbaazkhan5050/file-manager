import React, { useState } from "react";
import Button from "../components/Button";
import EditListModal from "../components/EditListModal";
import TodoList from "../components/TodoList";
import ConfirmModal from '../components/ConfirmModal'

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "This is for the first file", completed: false },
    { id: 2, text: "This is for the Second file", completed: false },
    { id: 3, text: "This is for third file", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [selectItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false)

  const handleDeleteTask = (item) => {
    setSelectedItem(item);
    setShowDelModal(true)
  };

  const deleteItm = (id)=> {
    setTasks(tasks.filter((task) => task.id !== id));
    setShowDelModal(false)

  }




  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

 

  const handleEdit = (itemSelected) => {
    const { id, text } = itemSelected;
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: text } : task))
    );
    setShowModal(false);
  };

  const editItem = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          File Managment System
        </h1>
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Add a new File"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 border-b border-gray-500 focus:outline-none"
            />
           <Button onClick={handleAddTask} height={40}/>
          </div>
        </div>
        <TodoList
          tasks={tasks}
          editItem={editItem}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
      {showModal ? (
        <EditListModal
          setShowModal={setShowModal}
          selectItem={selectItem}
          handleEdit={handleEdit}
        />
      ) : null}
        {
        showDelModal ? <ConfirmModal setShowDelModal={setShowDelModal} deleteItm={deleteItm} 
        selectItem={selectItem}
        />:null
      }
    </div>
  );
}
