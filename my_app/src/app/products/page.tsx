export const metadata={
    title : {
      default: "Product Page",
      template: "%s | My App"
    },
    "description":"View our available products"
}
export default function ProductsPage(){
    return(
        <main>
            <h1 >Product Page</h1>
        <div>Product 1</div>
        <div>Product 2</div>
        <div>Product 3</div>
        </main>    )
};