const Panginate = (followers) => {
  const itemPerPage = 9;
  const pages = Math.ceil(followers.length / itemPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    console.log(start);

    return followers.slice(start, start + itemPerPage);
  });

  return newFollowers;
};

export default Panginate;
