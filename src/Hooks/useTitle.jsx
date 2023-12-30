const useTitle = ({ subTitle, title }) => {
  return (
    <div className="bg-[url('https://i.ibb.co/DY9pPK8/titlebg.jpg')] bg-cover">
      <div className="p-5 py-16 bg-black/40 text-center mt-5 text-yellow-600">
        <p>{subTitle}</p>
        <h2 className="text-3xl md:text-6xl font-semibold uppercase py-2">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default useTitle;
