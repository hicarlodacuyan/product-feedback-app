import People from "./People";

function PeopleRecommendation() {
  return (
    <section className="bg-white p-4 rounded-lg drop-shadow gap-4 mx-2 hidden md:flex flex-col">
      <p className="font-bold text-sm">Who to follow</p>
      <hr />
      <People />
      <hr />
      <People />
    </section>
  );
}

export default PeopleRecommendation;
