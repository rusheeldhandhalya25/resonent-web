const BlogCard = ({ Image, Title, Descriptive, Date }) => {
  return (
    <div className="grid grid-cols-[20%_80%] flex items-center justify-center ">
      <div>
        <img src={Image} alt={`${Title} Image`} className="h-[7rem] w-[7rem]" />
      </div>

      <div></div>
    </div>
  );
};

export default BlogCard;
