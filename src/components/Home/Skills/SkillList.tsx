import { Icon } from "@iconify/react"
import SkillItem, { SkillItemProps } from "./SkillItem"

export interface SkillListProps {
  icon: string
  title: string
  subtitle: string
  skills: SkillItemProps[]
}

const SkillList = (props: SkillListProps) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center">
        {/* Logo */}
        <Icon
          icon={props.icon}
          className="text-4xl text-violet-500 basis-1/6"
        />
        <div className="basis-4/6">
          {/* Title */}
          <div className="text-xl font-bold">{props.title}</div>
          {/* Subtitle */}
          <div className="text-gray-500 font-light">{props.subtitle}</div>
        </div>
        <Icon
          icon="uil:angle-down"
          className="ml-auto text-4xl text-violet-500 basis-1/6"
        />
      </div>
      {/* List */}
      <ul className="mt-8 mx-4 md:mx-10 ">
        {/* Item */}
        {props.skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} title={skill.title} />
        ))}
      </ul>
    </div>
  )
}
export default SkillList
