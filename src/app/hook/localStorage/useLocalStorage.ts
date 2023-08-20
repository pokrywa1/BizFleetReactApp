import { useState, useEffect } from 'react'

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? JSON.parse(storedValue) : initialValue

  const [value, setValue] = useState<T>(initial)

  const setLocalStorageValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : initialValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [key, initialValue])

  return [value, setLocalStorageValue]
}

export default useLocalStorage
