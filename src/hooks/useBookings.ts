import {useQuery} from "@tanstack/react-query"
import {fireStore} from '../services/firebase'

type Booking = {
  id: string,
  service: string,
  date: Date,
  customerId: string
}

type UseBookingsParams = {
  enabled: boolean;
};

export const useBookings = ({ enabled }: UseBookingsParams) => {
  const { data, isLoading } = useQuery(
    ['bookings'],
    () =>
      new Promise((resolve, reject) => {
        const query = fireStore.query(
          fireStore.collection(fireStore.getFirestore(), 'bookings')
        );

        fireStore.onSnapshot(query, (querySnapshot) => {
          const result: Booking[] = [];
          querySnapshot.forEach((doc) => {
            result.push({
              id: doc.id,
              ...doc.data(),
            } as Booking);
          });
          resolve(result);
        });
      }),
    {
      enabled,
    }
  );

  return {
    bookings: data as Booking[],
    isLoading,
  };
};
