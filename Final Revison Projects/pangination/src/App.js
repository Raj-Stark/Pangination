import { useFetch } from "./useFetch";
import Follower from "./components/Follower.js";
import { useEffect, useState } from "react";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  console.log(data);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const handleNext = () => {
    setPage((oldPage) => {
      let newpage = oldPage + 1;
      if (newpage >= data.length - 1) {
        newpage = data.length - 1;
      }

      return newpage;
    });
  };

  const handlePrev = () => {
    setPage((oldPage) => {
      let newpage = oldPage - 1;
      if (newpage <= 0) {
        newpage = 0;
      }

      return newpage;
    });
  };

  return (
    <main className=" max-w-full p-10">
      <section className=" max-w-screen-xl mx-auto   ">
        <div className="text-center">
          <h1 className=" text-2xl text-black font-semibold pt-10">
            {loading ? "Loading ..." : "Pangination"}
          </h1>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 ">
          {followers.map((singlePerson) => {
            return (
              <Follower key={singlePerson.id} {...singlePerson}></Follower>
            );
          })}
        </div>
        <div className="flex justify-center flex-wrap  ">
          <button onClick={handlePrev}>Prev</button>
          {!loading &&
            data.map((item, i) => {
              return (
                <button
                  key={i}
                  className=" active:bg-red-500 bg-green-500 m-4 px-4 py-1 text-white rounded-md "
                  onClick={() => handlePage(i)}
                >
                  {i + 1}
                </button>
              );
            })}
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
