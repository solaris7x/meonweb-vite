import { Icon } from "@iconify/react"

export interface SkillItemProps {
  /**
   * Iconify icon name
   * https://icon-sets.iconify.design/
   */
  icon: string
  /**
   * Name of the skill
   */
  title: string
}

const SkillItem = (props: SkillItemProps) => {
  return (
    <li className="py-4 border-b border-purple-400">
      <div className="flex items-center">
        {/* Logo */}
        {/* DARK: logo bg */}
        <Icon
          icon={props.icon}
          className="mx-2 p-1 rounded-lg text-5xl max-w-[4rem] dark:bg-gray-200"
        />
        {/* Title */}
        <div className="text-xl text-right font-semibold ml-auto">
          {props.title}
        </div>
      </div>
    </li>
  )
}
export default SkillItem
