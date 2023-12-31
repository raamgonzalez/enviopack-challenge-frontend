import { useEffect, useRef, useState } from 'react'

export function useSearch (search) {
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede realizar una busqueda vacia')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('La busqueda no puede ser un numero')
      return
    }

    setError(null)
  }, [search])

  return { error }
}
