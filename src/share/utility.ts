import { SearchBookState, BookCoversState } from '../types'

export const updateSearchBookState = (oldObject: SearchBookState, updatedProperties: object): SearchBookState => {
  return updateObject(oldObject, updatedProperties)
}
export const updateBookCoversState = (oldObject: BookCoversState, updatedProperties: object): BookCoversState => {
  return updateObject(oldObject, updatedProperties)
}

export const updateObject = (oldObject: object, updatedProperties: object): any => {
  return {
    ...oldObject,
    ...updatedProperties,
  }
}

export const cloneObj = (obj: any): any => {
  let copy

  // Handle the 3 simple types, and null or undefined
  if (null == obj || 'object' !== typeof obj) return obj

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = []
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = cloneObj(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {}
    for (const attr in obj) {
      // @ts-ignore
      if (obj.hasOwnProperty(attr)) copy[attr] = cloneObj(obj[attr])
    }
    return copy
  }

  throw new Error("Unable to copy obj! Its type isn't supported.")
}
