```diff
!                                                                      
! WARNING - This is probably not a great reference in 2023 and beyond. 
!           This example uses a version of Next.js from 2021. A great  
!           auth library for next-js is https://next-auth.js.org/      
!                                                                      
```

# Next.js authorization example including private route protection

https://jasonraimondi.com/posts/create-a-secured-rest-api-for-a-next-js-application-using-jwt-and-golang/


```bash
git clone git@github.com:jasonraimondi/nextjs-jwt-example.git
cd nextjs-jwt-example
```


```bash
go run ./api/main.go

   ____    __
  / __/___/ /  ___
 / _// __/ _ \/ _ \
/___/\__/_//_/\___/ v3.3.10-dev
High performance, minimalist Go web framework
https://echo.labstack.com
____________________________________O/_______
                                    O\
⇨ http server started on [::]:1323
```

```bash
cd web
npm run dev
```
