import { useFetch } from "./useFetch";
import Follower from "./components/Follower.js";

function App() {
  const { loading, data } = useFetch();
  console.log(data);
  return (
    <main className=" max-w-full p-10">
      <section className=" max-w-screen-xl mx-auto bg-fuchsia-700 ">
        <div className="text-center">
          <h1 className=" text-2xl text-white font-semibold pt-10">
            {loading ? "Loading ..." : "Pangination"}
          </h1>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 ">
          {data.map((singlePerson) => {
            return (
              <Follower key={singlePerson.id} {...singlePerson}></Follower>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
