import { PayloadAction } from "@reduxjs/toolkit"

export default async (action: () => Promise<PayloadAction<any>>, prop: string = '') => {
  const result = await action()

  if (prop) return result.payload[prop]
  else return result.payload
}
