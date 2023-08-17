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
import { Box, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import { createNote } from '@/Services/DataServices';
import ColorPopper from './Colorpopper';


function TakeNoteTwo({ closeDesc,getData }) {

    const [showIcon, setshowIcon] = React.useState(true)
    const [pinToggle, setpinToggle] = React.useState(true)

    const redirectTakeOne = () => {
        props.listenTakeNoteTwo()
    }

    const [data, setData] = React.useState({
        title: '',
        description: '',
        color: "",
        isArchived: false
    })
    const setTitle = (e) => {
        setData({ ...data, title: e.target.value })
    }
    const setDiscription = (e) => {
        setData({ ...data, description: e.target.value })
    }
    const createArchive = () => {
        setData((prevState) => ({ ...prevState, isArchived: true }))
    }
    const Submit = async () => {
        let response = await createNote(data)
        getData();
        console.log(response)
    }

    return (
        <>
        <div className='p-2 mb-8 mb-8 xs:ml-[0vw] xs:w-[100%] max:sm:ml-[0] max:sm:w-[100%] sm:ml-[0vw] sm:w-[90%] md:ml-[2vw] md:w-[88%] lg:ml-[7vw] lg:w-[70%]  xl:w-[54%] xl:ml-[13vw] xl 2xl rounded-lg border-1 border-slate-400 shadow-md'style={{backgroundColor:data.color}}>
            {/* <div className='p-2 mb-8 mb-8 xs:ml-[0vw] xs:w-[100%] max:sm:ml-[0] max:sm:w-[100%] sm:ml-[0vw] sm:w-[90%] md:ml-[2vw] md:w-[70%] lg:ml-[7vw] lg:w-[60%]  xl:w-[54%] xl:ml-[13vw] xl:w-[50vw] 2xl:w-[40vw] rounded-lg border-1 border-slate-400 shadow-md'> */}
                <div className='w-full'>
                    <div className='h-[13%] sm:h-[20%] w-full flex justify-between items-center'>
                        {/* Title input field */}
                        <input className='h-full w-[95%] text-slate-600 focus:outline-none text-md 'style={{backgroundColor:data.color}} placeholder='Title' contenteditable="true" onChange={setTitle} onDoubleClick={closeDesc} ></input>
                        <div className='h-[5vh] w-[5%]   flex justify-center items-center hover:bg-slate-300 rounded-[50%]  text-slate-600' onClick={() => setpinToggle(!pinToggle)}>
                            {pinToggle ? <PushPinOutletIcon /> : <PushPinIcon />}
                        </div>
                    </div>
                    <div className=' mt-2 w-full'>
                        <div className='w-full'>
                            {/* Note input field */}
                            <TextareaAutosize name="note" id="note" cols="30" rows="2" placeholder='Take a note...'
                                className='w-full text-md focus:outline-none 'style={{backgroundColor:data.color}} onChange={setDiscription}></TextareaAutosize>
                        </div>
                        {/* Note input field icons */}
                        <div className='mt-2 h-[6vh] w-full flex justify-between'>
                            {showIcon &&
                                <div className='h-full w-full flex justify-between items-center'>
                                    <div className='h-full w-[50%]  flex justify-between items-center'>
                                        <div className='h-[80%] w-[10%]  flex justify-center items-center hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                            <AddAlertIcon />
                                        </div>
                                        <div className='h-[80%] w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                            <PersonAddAltIcon />
                                        </div>
                                        <div className='h-[80%] w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                            {/* <ColorLensIcon /> */}
                                            <ColorPopper fontSize='small' action="create" setData={setData} />
                                        </div>
                                        <div className='h-[80%] w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                            <ImageIcon />
                                        </div>
                                        <div className='h-[80%] w-[10%] flex  items-center  justify-center hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                            <ArchiveIcon onClick={createArchive} />
                                        </div>
                                        <div className='h-[80%] w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%] text-slate-700 hover:text-slate-900'>
                                            <MoreVertIcon className='h-1/2' />
                                        </div>
                                    </div>
                                    <div className='h-[80%] w-[15%] flex justify-center items-center rounded-sm  text-sm hover:bg-slate-200' onClick={() => {
                                        Submit(),
                                        closeDesc(),
                                        redirectTakeOne()
                                    }}>
                                        Close
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeNoteTwo
