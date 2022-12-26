import Image from "next/image";
import { StylePopVideo } from "./styles";

import IconPlay from "../../assets/play.svg";

export function PopUpVideo({ label, thumb }) {
  return (
    <StylePopVideo>
      <span>{label}</span>
      <button style={{ background: `url(${thumb}) no-repeat center center` }}>
        <div>
          <Image src={IconPlay} alt="Play Video" />
        </div>
      </button>
    </StylePopVideo>
  );
}
