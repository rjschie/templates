import { Icon } from '~/components/icon';
import { ScreenContainer } from '~/components/screen-container';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

// prettier-ignore

export default function HomeScreen() {
  return (
    <ScreenContainer className="items-start flex-1 gap-4 p-6">

      <Button size="sm"><Icon name="folder" /><Text>Add</Text></Button>
      <Button><Icon name="folder" /><Text>Add</Text></Button>
      <Button size="lg"><Icon name="folder" /><Text>Add</Text></Button>
      <Button size="xl"><Icon name="folder" /><Text>Add</Text></Button>

    </ScreenContainer>
  );
}
