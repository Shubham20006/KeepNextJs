"use client"

import React from 'react';
import PushPinOutletIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLensOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Deleting } from '@/Services/DataServices'
import { updateArchive } from '@/Services/DataServices';
import ColorPopper from '../Colorpopper';

function NotesRow({ notes, updatecolor,getData }) {
    console.log(notes.color)
    const [ptoggle, setpToggle] = React.useState(true);
    const [showIcon, setshowIcon] = React.useState(true);

    const updateArchive1 = async () => {
        let archive = { noteIdList: [notes.id], isArchived: true };
        let response = await updateArchive(archive);
        getData()
        console.log(response);
    };
    const Delete1 = async () => {
        let deletenote = { noteIdList: [notes.id], isDeleted: true }
        let response = await Deleting(deletenote);
        getData()
        console.log(response)
    }

    return (
        
        <div className='w-[18vw] rounded-lg shadow-sm shadow-slate-900'>
        
                <div key={notes.id} className='h-auto rounded-lg border-1 border-slate-400 shadow-lg  ' style={{backgroundColor:notes.color}}>

                    <div className=' p-2 w-full'>
                        {showIcon && (
                            <CheckCircleIcon className='absolute -top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 fill-slate-500' />
                        )}
                        <div className='h-[15%] sm:h-[20%] w-full flex justify-between items-center'>
                            {/* Title output field */}
                            <div className='h-full w-[95%] text-slate-600 focus:outline-none'>
                                {notes?.title}
                            </div>
                            <div className='h-[5vh] w-[6%] flex justify-center items-center hover:bg-slate-300 rounded-[50%]' onClick={() => setpToggle(!ptoggle)}>
                                {showIcon && (ptoggle ? <PushPinOutletIcon /> : <PushPinIcon />)}
                            </div>
                        </div>
                        <div className='mt-2 w-full h-auto'>
                            <div className='w-full'>
                                {/* Note output field */}
                                <div
                                    name='note'
                                    id='note'
                                    contentEditable='true'
                                    className='flex-1 w-full focus:outline-none p-2 border-none min-h-[0] resize-none'
                                >
                                    {notes?.description}
                                </div>
                            </div>
                            {/* Note input field icons */}
                            <div className='mt-2 h-[5vh] w-full flex justify-between'>
                                {showIcon && (
                                    <div className='h-full w-full flex justify-between items-center'>
                                        <div className='h-full w-[16%] flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <AddAlertIcon className='h-4 w-4 ' />
                                        </div>
                                        <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <PersonAddAltIcon className='h-4 w-4' />
                                        </div>
                                        <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            {/* <ColorLensIcon className='h-4 w-4' action="edit" Noteid={notes.id} updatecolor={updatecolor} /> */}
                                            <ColorPopper action="edit" Noteid={notes.id} updatecolor={updatecolor} />
                                        </div>
                                        <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <ImageIcon className='h-4 w-4' />
                                        </div>
                                        <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <ArchiveIcon className='h-4 w-4' onClick={updateArchive1} />
                                        </div>
                                        <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <DeleteOutlineIcon onClick={Delete1} />
                                        </div>
                                        <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <MoreVertIcon className='h-4 w-4' />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default NotesRow;
