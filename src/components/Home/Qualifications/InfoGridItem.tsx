import { Icon } from "@iconify/react"

interface InfoGridItemProps {
  title: string
  subtitle: string
  dateString: string
}

const InfoGridItem = (props: InfoGridItemProps) => {
  return (
    <div className="w-full">
      {/* Title */}
      <div className="text-xl font-bold">{props.title}</div>
      {/* Subtitle */}
      <div className="text-gray-500">{props.subtitle}</div>
      {/* Year */}
      <div className="flex items-center gap-2">
        <Icon icon="clarity:date-line" className="text-xl text-violet-500" />
        <div className="text-gray-500 font-light">{props.dateString}</div>
      </div>
    </div>
  )
}
export default InfoGridItem
