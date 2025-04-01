// import clsx from "clsx";
// import { useState } from "react";
// import {
//     MdAttachFile,
//     MdKeyboardArrowDown,
//     MdKeyboardArrowUp,
//     MdKeyboardDoubleArrowUp,
// }   from "react-icons/md";
// import { useSelector } from "react-redux";
// import { BGS, formatDate, PRIOTITYSTYELS, TASK_TYPE } from "../Utils";
// import TaskDialog from "./Task/TaskDialog";
// import { BiMessageDetail } from "react-icons/bi";
// import { FaList } from "react-icons/fa";
// // import UserInfo from "./UserInfo";

// import { IoMdAdd } from "react-icons/io";
// import UserInfo from "./UserInfo";
// import AddSubTask from "./Task/AddSubTask";


// const ICONS ={

//     high: <MdKeyboardDoubleArrowUp />,
//     medium: <MdKeyboardArrowUp />,
//     low: <MdKeyboardArrowDown />,
// };

// const TaskCard = ({task}) => {
//     const {user} = useSelector((state)=> state.auth);
//     const[open, setOpen] = useState(false);
//   return (
//     <>
//     <div className="w-full h-fit bg-white shadow-md p-4 rounded mb-6 flex flex-col">
//         <div className="w-full flex-justify-between items-center">
//         <div
//          className={clsx("flex flex-1 gap-1 items-center text-sm font-medium",
//      PRIOTITYSTYELS[task?.priority]
//     )}
     
//      >
// <span className="text-lg">{ICONS[task?.priority]}</span>
// <span className="uppercase">{task?.priority} Priority</span>


//      </div>

// {user?.isAdmin &&(

// <div className="absolute sm:relative sm:right-0  sm:-translate-y-1/2 sm:ml-290 w-full sm:w-auto">


// <TaskDialog task={task} />
// </div>
// )}
// </div>

// <>
//     <div className="flex items-center gap-4 border-9  border-white">


        
// <div 
// className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}



// />

// <h4 className="line-clamp-1 text-black">{task?.title}</h4>
//     </div>
//     <span className="text-sm text-gray-600">
// {formatDate(new Date(task?.date))}

//     </span>
//     </>


//     <div className="w-full border-t border-gray-200 my-2"/>

//     <div className="flex items-center justify-between mb-4 ">
//         <div className="flex items-center gap-3 ">
//             <div className="flex gap-1 items-center text-sm text-gray-600">

//                 <BiMessageDetail />
//                 <span>{task?.activities?.length}</span>
//             </div>
//             <div className="flex gap-1 items-center text-sm text-gray-600">

// <MdAttachFile />
// <span>{task?.assets?.length}</span>
// </div>

// <div className="flex gap-1 items-center text-sm text-gray-600">

// <FaList />
// <span>{task?.subTasks?.length}</span>
// </div>
//         </div>


// <div className="flex flex-row-reverse">
//     {task?.team?.map((m, index ) => (

// <div key={index}

// className={clsx("w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-0", BGS[index % BGS?.length]

// )}

// >

//     <UserInfo user={m} />
// </div>

//     ))}


// </div>

//     </div>

//      {/* sub tasks */}

//      {task?.subTasks?.length > 0 ? (

//         <div className="py-5 border-t border-gray-200">
// <h5 className="text-base line-clamp-1 text-black">{task?.subTasks[0].title}

// </h5>

// <div className="p-4 space-x-8 mt-3">
//     <span className="text-sm text-gray-600">
//         {formatDate(new Date(task?.subTasks[0]?.date))}

//     </span>
//     <span className="bg-blue-600/10 px-3 py-1 rounded0full text-blue-700 font-medium"> {task?.subTasks[0].tag}</span>
// </div>

// </div>

//      ) : (

//         <>
//         <div className="py-4 border-t border-gray-200">
//             <span className="text-gray-500">No Sub Task

//             </span>


//         </div>
        
        
//         </>
//      )}

