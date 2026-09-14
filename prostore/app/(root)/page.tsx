
export const metadata = {
  // This will change the page title
  title: 'Home',
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () =>{
  await delay(2000);
  return <>Online Extrusion</>
};

export default Homepage;