export async function onRequestGet({ request, next }) {
    console.log("success page");
    console.log(request);
    return new Response({ status: 200 })
}
