import SkillList, { SkillListProps } from "./Skills/SkillList"

export interface SkillsProps {
  skillLists: SkillListProps[]
}

const Skills = (props: SkillsProps) => {
  return (
    <section className="mt-16" id="skills">
      <h1 className="text-4xl font-bold text-center">Skills</h1>
      <div className="text-gray-500 text-center">
        Some of my Technical Skills
      </div>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {props.skillLists.map((skillList, index) => (
          <SkillList key={index} {...skillList} />
        ))}
      </div>
    </section>
  )
}
export default Skills
