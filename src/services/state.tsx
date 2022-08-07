import {FC, ReactNode} from 'react'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

  
const queryClient = new QueryClient()

type Props = {
    children: ReactNode
}

export const StateProvider: FC<Props> = ({children}) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);