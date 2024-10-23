async function ProductDetail({ params }) {
  let res = await fetch(`https://dummyjson.com/products/${params.id}`);
  res = await res.json();
  console.log(res);

  return (
    <div className="container mx-auto">
      <div className="mx-auto w-1/3  mt-5 ">
        <div className="flex justify-center items-center flex-col pt-5 border-2 border-black p-4">
          <h1 className="text-2xl font-bold">{res?.title}</h1>
          <h5>{res?.description}</h5>
          <h5>{res?.price}</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
