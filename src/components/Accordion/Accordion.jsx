import React, { createContext, useContext, useState } from 'react'
import AccordionItem from './AccordionItem';


const AccordionContext = createContext();


// here we read the context and get hold of it 
export const useAccordionContext = () => {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error('Accordion related components must be wrapped by <Accordion>')
    }


    return ctx;
}


const Accordion = ({ children, className }) => {

    const [openItemId, setOpenItemId] = useState();


    const toggleItem = (id) => {
        setOpenItemId(prevId => prevId === id ? null : id)
    }

    const contextValue = {
        toggleItem,
        openItemId
    }

  return (
    <AccordionContext.Provider value={contextValue}>
        <ul className={className}>
        {children}
        </ul>
    </AccordionContext.Provider>
  )
}

export default Accordion;



// this will allow us to use the Accordion item component without importing it wherever is is used
Accordion.Item = AccordionItem
