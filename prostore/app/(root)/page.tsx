import sampleData from '@/db/sample-data';
import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

export const metadata = {
  // This will change the page title
  title: 'Home',
}
const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const Homepage = async () =>{
  const latestProducts = await getLatestProducts();
  await delay(800);
  console.log(sampleData);
  return <>
    <ProductList 
    data={latestProducts} 
    title="Newest Arrivals"
      />
    
  </>
  };

export default Homepage;
