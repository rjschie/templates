import { Tabs } from 'expo-router';
import React from 'react';

import { Text } from '~/components/ui/text';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bare files',
          tabBarIcon: ({ focused }) => <Text>B</Text>,
        }}
      />
      <Tabs.Screen
        name="encrypted"
        options={{
          title: 'Encrypted files',
          tabBarIcon: ({ focused }) => <Text>E</Text>,
        }}
      />
    </Tabs>
  );
}
