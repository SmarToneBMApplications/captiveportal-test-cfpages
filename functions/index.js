export async function onRequestGet({ request, next }) {
    console.log("splash page");
    console.log(request);
    return next();
}
