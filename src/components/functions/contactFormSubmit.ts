import { useContext } from "react"
import { SubmitHandler } from "react-hook-form"
import { NotificationContext } from "../Context/notification"

export interface ContactFormValuesType {
  name: string
  email: string
  subject: string
  message: string
}

// Unused as function needs notification context
// const contactFormSubmit: SubmitHandler<ContactFormValuesType> = async (
//   data,
//   event
// ) => {
//   // Get notification context
//   // const addNotification = useContext(NotificationContext)

//   console.log({ data, event })
//   try {
//     const formfetch = await fetch(`${process.env.NEXT_PUBLIC_FORMPOST_URL}`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         Accept: "application/json",
//       },
//     })
//     if (!formfetch.ok)
//       throw new Error(
//         `Error while sending form: ${formfetch.status} ${formfetch.statusText}`
//       )
//     console.log("✅Submitted the form")
//   } catch (error) {
//     console.log({ error })
//     console.log("❌Cloudn't submit the form")
//   }
// }

// export default contactFormSubmit
