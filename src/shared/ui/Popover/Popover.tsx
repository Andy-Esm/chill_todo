import { Popover as HPopover } from '@headlessui/react'
import { Placement } from '@popperjs/core'
import classNames from 'classnames'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import popstyles from './Popover.module.scss'

interface PopoverProps {
  classname?: string
  offsetX?: number
  offsetY?: number
  placementPanel?: Placement
  renderButton: () => JSX.Element
  renderPanel: () => JSX.Element
}

export const Popover = (props: PopoverProps) => {
  const { classname, offsetX, offsetY, placementPanel, renderButton, renderPanel } = props
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>()
  const [popperElement, setPopperElement] = useState<HTMLElement | null>()

  const { attributes, styles } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [offsetX, offsetY],
        },
      },
    ],
    placement: placementPanel,
  })

  const buttonCls = classNames(popstyles['pop-button'], classname)

  return (
    <HPopover>
      <HPopover.Button as={'div'} className={buttonCls} ref={setReferenceElement}>
        {renderButton()}
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
