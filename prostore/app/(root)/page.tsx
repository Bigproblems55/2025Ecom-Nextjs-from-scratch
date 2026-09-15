import sampleData from '@/db/sample-data'
import ProductList from '@/components/shared/product/product-list'
export const metadata = {
  // This will change the page title
  title: 'Home',
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () =>{
  await delay(800);
  console.log(sampleData);
  return <>
    <ProductList 
    data={sampleData.products} 
    title="Newest Arrivals"
    limit={4}
      />
    
  </>
  };

export default Homepage;