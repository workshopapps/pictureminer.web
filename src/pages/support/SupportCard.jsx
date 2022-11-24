function SupportCard(props) {
  return (
    <div className="flex flex-col bg-white  justify-around items-center w-80 max-h-1/2  rounded-lg">
      <img src={props.img} alt="" className="self-center pt-10 pb-4" />
      <p className="font-semibold">{props.title}</p>
      <p className="text-center pb-4 pt-6">{props.word}</p>
      <p className="pb-14">{props.article}</p>
    </div>
  );
}

export default SupportCard;
