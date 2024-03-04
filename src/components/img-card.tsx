function ImgCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex justify-center">
      <div className="rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={image} alt="Card" />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-3xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            More...
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
