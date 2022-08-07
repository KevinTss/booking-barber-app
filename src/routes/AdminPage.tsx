import {useBookings} from "../hooks"

export const AdminPage = () => {
  const {isLoading, bookings} = useBookings()

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