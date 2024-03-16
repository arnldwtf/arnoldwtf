import { Card, CardContent } from '@/components/ui/card';

import NavigationAbout from './NavigationAbout';
import NavigationProjects from './NavigationProjects';
import NavigationExperience from './NavigationExperience';
import { Button } from '../ui/button';
import { HomeIcon } from '@radix-ui/react-icons';
import NavigationContact from './NavigationContact';

const NavigationDock = () => {
  return (
    <Card className="min-w-[250px]">
      <CardContent className="p-2 flex items-center justify-evenly">
        <a href="/">
          <Button variant="outline" size="icon">
            <HomeIcon />
          </Button>
        </a>

        <NavigationAbout />
        <NavigationProjects />
        <NavigationExperience />
        <NavigationContact />

        {/* <Button variant="outline" size="icon">
          <HomeIcon />
        </Button>

        <Button variant="outline" size="icon">
          <PersonIcon />
        </Button>

        <Button variant="outline" size="icon">
          <DesktopIcon />
        </Button>

        <Button variant="outline" size="icon">
          <ChatBubbleIcon />
        </Button>

        <Button variant="outline" size="icon">
          <FileTextIcon />
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default NavigationDock;
