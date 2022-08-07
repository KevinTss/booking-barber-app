import {useQuery} from "@tanstack/react-query"
import {fireStore} from '../services/firebase'

type Booking = {
  id: string,
  service: string,
  date: Date,
  customerId: string
}

export const useBookings = () => {
    const {data, isLoading} = useQuery(['bookings'], () => new Promise((resolve, reject) => {
      const query = fireStore.query(
        fireStore.collection(fireStore.getFirestore(), 'bookings'),
        // fireStore.where('isArchived', '!=', true)
      );

      fireStore.onSnapshot(query, (querySnapshot) => {
        const result: Booking[] = [];
        querySnapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          } as Booking);
        })
        resolve(result)
      })

    }))
  
    return { 
      bookings: data as Booking[],
      isLoading
    }
}
