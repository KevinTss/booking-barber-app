import { useAuth, useBookings, useUnAuthOnly } from "../hooks"

export const AdminPage = () => {
  useUnAuthOnly()
  const { user } = useAuth()
  const { isLoading, bookings } = useBookings({ enabled: !!user })

    return (
      <main>
        <h2>Admin</h2>
        <ul>
          {isLoading
            ? <p>Loading...</p>
            : bookings.map((booking: {id: string}) => <li key={booking.id}>{booking.id}</li>)}
        </ul>
      </main>
    );
  }
