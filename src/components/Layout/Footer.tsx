import { Icon } from "@iconify/react"

export interface FooterProps {
  name: string
  subtitle: string
  links: {
    link: string
    title: string
  }[]
  social: {
    link: string
    icon: string
    name: string
  }[]
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-violet-500 text-white dark:text-[wheat] py-12 px-2 mt-10">
      <div className="flex flex-col md:grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4 mx-[10%]">
        {/* Footer Name */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">{props.name}</h1>
          <div className="my-4">{props.subtitle}</div>
        </div>

        {/* Footer Links */}
        <ul className="flex gap-4 justify-center">
          {props.links.map((link, index) => (
            <li key={index}>
              <a href={link.link} className="">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer Social */}
        <div className="flex gap-4 justify-center md:justify-end text-xl">
          {props.social.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              className=""
              aria-label={social.name}
            >
              <Icon icon={social.icon} className="" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="my-4 text-center text-gray-700">
        &#169; {props.name}. All rights reserved
      </p>
    </footer>
  )
}
export default Footer
