import { useState } from 'react'
import { usePopper } from 'react-popper'
import { Placement } from '@popperjs/core'
import { Popover as HPopover} from '@headlessui/react'

import popstyles from './Popover.module.scss'
import classNames from 'classnames'

interface PopoverProps {
    classname?: string
    renderButton: ()=> JSX.Element
    renderPanel: ()=>JSX.Element
    placementPanel?: Placement
    offsetX?: number
    offsetY?: number
}

export const Popover = (props: PopoverProps) => {
  const {renderButton, renderPanel, placementPanel, classname, offsetX, offsetY} = props
  const [referenceElement, setReferenceElement] = useState<null | HTMLElement>()
  const [popperElement, setPopperElement] = useState<null | HTMLElement>()
  
  const { styles, attributes } = usePopper(referenceElement, popperElement, 
    {placement: placementPanel, 
      modifiers: [{
        name: 'offset',
        options: {
          offset: [offsetX, offsetY]
        }
      }]
    })
  
  const buttonCls = classNames(popstyles['pop-button'], classname)

  return (
    <HPopover>
      
      <HPopover.Button 
        as={'div'} 
        ref={setReferenceElement} 
        className={buttonCls}>{renderButton()}
      </HPopover.Button>

      <HPopover.Panel
        className={popstyles['pop-panel']}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {renderPanel()}
      </HPopover.Panel>
      
    </HPopover>
  )
}