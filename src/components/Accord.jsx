import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <div className="border-b">
            <button className="w-full text-left py-3 flex justify-between items-center focus:outline-none" onClick={toggleAccordion}>
                <span className='font-bold text-[17px] w-[80%]'>{title}</span>
                <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
            </button>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="pb-4">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const toggleCheckbox1 = () => {
        setIsChecked1(!isChecked1);
    };

    const [isChecked2, setIsChecked2] = useState(false);
    const toggleCheckbox2 = () => {
        setIsChecked2(!isChecked2);
    };

    return (
        <div className="">
            <AccordionItem title="Delivery options & services" content={
                <div>
                    <div className='flex items-center gap-1'>
                        <button onClick={toggleCheckbox1}>
                            <span className='text-2xl'>{isChecked1 ?  <IoCheckbox /> : <IoCheckboxOutline />}</span>
                        </button>
                        <p>Choice</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button onClick={toggleCheckbox2}>
                            <span className='text-2xl'>{isChecked2 ?  <IoCheckbox /> : <IoCheckboxOutline />}</span>
                        </button>
                        <p>Free Shipping</p>
                    </div>
                </div>
            } />
            <AccordionItem title="Shipping from" content={
                <div>
                    <div className='flex items-center gap-1'>
                        <button onClick={toggleCheckbox2}>
                            <span className='text-2xl'>{isChecked2 ?  <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}</span>
                        </button>
                        <p>All</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button onClick={toggleCheckbox2}>
                        <span className='text-2xl'>{isChecked2 ?  <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}</span>
                        </button>
                        <p className='flex items-center gap-2'><img className='w-6' src="https://cdn-icons-png.flaticon.com/128/5327/5327538.png" alt="" /> Nigeria</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button onClick={toggleCheckbox2}>
                        <span className='text-2xl'>{isChecked2 ?  <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}</span>
                        </button>
                        <p className='flex items-center gap-2'><img className='w-6' src="https://cdn-icons-png.flaticon.com/128/5111/5111624.png" alt="" /> China</p>
                    </div>
                </div>
            } />
            <AccordionItem title="Discounts" content={
                <div>
                    <div className='flex items-center gap-1'>
                        <button onClick={toggleCheckbox2}>
                            <span className='text-2xl'>{isChecked2 ?  <IoCheckbox /> : <IoCheckboxOutline />}</span>
                        </button>
                        <p>Sale</p>
                    </div>
                </div>
            } />
            <AccordionItem title="Price" content={
                <div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <input type="text" value={'NGN'} className='border px-4 py-1 w-full rounded' />
                        </div>
                        <span>-</span>
                        <div>
                        <input type="text" value={'NGN'} className='border px-4 py-1 w-full rounded' />
                        </div>
                        <button className='bg-black text-white px-3 py-1 rounded-md'>Ok</button>
                    </div>
                </div>
            } />
        </div>
    );
};

export default Accordion;