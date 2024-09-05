
import { Text } from '@mantine/core';
import { footerProps } from '@lib/types';

export default function Footer({year,fullName,studentId}:footerProps) {
  return (
    <div>
      <Text ta='center' c="dimmed" my="sm" size="md" > Copyright © {year} {fullName} {studentId}</Text>
    </div>
  );
}