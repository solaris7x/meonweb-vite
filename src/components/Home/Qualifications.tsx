import { Icon } from "@iconify/react"
import InfoGridItem from "./Qualifications/InfoGridItem"

export interface QualificationsProps {
  tabs: TabProps[]
}

interface TabProps {
  icon: string
  title: string
  items: {
    title: string
    subtitle: string
    dateString: string
  }[]
}

// TODO: Add info tab change on click
const Qualifications = (props: QualificationsProps) => {
  // Will Be undefined if no tabs are passed
  const infoItem = props.tabs[0]?.items
  // console.log(infoItem)
  return (
    <section className="mt-16" id="qualification">
      <h2 className="text-4xl font-bold text-center">Qualifications</h2>
      <div className="text-gray-500 text-center">
        My Educational Qualification & Work Experience
      </div>
      {/* Tab Names List */}
      <div className="flex justify-center gap-4">
        {/* Item */}
        {props.tabs.map((tab, index) => (
          <div key={index} className="mt-6 flex items-center">
            <Icon icon={tab.icon} className="text-4xl text-violet-500 mx-1" />
            <h3 className="text-2xl font-semibold">{tab.title}</h3>
          </div>
        ))}
      </div>
      {/* Items div block */}
      <div className="md:mx-16 my-8">
        {/* Item Grid*/}
        {infoItem?.map((item, index) => {
          const skipGridItem = index % 2 === 0
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_max-content_1fr] gap-4"
            >
              {/* Left div */}
              {skipGridItem ? <InfoGridItem {...item} /> : <span />}
              {/* Middle Line */}
              <div className="flex flex-col items-center">
                <div className="inline-block w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="w-1 h-full bg-violet-500"></div>
              </div>
              {/* Right div */}
              {!skipGridItem ? <InfoGridItem {...item} /> : <span />}
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Qualifications
