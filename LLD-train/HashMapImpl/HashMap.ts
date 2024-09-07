import MapEntry from "./MapEntry"
import { Md5 } from "ts-md5"

class HashMap {
  DEFAULT_SIZE:number = 16
  MAX_CAPACITY:number = 1 << 30

  hashTable:MapEntry[] = []

  constructor(size?: number)  {
    if(!size)
      this.hashTable = new Array(this.DEFAULT_SIZE)
    else  {
      const nearsetPowerOfTwo = this.tableSizeFor(size)
      this.hashTable = new Array(size)
    }
  }

  tableSizeFor(capacity: number)  {
    let n = capacity - 1
    n |= n >> 1
    n |= n >> 2
    n |= n >> 4
    n |= n >> 8
    n |= n >> 16
    return (n < 0) ? 1 : (n >= this.MAX_CAPACITY) ? this.MAX_CAPACITY : n + 1
  }

  put(key: string, value: any): void {
    const index = Number(Md5.hashStr(JSON.stringify(value))) % this.hashTable.length
    let entry : MapEntry | null = this.hashTable[index]

    if(!entry)  {
      this.hashTable[index] = new MapEntry(key, value, null)
      return
    }
    else  {
      var prevNode: MapEntry | null = entry.getNext()
      while(entry)  {
        if(entry.getKey() === key)  {
          entry.setValue(value)
          return
        }
        prevNode = entry
        entry = entry.getNext() 
      }
      if(prevNode)
        prevNode.next = new MapEntry(key, value, null)
    }
  }

  get(key: string): any {
    const index = Number(Md5.hashStr(JSON.stringify(key))) % this.hashTable.length
    let entry : MapEntry | null = this.hashTable[index]

    while(entry)  {
      if(entry.getKey() === key)
        return entry.getValue()
      entry = entry.getNext()
    }
    return null
  }

}

export default HashMap