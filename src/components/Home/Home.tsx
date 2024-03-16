import { Card, CardContent } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

import glasses from '@/assets/glasses.gif';
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const Home = () => {
  return (
    <Card className="max-w-[450px]">
      <CardContent className="p-2 flex items-center justify-around">
        <div className="flex items-center gap-x-4">
          <img className="h-16 w-16 rounded-full" src={glasses} alt="" />
          <div className="min-w-0 flex-auto">
            <div className="text-base font-semibold">AJ Southammavong</div>
            <div className="text-sm text-muted-foreground">
              Software Engineer
            </div>
            <div className="text-xs text-muted-foreground">Oakland, CA</div>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <Button variant="outline" size="icon">
            <GitHubLogoIcon />
          </Button>

          <Button variant="outline" size="icon">
            <LinkedInLogoIcon />
          </Button>

          <Button variant="outline" size="icon">
            <DiscordLogoIcon />
          </Button>
        </div>
      </CardContent>

      {/* <div className="px-4 text-xs text-muted-foreground">Oakland, CA</div> */}

      {/* <CardContent className="p-4 flex items-center justify-around"> */}
      <div className="px-4 pt-2 pb-4 text-sm">
        Full-stack web developer with a passion in building tools to help people
        achieve their goals.
        {/* Passionate about creating robust and scalable server-side logic that
          powers the front-end to ensure the users experience is seamless and
          efficient. */}
      </div>
    </Card>
  );
};

export default Home;
