const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="bg-[url('https://t4.ftcdn.net/jpg/03/50/81/89/360_F_350818931_54A6UVQiJIK8UHFWB0NTGSIKO9jyTbQP.jpg')] bg-cover  mb-16">
      <div className="py-40 bg-black/40 text-yellow-600">
        <div className="container mx-auto">
          <p>{subTitle}</p>
          <h2 className="text-3xl md:text-6xl font-semibold uppercase py-2">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
