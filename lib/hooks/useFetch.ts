import { useEffect, useState } from "react"

interface UseFetchState<T> {
  data: T | null
  error: Error | null
  loading: boolean
}

export function useFetch<T>(url: string): UseFetchState<T> {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        const json = await res.json()
        setState({
          data: json.data,
          error: null,
          loading: false,
        })
      } catch (error) {
        setState({
          data: null,
          error: error instanceof Error ? error : new Error("Unknown error"),
          loading: false,
        })
      }
    }

    fetchData()
  }, [url])

  return state
}

interface MutationState {
  loading: boolean
  error: Error | null
}

export function useMutation(
  url: string,
  method: "POST" | "PUT" | "DELETE" = "POST",
) {
  const [state, setState] = useState<MutationState>({
    loading: false,
    error: null,
  })

  const mutate = async (data?: any) => {
    setState({ loading: true, error: null })
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: data ? JSON.stringify(data) : undefined,
      })

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

      const result = await res.json()
      setState({ loading: false, error: null })
      return result
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Unknown error")
      setState({ loading: false, error: err })
      throw err
    }
  }

  return { ...state, mutate }
}