// <div className="w-full pb-2 mt-4">
//     <button
//     onClick={() =>setOpen(true)}
//     disabled={user.isAdmin ? false : true}
//     className="w-full flex gap-3  items-center  text-sm text-gray-500 font-semibold disabled:cursor-not-allowed disabled::text-gray-300 ">

//         <IoMdAdd className="text-lg" />
//         <span>ADD SUBTASK</span>

//     </button>

// </div>


//     </div>

//     <AddSubTask open={open} setOpen={setOpen} id={task._id} />

//     </>


//   );
// };

// export default TaskCard;














import clsx from "clsx";
import { useState } from "react";
import {
    MdAttachFile,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { BGS, formatDate, PRIOTITYSTYELS, TASK_TYPE } from "../Utils";
import TaskDialog from "./Task/TaskDialog";
import { BiMessageDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import UserInfo from "./UserInfo";
import AddSubTask from "./Task/AddSubTask";

const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
    const { user } = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="w-full h-full bg-white shadow-md p-5 rounded mb-4 flex flex-col">
                
                {/* Top Section: Priority & Three-Dot Menu */}
                <div className="w-full flex items-center justify-between">
                    
                    {/* Priority Label */}
                    <div className={clsx("flex items-center gap-1 text-sm font-medium", PRIOTITYSTYELS[task?.priority])}>
                        <span className="text-lg">{ICONS[task?.priority]}</span>
                        <span className="uppercase">{task?.priority} Priority</span>
                    </div>

                    {/* Three-Dot Menu (TaskDialog) */}
                    {user?.isAdmin && <TaskDialog task={task} />}
                </div>

                {/* Task Title & Status */}
                <div className="flex items-center gap-4 border-9 border-white">
                    <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])} />
                    <h4 className="line-clamp-1 text-black">{task?.title}</h4>
                </div>
                <span className="text-sm text-gray-600">{formatDate(new Date(task?.date))}</span>

                <div className="w-full border-t border-gray-200 my-2" />

                {/* Task Details */}
                <div className="flex items-center justify-between mb-4">
                    
                    {/* Icons Section */}
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1 items-center text-sm text-gray-600">
                            <BiMessageDetail />
                            <span>{task?.activities?.length}</span>
                        </div>
                        <div className="flex gap-1 items-center text-sm text-gray-600">
                            <MdAttachFile />
                            <span>{task?.assets?.length}</span>
                        </div>
                        <div className="flex gap-1 items-center text-sm text-gray-600">
                            <FaList />
                            <span>{task?.subTasks?.length}</span>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="flex flex-row-reverse">
                        {task?.team?.map((m, index) => (
                            <div key={index} className={clsx("w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-0", BGS[index % BGS?.length])}>
                                <UserInfo user={m} />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Subtasks Section */}
                {task?.subTasks?.length > 0 ? (
                    <div className="py-5 border-t border-gray-200">
                        <h5 className="text-base line-clamp-1 text-black">{task?.subTasks[0].title}</h5>
                        <div className="p-4 space-x-8 mt-3">
                            <span className="text-sm text-gray-600">{formatDate(new Date(task?.subTasks[0]?.date))}</span>
                            <span className="bg-blue-600/10 px-3 py-1 rounded-full text-blue-700 font-medium">{task?.subTasks[0].tag}</span>
                        </div>
                    </div>
                ) : (
                    <div className="py-4 border-t border-gray-200">
                        <span className="text-gray-500">No Sub Task</span>
                    </div>
                )}

                {/* Add Subtask Button */}
                <div className="w-full pb-2 mt-4">
                    <button
                        onClick={() => setOpen(true)}
                        disabled={!user.isAdmin}
                        className="w-full flex gap-3 items-center text-sm text-gray-500 font-semibold disabled:cursor-not-allowed disabled:text-gray-300"
                    >
                        <IoMdAdd className="text-lg" />
                        <span>ADD SUBTASK</span>
                    </button>
                </div>
            </div>

            {/* Add Subtask Modal */}
            <AddSubTask open={open} setOpen={setOpen} id={task._id} />
        </>
    );
};

export default TaskCard;








