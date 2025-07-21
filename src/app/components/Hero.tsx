import { ProfileCover } from "./ProfileCover";
import { ProfileHeader } from "./ProfileHeader";
import Separator from "./Separator";

export default function Hero() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <ProfileCover />
      {/* This breaks out to full width */}
      <Separator />
      <ProfileHeader />
      <Separator />
      <div className="w-screen h-8 -mx-[50vw] ml-[calc(50%-50vw)] flex grow items-end pb-1 pl-4 bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]"></div>
      <Separator />
    </div>
  )
}