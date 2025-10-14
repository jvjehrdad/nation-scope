'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '@/core/api/fetchCountries';

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  console.log(data, isLoading, error);
  return <MainLayout />;
}
