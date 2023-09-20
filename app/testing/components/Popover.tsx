import { Popover } from '@headlessui/react'

export function MyPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <div>Analytics</div>
          <div>Engagement</div>
          <div>Security</div>
          <div>Integrations</div>
        </div>
      </Popover.Panel>
    </Popover>
  )
}