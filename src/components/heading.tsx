function Heading({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-slate-300 text-5xl mt-12">{title}</h1>
      <h1 className="text-6xl my-8">{subtitle}</h1>
      <p className="text-2xl w-4/5 min-w-96 text-center px-2 py-4">
        {description}
      </p>
    </div>
  );
}

export default Heading;
