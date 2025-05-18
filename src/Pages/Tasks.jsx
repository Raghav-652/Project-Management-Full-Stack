import React, { useState, useEffect } from 'react';
import { FaList } from 'react-icons/fa';
import { MdGridView } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loader';
import Title from '../Components/Title';
import { IoMdAdd } from 'react-icons/io';
import Tabs from '../Components/Tabs';
import TaskTitle from '../Components/TaskTitle';
import BoardView from '../Components/BoardView';
import Table from '../Components/Task/Table';
import AddTask from '../Components/Task/AddTask';
import { useGetAllTaskQuery } from '../Redux/Slices/api/taskApiSlice';

const TABS = [
  { title: 'Board View', icon: <MdGridView /> },
  { title: 'List View', icon: <FaList /> },
];

const TASK_TYPE = {
  todo: 'bg-blue-600',
  'in progress': 'bg-yellow-600',
  completed: 'bg-green-600',
};

const Tasks = () => {
  const params = useParams();
  const status = params?.status || '';

  // Load selected view from localStorage or default to 0 (Board View)
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem('selectedView') ? Number(localStorage.getItem('selectedView')) : 0;
  });

  const [open, setOpen] = useState(false);

  const { data, isLoading } = useGetAllTaskQuery({
    strQuery: status,
    isTrashed: '',
    search: '',
  });

  // Save selected view to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedView', selected);
  }, [selected]);

  return isLoading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 border-0 border-gray-500">
        <Title title={status ? `${status} Tasks` : 'Tasks'} className="flex gap-x-2" />

        {!status && (
          <button
            onClick={() => setOpen(true)}
            className="absolute flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 px-3"
          >
            <IoMdAdd className="text-lg" /> Create Task
          </button>
        )}
      </div>

      {/* Tabs Component */}
      <Tabs tabs={TABS} setSelected={setSelected} selected={selected}>
        {!status && (
          <div className="w-full flex justify-between gap-5 md:gap-x-12 py-6 border-0 border-white m-6">
            <TaskTitle label="To Do" className={TASK_TYPE.todo} />
            <TaskTitle label="In Progress" className={TASK_TYPE['in progress']} />
            <TaskTitle label="Completed" className={TASK_TYPE.completed} />
          </div>
        )}

        {/* Show the correct view based on the selected tab */}
        {selected === 0 ? <BoardView tasks={data?.tasks} /> : <Table tasks={data?.tasks} />}
      </Tabs>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
};

export default Tasks;




















// import React, { useState } from "react";
// import { FaList } from "react-icons/fa";
// import { MdGridView } from "react-icons/md";
// import { useParams } from "react-router-dom";
// import Loading from "../components/Loader";
// import Title from "../components/Title";
// import Button from "../components/Button";
// import { IoMdAdd } from "react-icons/io";
// import Tabs from "../Components/Tabs";
// import TaskTitle from "../Components/TaskTitle";
// import BoardView from "../components/BoardView";
// import { tasks } from "../assets/data";
// import Table from "../Components/Task/Table";
// import AddTask from "../components/task/AddTask";

// const TABS = [
//   { title: "Board View", icon: <MdGridView /> },
//   { title: "List View", icon: <FaList /> },
// ];

// const TASK_TYPE = {
//   todo: "bg-blue-600",
//   "in progress": "bg-yellow-600",
//   completed: "bg-green-600",
// };

// const Tasks = () => {
//   const params = useParams();

//   const [selected, setSelected] = useState(0);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const status = params?.status || "";

//   return loading ? (
//     <div className='py-10'>
//       <Loading />
//     </div>
//   ) : (
//     <div className='w-full'>
//       <div className='flex items-center justify-between mb-4'>
//         <Title title={status ? `${status} Tasks` : "Tasks"} />

//         {!status && (
//           <Button
//             onClick={() => setOpen(true)}
//             label='Create Task'
//             icon={<IoMdAdd className='text-lg' />}
//             className='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5'
//           />
//         )}
//       </div>

//       <Tabs tabs={TABS} setSelected={setSelected}>
//         {!status && (
//           <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
//             <TaskTitle label='To Do' className={TASK_TYPE.todo} />
//             <TaskTitle
//               label='In Progress'
//               className={TASK_TYPE["in progress"]}
//             />
//             <TaskTitle label='completed' className={TASK_TYPE.completed} />
//           </div>
//         )}

//         {selected !== 1 ? (
//           <BoardView tasks={tasks} />
//         ) : (
//           <div className='w-full'>
//             <Table tasks={tasks} />
//           </div>
//         )}
//       </Tabs>

//     </div>
//   );
// };

// export default Tasks;











