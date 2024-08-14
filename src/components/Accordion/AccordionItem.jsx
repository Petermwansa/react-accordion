import React, { Children } from 'react'
import { useAccordionContext } from './Accordion'

const AccordionItem = ({ id, className, children, title }) => {

    // here we destructure the context hook 
    const { toggleItem, openItemId } = useAccordionContext();


    // here we check if the openItem id is equal to the id we receive by the .
    const isOpen = openItemId === id



  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div className={ isOpen ? 'accordion-item-content open' : 'accordion-item-content' }>
        {children}
      </div>
    </li>
  )
}

export default AccordionItem
