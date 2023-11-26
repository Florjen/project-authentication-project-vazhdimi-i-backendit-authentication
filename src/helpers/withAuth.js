const withAuth = (Page = '') =>{
const HOC = (pageProps) =>{
return(
    <>
    <Page {...pageProps}/>
    </>
)
}
return HOC
}
//e therrasim me getServerSideProps aty ku duam ta aplikojme
withAuth.isAuthorized = (ctx) =>{
    const isAuthorized = ctx.req.cookies.jwt ? true : false
    //nese na kthehet false
    if(!isAuthorized) {
        return {
            redirect:{
                destination:"/login",
                permanent:false
            }
        }
    }
    return {
        props:{
            isAuthorized
        }
    }
}


export default withAuth