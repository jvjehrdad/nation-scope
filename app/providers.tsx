'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { ReactNode, useState } from 'react';
import theme from '@/core/styles/theme';

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </AntdRegistry>
    </QueryClientProvider>
  );
}
