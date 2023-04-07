export async function RequestApiProdcut(){
    const dataProduct = await fetch("https://josn-server-ban-hang.vercel.app/products")
    .then((data) => data.json())
    .then((getData) => {
        return getData;
    });
    return dataProduct;
}
export async function RequestApiCategory(){
    const dataProduct = await fetch("https://josn-server-ban-hang.vercel.app/category")
    .then((data) => data.json())
    .then((getData) => {
        return getData;
    });
    return dataProduct;
}