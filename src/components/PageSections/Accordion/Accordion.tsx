"use client"
// components/Accordion.tsx
import { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-950">
            <button
                className="w-full flex  p-4 py-8 text-left"
                onClick={toggleAccordion}
            >     <span className="text-lg pr-8 font-bold">
                    {isOpen ? '-' : '+'}
                </span>
                <span className="text-lg font-bold">{title}</span>
           
            </button>
            {isOpen && (
                <div className="p-4  pb-10 bg-[#5e7680]">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

interface AccordionProps {
    items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
          
        <div className="bg-gray-200 bg-opacity-25 rounded-3xl p-10 m-10">
            <div className="flex flex-col ">
                <div className=' flex flex-col justify-center items-center text-center text-white pb-10'>
                    <h1 className='font-mono pb-8 text-[35px] font-extrabold'>Most Trusted Cryptocurrency Platform</h1>
                    <h4 className='text-xl max-w-2xl' >Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus .</h4>
                </div>
                <div className='bg-[#5e7680] rounded-xl p-6'>

                    {items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>

            </div>
      
          </div>
          
          
          
          
   
    );
};

export default Accordion;
