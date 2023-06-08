import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react"
import Typed from "typed.js"

export interface SplashProps {
  name: string
  profession: string[]
  professionSuffix: string
  subtitle: string
  coverImgLink: string
  social: {
    icon: string
    href: string
    name: string
  }[]
}

const Splash = (props: SplashProps) => {
  // Create reference to store the DOM element containing the animation
  const iamRef = useRef<any>(null)
  // Create reference to store the Typed instance itself
  const typed = useRef<any>(null)

  useEffect(() => {
    const options = {
      strings: props.profession,
      smartBackspace: true,
      startDelay: 1000,
      typeSpeed: 130,
      backDelay: 1000,
      backSpeed: 60,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(iamRef.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [props.profession])
  return (
    <section className="" id="home">
      <div className="min-h-[80vh] flex flex-col md:flex-row">
        {/* Social Buttons */}
        <div className="flex flex-row md:flex-col justify-center text-2xl text-violet-500">
          {props.social.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className=""
              target="_blank"
              aria-label={social.name}
            >
              <Icon icon={social.icon} className="m-3" />
            </a>
          ))}
        </div>
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="mx-4 order-2 md:order-1 flex flex-col gap-6 justify-center">
            <h1 className="text-5xl font-bold">
              Hi, I{"'"}m {props.name}
            </h1>
            <h2 className="text-2xl text-gray-500">
              I am <span ref={iamRef}></span> {props.professionSuffix}
            </h2>
            <p className="">{props.subtitle}</p>
            <button className="bg-violet-500 text-white dark:text-[wheat] rounded-lg self-start">
              <a href="#contact" className="flex items-center p-4">
                Contact Me
                <Icon icon="uil:message" className="" />
              </a>
            </button>
          </div>
          <img
            src={props.coverImgLink}
            alt={props.name}
            className="w-full rounded-full object-cover p-[15%] order-1 md:order-2"
          />
        </div>
      </div>
      <div className="mt-[4rem]">
        <a href="#about" className="flex items-center px-4 py-2">
          <Icon icon="uil:mouse-alt" className="text-violet-500 text-3xl" />
          <span className="">Scroll Down</span>
          <Icon icon="uil:arrow-down" className="text-violet-500 text-3xl" />
        </a>
      </div>
    </section>
  )
}
export default Splash
