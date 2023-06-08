import { createContext } from "react"

export type addNotification = (message: string) => void

export const NotificationContext = createContext<addNotification>(() => {})
