import { Icon } from "@iconify/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NotificationContext } from "../../Context/notification";
import { ContactFormValuesType } from "../../functions/contactFormSubmit";

const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormValuesType>();

  // Get notification context
  const addNotification = useContext(NotificationContext);

  return (
    <form
      className="grid grid-cols-1 gap-4 text-black"
      onSubmit={handleSubmit(async (data, event) => {
        // console.log({ data, event })
        try {
          const formfetch = await fetch(
            `${import.meta.env.NEXT_PUBLIC_FORMPOST_URL}`,
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                Accept: "application/json",
              },
            }
          );
          if (!formfetch.ok)
            throw new Error(
              `Error while sending form: ${formfetch.status} ${formfetch.statusText}`
            );
          console.log("✅Submitted the form");
          addNotification("✅Submitted the form");
        } catch (error) {
          console.log({ error });
          console.log("❌Cloudn't submit the form");
          addNotification("❌Cloudn't submit the form");
        }
      })}
      method="POST"
    >
      <div className="flex content-between gap-4">
        {/* Name */}
        <div className="p-2 bg-gray-200 rounded-md w-full">
          <label className="block text-sm text-gray-800">
            Name
            <input
              className="bg-transparent outline-none focus:outline-none w-full"
              type="text"
              {...register("name", { required: true })}
              required
            />
          </label>
        </div>
        {/* Email */}
        <div className="p-2 bg-gray-200 rounded-md w-full">
          <label className="block text-sm text-gray-800">
            Email
            <input
              className="bg-transparent outline-none focus:outline-none w-full"
              type="email"
              {...register("email", { required: true })}
              required
            />
          </label>
        </div>
      </div>
      {/* Subject */}
      <div className="p-2 bg-gray-200 rounded-md">
        <label className="block text-sm text-gray-800">
          Subject
          <input
            className="bg-transparent outline-none focus:outline-none w-full"
            type="text"
            {...register("subject", { required: true })}
            required
          />
        </label>
      </div>
      {/* Message */}
      <div className="p-2 bg-gray-200 rounded-md">
        <label className="block text-sm text-gray-800">
          Message
          <textarea
            className="bg-transparent outline-none focus:outline-none w-full"
            {...register("message", { required: true })}
            cols={0}
            rows={7}
            required
          />
        </label>
      </div>
      {/* Submit */}
      <div className="">
        <button
          type="submit"
          className="bg-violet-500 text-white dark:text-[wheat] rounded-lg p-2 flex items-center"
        >
          Send Message
          <Icon icon="uil:message" className="mx-1" />
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
