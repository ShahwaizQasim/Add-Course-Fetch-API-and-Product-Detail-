import Link from "next/link";

async function Posts() {
  let res = await fetch("https://dummyjson.com/products");
  res = await res.json();
  console.log(res);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-4xl pt-10 font-bold">All Products</h1>
        <div className="grid grid-cols-3 mt-10 gap-4">
          {res?.products?.map((products) => (
            <Link key={products.id} href={`/posts/${products.id}`} >
            <div className="flex justify-center items-center flex-col border-2 bore-black p-4">
              <h1>{products?.title}</h1>
              <h5>{products?.description}</h5>
              <h5>{products?.price}</h5>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
