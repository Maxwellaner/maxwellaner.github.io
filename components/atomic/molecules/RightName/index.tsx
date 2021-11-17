import Link from "next/link";
import { RightNameContainer } from "./styled";

export default function RightName() {
  return (
    <RightNameContainer>
      <div>
        <Link href="mailto:maxwellaner@gmail.com">
          <a rel="noreferrer">
            maxwellaner@gmail.com
          </a>
        </Link>
      </div>
    </RightNameContainer>
  );
}