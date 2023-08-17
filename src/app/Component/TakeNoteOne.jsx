"use client"
import BrushIcon from '@mui/icons-material/BrushOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';



function TakeNoteOne({openDesc}) {
    
    return (
        // <div className='p-2 mb-8 mb-8 h-[7vh]
        // xs:ml-[0vw] xs:w-[100%] max:sm:ml-[0] max:sm:w-[100%] sm:ml-[0vw] sm:w-[90%] md:ml-[2vw] md:w-[70%] lg:ml-[7vw] lg:w-[60%]  xl:w-[54%] xl:ml-[13vw] xl:w-[50vw] 2xl:w-[40vw]  
        //  rounded-lg border-1 border-slate-400 shadow-md'>
        <div className='p-2 mb-8 mb-8 h-[7vh] xs:ml-[0vw] xs:w-[100%] max:sm:ml-[0] max:sm:w-[100%] sm:ml-[0vw] sm:w-[90%] md:ml-[2vw] md:w-[88%] lg:ml-[7vw] lg:w-[70%]  xl:w-[54%] xl:ml-[13vw] xl 2xl   rounded-lg border-1 border-slate-400 shadow-md'>
            <div className=' h-full w-full   flex justify-between items-center px-2' >
                <input
                    className='h-full w-[72%] text-slate-700 focus:outline-none text-md' placeholder='Take a Note....'
                    contenteditable="true"
                    onClick={openDesc}
                />

                <div className=' h-[7vh] w-[28%] flex justify-between items-center'>
                    <div className='h-full w-[25%]  flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-500 hover:text-slate-800'>
                        <CheckBoxIcon />
                    </div>
                    <div className='h-full  w-[25%]  flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-500 hover:text-slate-800'>
                        <BrushIcon />
                    </div>
                    <div className='h-full  w-[25%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-500 hover:text-slate-800'>
                        <ImageIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeNoteOne