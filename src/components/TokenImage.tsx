import Image from "next/image";

type ITokenImage = {
  token: string;
  offsetMarginLeft?: string;
  offsetSize?: string;
};

export default function TokenImage({ token, offsetMarginLeft, offsetSize }: ITokenImage) {
  const fallbackImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Icon-round-Question_mark.jpg/1200px-Icon-round-Question_mark.jpg";

  return (
    <Image
      alt="token"
      style={{
        marginLeft: offsetMarginLeft,
        borderRadius: "50%",
      }}
      width={offsetSize || "60px"}
      height={offsetSize || "60px"}
      src={`https://app.aave.com/icons/tokens/${token.toLowerCase()}.svg`}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImageUrl;
      }}
    />
  );
}
