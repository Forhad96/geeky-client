import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { DownArrow } from "../../../../test/testIcon";
import PeopleYouMayKnow from "../../../../test/PepoleYouKnow";

export default function AGroup() {
  return (
    <AvatarGroup isBordered className="ml-4">
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
  );
}
