export async function onRequestGet({ request, next }) {
    const url = new URL(request.url);
    const query = Object.fromEntries(url.searchParams);
    if (query.status == "success") {
        url.pathname = "/success"
        return Response.redirect(url, 302);
    }

    console.log("splash page");
    console.log(request);

    return next();
}
