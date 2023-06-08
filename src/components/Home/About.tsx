import { Icon } from "@iconify/react"

export interface AboutProps {
  introduction: string
  resumeLink: string
}

const About = (props: AboutProps) => {
  return (
    <section className="mt-16" id="about">
      <h2 className="text-4xl font-bold text-center">About Me</h2>
      <div className="text-gray-500 text-center">My introduction</div>
      <div className="my-12">
        <div className="text-lg">{props.introduction}</div>
        <button className="my-2 bg-violet-500 text-white dark:text-[wheat] rounded-lg self-start">
          <a href={props.resumeLink} className="flex items-center p-4">
            Resume
            <Icon icon="uil:file-download-alt" className="" />
          </a>
        </button>
      </div>
    </section>
  )
}
export default About
