import React, {useState} from "react";

const AllPeople = () => {

  const [allPeople, setAllPeople] = useState([]);
  const [page, setPage] = (1);

  const getAllPeople = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
if(!Response.ok) {
  console.log(`error ${response.status}`)
}
 const data = await response.json();
      console.log(data);
      setAllPeople(data)
return response.json();
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=> {
    getAllPeople();
  }, []);

  return (
    <>
      <div>AllPeople</div>
     
    </>
  );
};

export default AllPeople;
