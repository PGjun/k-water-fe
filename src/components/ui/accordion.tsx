'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

//프롭스 추가는 extends로 하면 됨
interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  tag?: string
}

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-[#C4C4C4] data-[state=closed]:border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, tag, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex flex-col gap-1 py-[20px] md:flex-row md:gap-[75px] [&[data-state=open]>span]:text-[#3162FD]">
    <span className="pl-[32px] text-[12px] leading-[19.09px] text-[#888888] md:pl-0 md:text-[16px]">
      {tag}
    </span>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 justify-between font-medium transition-all [&[data-state=open]>div>h1]:font-bold [&[data-state=open]>div>h1]:text-[#333333] [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#3162FD]',
        className,
      )}
      {...props}
    >
      <div className="flex gap-[20px]">
        <span className="font-bold leading-[19.09px] text-[#3162FD]">Q</span>
        <h1 className="text-start leading-[19.09px] text-[#666666] group-hover:text-[#333333]">
          {children}
        </h1>
      </div>
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>
      <div className="flex gap-[20px]">
        <span className="font-bold text-[#333333]">A</span>
        <span className="text-[#888888]">{children}</span>
      </div>
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
