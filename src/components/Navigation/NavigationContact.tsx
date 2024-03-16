import { Button } from '@/components/ui/button';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ChatBubbleIcon, DoubleArrowDownIcon } from '@radix-ui/react-icons';

// const data = [
//   {
//     goal: 400,
//   },
//   {
//     goal: 300,
//   },
//   {
//     goal: 200,
//   },
//   {
//     goal: 300,
//   },
//   {
//     goal: 200,
//   },
//   {
//     goal: 278,
//   },
//   {
//     goal: 189,
//   },
//   {
//     goal: 239,
//   },
//   {
//     goal: 300,
//   },
//   {
//     goal: 200,
//   },
//   {
//     goal: 278,
//   },
//   {
//     goal: 189,
//   },
//   {
//     goal: 349,
//   },
// ];

const NavigationContact = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <ChatBubbleIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Contact</DrawerTitle>

            <DrawerDescription>
              I'm passionate about creating robust and scalable server-side
              logic that powers the front-end to ensure the users experience is
              seamless and efficient.
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">
                <DoubleArrowDownIcon />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationContact;
