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
import { Box } from '@mui/material';
import { Deleting } from '@/Services/DataServices'
import { updateArchive } from '@/Services/DataServices';
import ColorPopper from '../Colorpopper';

function NotesCol({ notes, updatecolor,getData }) {
    const [ptoggle, setpToggle] = React.useState(true);
    const [showIcon, setshowIcon] = React.useState(true)
    const updateArchive1 = async () => {
        let archive = { noteIdList: [notes.id], isArchived: true }
        let response = await updateArchive(archive);
        getData()
        console.log(response)
    }
    const Delete1 = async () => {
        
        let deletenote = { noteIdList: [notes.id], isDeleted: true }
        console.log(deletenote)
        let response = await Deleting(deletenote);
        getData()
        console.log(response)
    }
    return (
        <div className='h-22 flex flex-col'>
            
                <Box className='mb-3 min-h-22  xs:ml-[0vw] xs:w-[98%] max:sm:ml-[0] max:sm:w-[98%] sm:ml-[0vw] sm:w-[90%] md:ml-[2vw] md:w-[88%] lg:ml-[7vw] lg:w-[70%]  xl:w-[54%] xl:ml-[13vw] xl 2xl   rounded-lg border-1 border-slate-400' sx={{ boxShadow: "1px 1px 5px 1px rgb(180, 176, 176)" }}  style={{backgroundColor:notes.color}}>
                    <div className='p-2 relative w-full' >
                        {showIcon && <CheckCircleIcon className='absolute -top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-slate-300' />}
                        <div className='h-[7vh] sm:h-[5vh]  w-full   flex justify-between items-center'>
                            {/* Title output field */}
                            <div
                                className='h-full w-[95%] text-slate-600 focus:outline-none'
                            // contentEditable='true'
                            >{notes?.title}</div>
                            <div className='h-[5vh] w-[6%]  flex justify-center items-center hover:bg-slate-300 rounded-[50%]' onClick={() => setpToggle(!ptoggle)}>
                                {showIcon && (ptoggle ? <PushPinOutletIcon /> : <PushPinIcon />)}
                            </div>
                        </div>
                        <div className='w-full min-h-10 h-auto border-none'>
                            <div className='w-full'>
                                {/* Note output field */}
                                <div
                                    name='note'
                                    id='note'
                                    contentEditable='true'
                                    className='flex-1 w-full focus:outline-none p-2  min-h-[0] resize-none'
                                > {notes?.description}
                                </div>
                            </div>
                            {/* Note input field icons */}
                            <div className='h-[5vh] w-full flex justify-between '>
                                {showIcon && <div className='h-full w-full flex justify-between items-center '>
                                    <div className='h-full w-[60%]   flex justify-between items-center'>
                                        <div className='h-full w-[10%]  flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <AddAlertIcon />
                                        </div>
                                        <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <PersonAddAltIcon />
                                        </div>
                                        <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            {/* <ColorLensIcon action="edit" Noteid={notes.id} updatecolor={updatecolor} /> */}
                                            <ColorPopper action="edit" Noteid={notes.id} updatecolor={updatecolor} />
                                        </div>
                                        <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <ImageIcon />
                                        </div>
                                        <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <ArchiveIcon onClick={updateArchive1} />
                                        </div>
                                        <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <DeleteOutlineIcon onClick={Delete1} />
                                        </div>
                                        <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                            <MoreVertIcon />
                                        </div>
                                    </div>

                                </div>}
                            </div>
                        </div>
                    </div>
                </Box>
            

        </div>
    );
}

export default NotesCol;
