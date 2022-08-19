const SidebarMenuItem = ({text, Icon, active}) => {
  return (
    <div className="hoverEffect 
                    flex 
                    items-center 
                    text-gray-700 
                    justify-center 
                    xl:justify-start
                    text-base
                    space-x-3">
        <Icon className='h-6'/>
        <span className={`${active && 'font-bold'} hidden xl:inline`}>{text}</span>
    </div>
  )
}

export default SidebarMenuItem