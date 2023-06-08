import { Icon } from "@iconify/react";
import ContactForm from "./ContactMe/ContactForm";

export interface ContactMeProps {
  items: {
    icon: string;
    title: string;
    subtitle: string;
    link?: string;
  }[];
}

const ContactMe = (props: ContactMeProps) => {
  return (
    <section className="mt-16" id="contact">
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <div className="text-gray-500 text-center">
        Want to connect? My inbox is always open!
      </div>
      <div className="my-12 flex flex-col md:flex-row">
        <div className="md:basis-1/3">
          {props.items.map((item, index) => (
            // Item
            <a key={index} href={item.link || "#"}>
              <button className="flex justify-center items-center p-2">
                <Icon icon={item.icon} className="text-4xl text-violet-500" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-left">{item.title}</h3>
                  <div className="text-gray-600">{item.subtitle}</div>
                </div>
              </button>
            </a>
          ))}
        </div>
        <div className="md:basis-2/3 mx-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
